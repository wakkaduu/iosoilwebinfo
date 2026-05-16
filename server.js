require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const apkDirectory = path.join(__dirname, 'apk');

function getLatestApkFile() {
  if (!fs.existsSync(apkDirectory)) {
    return null;
  }

  const apkFiles = fs
    .readdirSync(apkDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.apk'))
    .map((entry) => {
      const fullPath = path.join(apkDirectory, entry.name);
      return {
        name: entry.name,
        path: fullPath,
        modifiedAt: fs.statSync(fullPath).mtimeMs,
      };
    })
    .sort((left, right) => right.modifiedAt - left.modifiedAt);

  return apkFiles[0] ?? null;
}

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/download-apk', (req, res) => {
  let apkFile;

  try {
    apkFile = getLatestApkFile();
  } catch (error) {
    console.error('Failed to read APK directory:', error);
    return res.status(500).send('Unable to prepare the APK download right now.');
  }

  if (!apkFile) {
    return res.status(404).send('No APK file found in the apk folder.');
  }

  return res.download(apkFile.path, apkFile.name);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`ioSoil static server running on port ${PORT}`));
