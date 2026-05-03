/* ============================================================
   ioSoil — Plant Care Database
   app.js  |  Tab switching & keyboard navigation
   ============================================================ */

/**
 * show(cat, el)
 * Activates the selected category panel and updates tab state.
 *
 * @param {string} cat  - Category key matching panel id (e.g. "arid")
 * @param {Element} el  - The clicked tab button element
 */
function show(cat, el) {
  // Deactivate all panels
  document.querySelectorAll('.panel').forEach(p => {
    p.classList.remove('active');
    p.setAttribute('aria-hidden', 'true');
  });

  // Deactivate all tabs
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
  });

  // Activate the selected panel
  const panel = document.getElementById('panel-' + cat);
  panel.classList.add('active');
  panel.removeAttribute('aria-hidden');

  // Activate the clicked tab
  el.classList.add('active');
  el.setAttribute('aria-selected', 'true');
}

/**
 * Keyboard navigation for the tab bar.
 * ArrowRight / ArrowLeft moves focus and activates adjacent tabs.
 */
document.addEventListener('DOMContentLoaded', function () {
  const tabBar = document.querySelector('.tabs');

  if (tabBar) {
    tabBar.addEventListener('keydown', function (e) {
      const tabs = Array.from(document.querySelectorAll('.tab'));
      const current = document.activeElement;
      const idx = tabs.indexOf(current);

      if (idx === -1) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const next = tabs[(idx + 1) % tabs.length];
        next.focus();
        next.click();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = tabs[(idx - 1 + tabs.length) % tabs.length];
        prev.focus();
        prev.click();
      }
    });
  }
});

/* -----------------------------
   Simple i18n: translation map
   ----------------------------- */
const translations = {
  en: {
    logo_sub: 'Plant Care Database',
    language_label: 'Language',
    option_en: 'English',
    option_tl: 'Tagalog',
    option_es: 'Español',
    option_fr: 'Français',
    option_de: 'Deutsch',
    option_zh: '中文 (Chinese)',
    option_ja: '日本語 (Japanese)',
    option_ko: '한국어 (Korean)',
    option_pt: 'Português',
    option_ru: 'Русский',
    tab_arid: 'Arid',
    tab_drought: 'Drought-Tolerant',
    tab_tropical: 'Tropical',
    tab_leafy: 'Leafy Vegetable',
    tab_aquatic: 'Aquatic',
    watering_logic: 'Watering Logic',
    growing_conditions: 'Growing Conditions',
    plant_index: 'Plant Index — 12 Species',
    trigger: 'Trigger',
    threshold: 'Threshold',
    ideal_moisture_label: 'Ideal soil moisture range',
    soil_mix_label: 'Soil Mix',
    light_label: 'Light',
    humidity_label: 'Humidity',
    substrate_label: 'Substrate',
    water_quality_label: 'Water Quality',
    footer: 'ioSoil Plant Care Database — v1.0 — 5 categories • 60 species',
    arid_badge: 'Category 01 — Arid',
    arid_title: 'Desert-Adapted Plants',
    arid_summary: 'Arid plants are masters of water conservation, engineered by nature to thrive in near-dry soil conditions. If you tend to forget watering schedules, these resilient species are your ideal companions—they reward neglect far more than overwatering.',
    arid_moisture_pct: '10% – 20%',
    drought_badge: 'Category 02 — Drought-Tolerant',
    drought_title: 'Resilient Water-Efficient Plants',
    drought_summary: 'Drought-tolerant plants store moisture in leaves, stems, or roots and perform well with less frequent irrigation.',
    drought_moisture_pct: '20% – 40%',
    tropical_badge: 'Category 03 — Tropical',
    tropical_title: 'High-Humidity Rainforest Plants',
    tropical_summary: 'Tropical plants thrive with consistent moisture, warm temps, and higher humidity.',
    tropical_moisture_pct: '50% – 70%',
    leafy_badge: 'Category 04 — Leafy Vegetable',
    leafy_title: 'Fast-Growing Edible Crops',
    leafy_summary: 'Leafy vegetables need consistent watering for tender harvests; dryness can cause bolting and bitterness.',
    leafy_moisture_pct: '55% – 75%',
    aquatic_badge: 'Category 05 — Aquatic',
    aquatic_title: 'Submerged & Marginal Water Plants',
    aquatic_summary: 'Aquatic plants require saturated or submerged conditions; focus on water chemistry and oxygenation.',
    aquatic_moisture_pct: '85% – 100%+'
  },
  tl: {
    logo_sub: 'Talaan ng Pangangalaga ng Halaman',
    language_label: 'Wika',
    option_en: 'Ingles',
    option_tl: 'Tagalog',
    option_es: 'Espanyol',
    option_fr: 'Pranses',
    option_de: 'Aleman',
    option_zh: 'Tsino',
    option_ja: 'Hapones',
    option_ko: 'Koreano',
    option_pt: 'Portuges',
    option_ru: 'Ruso',
    tab_arid: 'Arid',
    tab_drought: 'Matibay sa Tagtuyot',
    tab_tropical: 'Tropikal',
    tab_leafy: 'Mga Gulay na Dahon',
    tab_aquatic: 'Aquatic',
    watering_logic: 'Lohiya ng Pagdidilig',
    growing_conditions: 'Kondisyong Pampalago',
    plant_index: 'Index ng Halaman — 12 Species',
    trigger: 'Trigger',
    threshold: 'Threshold',
    ideal_moisture_label: 'Perpektong antas ng halumigmig ng lupa',
    soil_mix_label: 'Halo ng Lupa',
    light_label: 'Liwanag',
    humidity_label: 'Halumigmig',
    substrate_label: 'Substrate',
    water_quality_label: 'Kalidad ng Tubig',
    footer: 'ioSoil Talaan ng Pangangalaga ng Halaman — v1.0 — 5 kategorya • 60 species',
    arid_badge: 'Kategorya 01 — Arid',
    arid_title: 'Mga Halamang Adapted sa Disyerto',
    arid_summary: 'Ang mga arid na halaman ay eksperto sa pagtitipid ng tubig, idinisenyo upang mabuhay sa halos tuyong lupa. Kung nakakalimutin ka sa pagdidilig, ang mga matitibay na ito ang mabuting kasama — mas nababayaran nila ang di-pag-aalaga kaysa sa labis na pagdidilig.',
    arid_moisture_pct: '10% – 20%',
    drought_badge: 'Kategorya 02 — Matibay sa Tagtuyot',
    drought_title: 'Matibay at Matipid sa Tubig',
    drought_summary: 'Ang mga matibay sa tagtuyot ay nag-iimbak ng tubig sa dahon, tangkay, o ugat at gumagana nang mabuti kahit hindi madalas didiligan.',
    drought_moisture_pct: '20% – 40%',
    tropical_badge: 'Kategorya 03 — Tropikal',
    tropical_title: 'Mga Halamang Rainforest na Mataas ang Humidity',
    tropical_summary: 'Ang mga tropikal na halaman ay umuunlad sa pare-parehong kahalumigmigan, mainit na temperatura, at mas mataas na humidity.',
    tropical_moisture_pct: '50% – 70%',
    leafy_badge: 'Kategorya 04 — Mga Gulay na Dahon',
    leafy_title: 'Mabilis Lumaking Mga Pananim na Nakakain',
    leafy_summary: 'Ang mga gulay na dahon ay kailangan ng tuloy-tuloy na pagdidilig upang maging malambot ang ani; ang pagkatuyo ay maaaring magdulot ng bolting at mapait na lasa.',
    leafy_moisture_pct: '55% – 75%',
    aquatic_badge: 'Kategorya 05 — Aquatic',
    aquatic_title: 'Mga Halamang Lubog at Marginal sa Tubig',
    aquatic_summary: 'Ang mga aquatic na halaman ay nangangailangan ng palaging basa o lubog na kondisyon; tutukan ang chemistry at oxygen ng tubig.',
    aquatic_moisture_pct: '85% – 100%+'
  }
};
// add missing translation keys for card values, plant names, and trigger texts
translations.en.arid_trigger = 'Water when soil moisture is below 10%. Usually every 2–3 weeks in the growing season. Use a soil probe to check — looking at the soil is not enough.';
translations.en.arid_threshold = 'Stop watering when moisture reaches 20%. Do not let soil stay full of water. Drain extra water right away.';
translations.en.arid_soil_mix = 'Mix: 50% coarse sand, 30% perlite, 20% potting mix. Use a fast-draining soil.';
translations.en.arid_light = 'Full sun, about 6–8 hours a day. Avoid shady spots.';
translations.en.arid_humidity = 'Low humidity (10–30%). Keep away from very humid rooms.';
// Danger ranges (English) — simplified
translations.en.arid_danger_low = 'Danger — moisture below 5%: plants can dry out and die.';
translations.en.arid_danger_high = 'Danger — moisture above 30%: roots can rot.';
translations.en.drought_danger_low = 'Danger — moisture below 12%: plants can wilt.';
translations.en.drought_danger_high = 'Danger — moisture above 50%: roots can suffer and rot.';
translations.en.tropical_danger_low = 'Danger — moisture below 30%: tropical plants can suffer drought.';
translations.en.tropical_danger_high = 'Danger — moisture above 80%: fast root rot risk.';
translations.en.leafy_danger_low = 'Danger — moisture below 40%: leaves may bolt or yield can drop.';
translations.en.leafy_danger_high = 'Danger — moisture above 85%: roots may lack oxygen and fail.';
translations.en.aquatic_danger_low = 'Danger — water below 75%: marginal water plants may struggle.';
translations.en.aquatic_danger_high = 'Note — no upper moisture danger; watch water quality and oxygen.';

// small summary title for the collapsible danger panel
translations.en.danger_summary_title = 'Danger details';
translations.en.drought_soil_mix = 'Use well-draining loam: 40% potting soil, 30% perlite, 30% grit or pumice.';
translations.en.drought_light = 'Bright light, indirect to some direct sun, 4–8 hours.';
translations.en.drought_humidity = 'Medium low humidity (30–50%). Misting is not needed.';
translations.en.tropical_soil_mix = 'Use airy mix: 60% coco coir, 20% perlite, 20% bark.';
translations.en.tropical_light = 'Bright, indirect light, 4–6 hours. Avoid strong afternoon sun.';
translations.en.tropical_humidity = 'High humidity (60–80%). Use a tray or humidifier if needed.';
translations.en.leafy_soil_mix = 'Rich soil: 50% compost, 30% topsoil, 20% perlite.';
translations.en.leafy_light = 'Full sun to part shade, 4–8 hours. Shade cloth helps in very hot weather.';
translations.en.leafy_humidity = 'Moderate humidity (50–70%). Good air flow helps prevent disease.';
translations.en.aquatic_substrate = 'Use aquatic clay or loam with coarse gravel on top. Do not use regular potting mix.';
translations.en.aquatic_light = 'Full sun to bright indirect light, 4–8 hours.';
translations.en.aquatic_water_quality = 'Keep water 15–28°C. Add aeration and check pH regularly.';
translations.en.drought_trigger = 'Water when the top 2–3 cm of soil is dry or if moisture is below 20%.';
translations.en.drought_threshold = 'Stop watering at 40% moisture. Let pots drain fully.';
translations.en.tropical_trigger = 'Water when moisture is below 50% or the top inch feels dry. Check every few days in growth season.';
translations.en.tropical_threshold = 'Stop at 70% moisture. Make sure pots drain well.';
translations.en.leafy_trigger = 'Water when moisture drops to 55%. In hot weather check daily.';
translations.en.leafy_threshold = 'Keep moisture at or below 75%. Deep, less-frequent watering outdoors helps roots.';
translations.en.aquatic_trigger = 'Keep water level steady. Refill if it drops below 85% for marginal plants.';
translations.en.aquatic_threshold = 'No upper moisture limit. Instead watch pH, oxygen, and water quality.';
// Arid plants
translations.en.plant_arid_1 = 'Aloe Vera';
translations.en.plant_arid_2 = 'Agave';
translations.en.plant_arid_3 = 'Euphorbia';
translations.en.plant_arid_4 = 'Haworthia';
translations.en.plant_arid_5 = 'Lithops';
translations.en.plant_arid_6 = 'Kalanchoe';
translations.en.plant_arid_7 = 'Echeveria';
translations.en.plant_arid_8 = 'Opuntia (Prickly Pear)';
translations.en.plant_arid_9 = 'Sansevieria (Snake Plant)';
translations.en.plant_arid_10 = 'Sedum';
translations.en.plant_arid_11 = 'Crassula (Jade Plant)';
translations.en.plant_arid_12 = 'Adenium (Desert Rose)';
// Drought plants
translations.en.plant_drought_1 = 'Bougainvillea';
translations.en.plant_drought_2 = 'Moringa (Malunggay)';
translations.en.plant_drought_3 = 'Plumeria (Kalachuchi)';
translations.en.plant_drought_4 = 'Lantana';
translations.en.plant_drought_5 = 'Roselle';
translations.en.plant_drought_6 = 'Neem';
translations.en.plant_drought_7 = 'Portulaca (Moss Rose)';
translations.en.plant_drought_8 = 'Jade Plant (Crassula)';
translations.en.plant_drought_9 = 'Snake Plant (Sansevieria)';
translations.en.plant_drought_10 = 'Euphorbia';
translations.en.plant_drought_11 = 'Echeveria';
translations.en.plant_drought_12 = 'Pomegranate';
// Tropical plants
translations.en.plant_tropical_1 = 'Coconut';
translations.en.plant_tropical_2 = 'Mango';
translations.en.plant_tropical_3 = 'Banana';
translations.en.plant_tropical_4 = 'Papaya';
translations.en.plant_tropical_5 = 'Jackfruit (Langka)';
translations.en.plant_tropical_6 = 'Durian';
translations.en.plant_tropical_7 = 'Heliconia';
translations.en.plant_tropical_8 = 'Anthurium';
translations.en.plant_tropical_9 = 'Calathea';
translations.en.plant_tropical_10 = 'Monstera';
translations.en.plant_tropical_11 = 'Philodendron';
translations.en.plant_tropical_12 = 'Bromeliads';
// Leafy plants
translations.en.plant_leafy_1 = 'Kangkong (Water Spinach)';
translations.en.plant_leafy_2 = 'Pechay (Bok Choy)';
translations.en.plant_leafy_3 = 'Malunggay (Moringa leaves)';
translations.en.plant_leafy_4 = 'Alugbati (Basella)';
translations.en.plant_leafy_5 = 'Mustasa (Mustard Greens)';
translations.en.plant_leafy_6 = 'Lettuce';
translations.en.plant_leafy_7 = 'Spinach';
translations.en.plant_leafy_8 = 'Kangkong (young shoots)';
translations.en.plant_leafy_9 = 'Camote Tops (Sweet Potato leaves)';
translations.en.plant_leafy_10 = 'Saluyot (Jute)';
translations.en.plant_leafy_11 = 'Watercress';
translations.en.plant_leafy_12 = 'Radish Greens';
// Aquatic plants
translations.en.plant_aquatic_1 = 'Water Hyacinth';
translations.en.plant_aquatic_2 = 'Water Lettuce';
translations.en.plant_aquatic_3 = 'Kangkong (Water Spinach)';
translations.en.plant_aquatic_4 = 'Lotus';
translations.en.plant_aquatic_5 = 'Water Lily';
translations.en.plant_aquatic_6 = 'Duckweed';
translations.en.plant_aquatic_7 = 'Papyrus';
translations.en.plant_aquatic_8 = 'Cattail';
translations.en.plant_aquatic_9 = 'Arrowhead';
translations.en.plant_aquatic_10 = 'Yellow Iris';
translations.en.plant_aquatic_11 = 'Umbrella Palm';
translations.en.plant_aquatic_12 = 'Water Mint';

translations.tl = translations.tl || {};
translations.tl.arid_trigger = 'Didiligan kapag ang moisture ay bumaba sa <strong>mas mababa sa 10%</strong>, karaniwang bawat 14–21 araw sa panahon ng paglago. Palaging i-verify gamit ang soil probe; ang visual cues lamang ay hindi sapat.';
translations.tl.arid_threshold = 'Itigil ang pagdidilig kapag ang moisture ay umabot na sa <strong>20%</strong>. Huwag hayaang manatiling nababasa ang substrate. I-drain agad ang labis—ang nakatigil na tubig ay nakakamali sa karamihan ng arid species.';
translations.tl.arid_soil_mix = '50% mababang buhangin + 30% perlite + 20% potting mix. Kailangan ng mabigat na, mabilis na draining substrate.';
translations.tl.arid_light = 'Buong araw ng araw, 6–8+ oras araw-araw. Hinaharap sa Timog o Kanluran ay mas ginagustuhan. Iwasan ang filtered shade.';
translations.tl.arid_humidity = '10–30% RH. Kailangan ng mababang ambient humidity. Iwasan ang mainit na banyo o closed terrariums.';
// Danger ranges (Tagalog)
translations.tl.arid_danger_low = 'Babala — halumigmig ng lupa < 5%: malubhang dehydration at mabilis na pagkatuyo.';
translations.tl.arid_danger_high = 'Babala — halumigmig ng lupa > 30%: mataas na panganib ng root rot.';
translations.tl.drought_danger_low = 'Babala — halumigmig ng lupa < 12%: panganib ng pag-wilt.';
translations.tl.drought_danger_high = 'Babala — halumigmig ng lupa > 50%: panganib ng suffocation ng ugat at pagkabulok.';
translations.tl.tropical_danger_low = 'Babala — halumigmig ng lupa < 30%: stress para sa tropikal na halaman.';
translations.tl.tropical_danger_high = 'Babala — halumigmig ng lupa > 80%: mabilis na panganib ng root rot.';
translations.tl.leafy_danger_low = 'Babala — halumigmig ng lupa < 40%: maaaring magdulot ng bolting at pagbaba ng ani.';
translations.tl.leafy_danger_high = 'Babala — halumigmig ng lupa > 85%: panganib ng kakulangan ng oxygen sa ugat.';
translations.tl.aquatic_danger_low = 'Babala — antas ng tubig < 75%: ang mga marginal na species ay maaaring maghirap.';
translations.tl.aquatic_danger_high = 'Tandaan — walang itaas na limitasyon sa kahalumigmigan; subaybayan ang kalidad ng tubig at oxygenation.';
translations.tl.danger_summary_title = 'Mga panganib at paalala';
translations.tl.drought_soil_mix = 'Well-draining loam: 40% potting soil + 30% perlite + 30% grit o pumice para sa drainage.';
translations.tl.drought_light = 'Maliwanag na indirect hanggang buong araw, 4–8 oras. Tinatanggap ang partial shade ngunit nababawasan ang overall vigour.';
translations.tl.drought_humidity = '30–50% RH. Tinatanggap ang tuyong indoor air. Ang misting ay hindi kailangan at madalas na counterproductive.';
translations.tl.tropical_soil_mix = 'Peat-free loam: 60% coco coir + 20% perlite + 20% orchid bark para sa aeration at structure.';
translations.tl.tropical_light = 'Maliwanag na indirect na liwanag, 4–6 oras. Walang harsh afternoon sun. Ang mga window na nakaharap sa Silangang direksyon ay ideal.';
translations.tl.tropical_humidity = '60–80% RH. Gumamit ng pebble tray, humidifier, o ipangkatipang sama-sama ang mga halaman upang taasan ang ambient humidity.';
translations.tl.leafy_soil_mix = 'Mayamang loamy soil: 50% compost + 30% topsoil + 20% perlite. Mataas na nitrogen content ay mahalaga.';
translations.tl.leafy_light = 'Buong araw hanggang partial shade, 4–8 oras. Shade cloth ay inirerekomenda sa itaas ng 35°C upang maiwasan ang bolting.';
translations.tl.leafy_humidity = '50–70% RH. Mabuting air circulation ay nagpapabawas ng fungal issues tulad ng downy mildew at grey mould.';
translations.tl.aquatic_substrate = 'Aquatic clay o loam na may coarse gravel sa tuktok. Iwasan ang potting mix—ito ay nagiging makalat at mabilis na nabubulok.';
translations.tl.aquatic_light = 'Buong araw hanggang maliwanag na indirect, 4–8 oras. Ang floating species ay natural na nagbabahagi ng shade sa mga submersible sa ibaba.';
translations.tl.aquatic_water_quality = 'Temp 15–28°C. Mag-oxygenate gamit ang aerator o fountain pump. I-test ang pH linggu-linggu. Alisin ang algae kaagad.';
translations.tl.drought_trigger = 'Didiligan kapag ang ibabaw ng lupa (2–3 cm) ay tuyo at ang moisture ay <strong>mas mababa sa 20%</strong>. Dalas: bawat 7–14 araw sa tag-init, buwanan sa taglamig.';
translations.tl.drought_threshold = 'Itigil sa <strong>40% moisture</strong>. Payagan ang buong drainage bago ibalik ang paso sa ilalim. Ang nakakadalas na wet-dry cycles ay nagpapabuti ng kalusugan ng ugat.';
translations.tl.tropical_trigger = 'Didiligan kapag ang sensor ay <strong>mas mababa sa 50%</strong> o ang ibabaw na pulgada ng lupa ay tuyo. Sa aktibong paglago, suriin bawat 3–5 araw. Bawasan ang dalas sa taglamig.';
translations.tl.tropical_threshold = 'Itigil sa <strong>70% moisture</strong>. Siguraduhing may drainage holes ang paso. Mabilis magkaroon ng root rot kapag lampas 80%.';
translations.tl.leafy_trigger = 'Didiligan kapag ang moisture ay bumaba sa <strong>55%</strong>. Sa mainit na panahon o ilaw ng halaman, suriin araw-araw. Ang tuloy-tuloy na moisture ay pumipigil sa bolting at mapait na lasa.';
translations.tl.leafy_threshold = 'Panatilihin sa o mababa sa <strong>75% moisture</strong>. Para sa labas, malalim at hindi madalas na pagdidilig ay naghihikayat ng malalim na ugat.';
translations.tl.aquatic_trigger = 'Panatilihin ang antas ng tubig nang pare-pareho. Para sa marginal na species, dagdagan kapag bumaba sa <strong>85%</strong>. Para sa submerged, panatilihin ang 2–15 cm na sakop sa ibabaw.';
translations.tl.aquatic_threshold = 'Walang itaas na limitasyon sa moisture. Subaybayan ang pH (6.5–8.5), dKH (3–8), at EC/TDS. Palitan 10–20% ng tubig lingguhan.';
// Tagalog: Arid plants
translations.tl.plant_arid_1 = 'Aloe Vera';
translations.tl.plant_arid_2 = 'Agave';
translations.tl.plant_arid_3 = 'Euphorbia';
translations.tl.plant_arid_4 = 'Haworthia';
translations.tl.plant_arid_5 = 'Lithops';
translations.tl.plant_arid_6 = 'Kalanchoe';
translations.tl.plant_arid_7 = 'Echeveria';
translations.tl.plant_arid_8 = 'Opuntia (Prickly Pear)';
translations.tl.plant_arid_9 = 'Sansevieria (Snake Plant)';
translations.tl.plant_arid_10 = 'Sedum';
translations.tl.plant_arid_11 = 'Crassula (Jade Plant)';
translations.tl.plant_arid_12 = 'Adenium (Desert Rose)';
// Tagalog: Drought plants
translations.tl.plant_drought_1 = 'Bougainvillea';
translations.tl.plant_drought_2 = 'Malunggay (Moringa)';
translations.tl.plant_drought_3 = 'Kalachuchi (Plumeria)';
translations.tl.plant_drought_4 = 'Lantana';
translations.tl.plant_drought_5 = 'Roselle';
translations.tl.plant_drought_6 = 'Neem';
translations.tl.plant_drought_7 = 'Portulaca (Moss Rose)';
translations.tl.plant_drought_8 = 'Jade Plant (Crassula)';
translations.tl.plant_drought_9 = 'Snake Plant (Sansevieria)';
translations.tl.plant_drought_10 = 'Euphorbia';
translations.tl.plant_drought_11 = 'Echeveria';
translations.tl.plant_drought_12 = 'Granada (Pomegranate)';
// Tagalog: Tropical plants
translations.tl.plant_tropical_1 = 'Niyog (Coconut)';
translations.tl.plant_tropical_2 = 'Mangga (Mango)';
translations.tl.plant_tropical_3 = 'Saging (Banana)';
translations.tl.plant_tropical_4 = 'Papaya';
translations.tl.plant_tropical_5 = 'Langka (Jackfruit)';
translations.tl.plant_tropical_6 = 'Durian';
translations.tl.plant_tropical_7 = 'Heliconia';
translations.tl.plant_tropical_8 = 'Anthurium';
translations.tl.plant_tropical_9 = 'Calathea';
translations.tl.plant_tropical_10 = 'Monstera';
translations.tl.plant_tropical_11 = 'Philodendron';
translations.tl.plant_tropical_12 = 'Bromeliads';
// Tagalog: Leafy plants
translations.tl.plant_leafy_1 = 'Kangkong (Water Spinach)';
translations.tl.plant_leafy_2 = 'Pechay (Bok Choy)';
translations.tl.plant_leafy_3 = 'Malunggay (Moringa)';
translations.tl.plant_leafy_4 = 'Alugbati (Basella)';
translations.tl.plant_leafy_5 = 'Mustasa (Mustard Greens)';
translations.tl.plant_leafy_6 = 'Letsugas (Lettuce)';
translations.tl.plant_leafy_7 = 'Spinach';
translations.tl.plant_leafy_8 = 'Kangkong (young shoots)';
translations.tl.plant_leafy_9 = 'Dahon ng kamote (Camote Tops)';
translations.tl.plant_leafy_10 = 'Saluyot (Jute)';
translations.tl.plant_leafy_11 = 'Watercress';
translations.tl.plant_leafy_12 = 'Dahon ng labanos (Radish Greens)';
// Tagalog: Aquatic plants
translations.tl.plant_aquatic_1 = 'Water Hyacinth (Kawayan-kawayan)';
translations.tl.plant_aquatic_2 = 'Water Lettuce';
translations.tl.plant_aquatic_3 = 'Kangkong (Water Spinach)';
translations.tl.plant_aquatic_4 = 'Lotus';
translations.tl.plant_aquatic_5 = 'Water Lily';
translations.tl.plant_aquatic_6 = 'Duckweed';
translations.tl.plant_aquatic_7 = 'Papyrus';
translations.tl.plant_aquatic_8 = 'Cattail';
translations.tl.plant_aquatic_9 = 'Arrowhead';
translations.tl.plant_aquatic_10 = 'Yellow Iris';
translations.tl.plant_aquatic_11 = 'Umbrella Palm';
translations.tl.plant_aquatic_12 = 'Water Mint';

// Build complete static dictionaries for every language option in the selector.
const SUPPORTED_LANGS = ['en', 'tl', 'es', 'fr', 'de', 'zh', 'ja', 'ko', 'pt', 'ru'];
SUPPORTED_LANGS.forEach(lang => {
  translations[lang] = { ...translations.en, ...(translations[lang] || {}) };
});

const staticLanguagePacks = {
  es: {
    logo_sub: 'Base de Datos de Cuidado de Plantas',
    language_label: 'Idioma',
    option_en: 'Inglés',
    option_tl: 'Tagalo',
    option_es: 'Español',
    option_fr: 'Francés',
    option_de: 'Alemán',
    option_zh: 'Chino',
    option_ja: 'Japonés',
    option_ko: 'Coreano',
    option_pt: 'Portugués',
    option_ru: 'Ruso',
    tab_drought: 'Resistente a Sequía',
    tab_leafy: 'Hortaliza de Hoja',
    watering_logic: 'Lógica de Riego',
    growing_conditions: 'Condiciones de Cultivo',
    plant_index: 'Índice de Plantas — 12 Especies',
    trigger: 'Disparador',
    threshold: 'Umbral',
    ideal_moisture_label: 'Rango ideal de humedad del suelo',
    soil_mix_label: 'Mezcla de Suelo',
    light_label: 'Luz',
    humidity_label: 'Humedad',
    substrate_label: 'Sustrato',
    water_quality_label: 'Calidad del Agua',
    footer: 'Base de Datos de Cuidado de Plantas ioSoil — v1.0 — 5 categorías • 60 especies',
    drought_title: 'Plantas Resilientes y Eficientes en Agua',
    tropical_title: 'Plantas de Selva de Alta Humedad',
    leafy_title: 'Cultivos Comestibles de Rápido Crecimiento',
    aquatic_title: 'Plantas Acuáticas Sumergidas y Marginales'
  },
  fr: {
    logo_sub: 'Base de Données de Soins des Plantes',
    language_label: 'Langue',
    option_en: 'Anglais',
    option_tl: 'Tagalog',
    option_es: 'Espagnol',
    option_fr: 'Français',
    option_de: 'Allemand',
    option_zh: 'Chinois',
    option_ja: 'Japonais',
    option_ko: 'Coréen',
    option_pt: 'Portugais',
    option_ru: 'Russe',
    tab_drought: 'Tolérantes à la Sécheresse',
    tab_leafy: 'Légumes Feuillus',
    watering_logic: 'Logique d\'Arrosage',
    growing_conditions: 'Conditions de Culture',
    plant_index: 'Index des Plantes — 12 Espèces',
    trigger: 'Déclencheur',
    threshold: 'Seuil',
    ideal_moisture_label: 'Plage idéale d\'humidité du sol',
    soil_mix_label: 'Mélange de Sol',
    light_label: 'Lumière',
    humidity_label: 'Humidité',
    substrate_label: 'Substrat',
    water_quality_label: 'Qualité de l\'Eau',
    footer: 'Base de Données de Soins des Plantes ioSoil — v1.0 — 5 catégories • 60 espèces',
    drought_title: 'Plantes Résistantes et Économes en Eau',
    tropical_title: 'Plantes Tropicales à Forte Humidité',
    leafy_title: 'Cultures Comestibles à Croissance Rapide',
    aquatic_title: 'Plantes Aquatiques Submergées et Marginales'
  },
  de: {
    logo_sub: 'Pflanzenpflege-Datenbank',
    language_label: 'Sprache',
    option_en: 'Englisch',
    option_tl: 'Tagalog',
    option_es: 'Spanisch',
    option_fr: 'Französisch',
    option_de: 'Deutsch',
    option_zh: 'Chinesisch',
    option_ja: 'Japanisch',
    option_ko: 'Koreanisch',
    option_pt: 'Portugiesisch',
    option_ru: 'Russisch',
    tab_drought: 'Trockenheitsresistent',
    tab_leafy: 'Blattgemüse',
    watering_logic: 'Bewässerungslogik',
    growing_conditions: 'Wachstumsbedingungen',
    plant_index: 'Pflanzenindex — 12 Arten',
    trigger: 'Auslöser',
    threshold: 'Schwelle',
    ideal_moisture_label: 'Idealer Bodenfeuchtigkeitsbereich',
    soil_mix_label: 'Substratmischung',
    light_label: 'Licht',
    humidity_label: 'Luftfeuchtigkeit',
    substrate_label: 'Substrat',
    water_quality_label: 'Wasserqualität',
    footer: 'ioSoil Pflanzenpflege-Datenbank — v1.0 — 5 Kategorien • 60 Arten',
    drought_title: 'Robuste und Wassersparende Pflanzen',
    tropical_title: 'Tropische Pflanzen mit Hoher Luftfeuchtigkeit',
    leafy_title: 'Schnellwachsende Essbare Kulturen',
    aquatic_title: 'Untergetauchte und Ufernahe Wasserpflanzen'
  },
  pt: {
    logo_sub: 'Base de Dados de Cuidados com Plantas',
    language_label: 'Idioma',
    option_en: 'Inglês',
    option_tl: 'Tagalo',
    option_es: 'Espanhol',
    option_fr: 'Francês',
    option_de: 'Alemão',
    option_zh: 'Chinês',
    option_ja: 'Japonês',
    option_ko: 'Coreano',
    option_pt: 'Português',
    option_ru: 'Russo',
    tab_drought: 'Tolerante à Seca',
    tab_leafy: 'Vegetais Folhosos',
    watering_logic: 'Lógica de Rega',
    growing_conditions: 'Condições de Cultivo',
    plant_index: 'Índice de Plantas — 12 Espécies',
    trigger: 'Gatilho',
    threshold: 'Limite',
    ideal_moisture_label: 'Faixa ideal de umidade do solo',
    soil_mix_label: 'Mistura de Solo',
    light_label: 'Luz',
    humidity_label: 'Umidade',
    substrate_label: 'Substrato',
    water_quality_label: 'Qualidade da Água',
    footer: 'Base de Dados de Cuidados com Plantas ioSoil — v1.0 — 5 categorias • 60 espécies',
    drought_title: 'Plantas Resilientes e Eficientes em Água',
    tropical_title: 'Plantas Tropicais de Alta Umidade',
    leafy_title: 'Cultivos Comestíveis de Crescimento Rápido',
    aquatic_title: 'Plantas Aquáticas Submersas e Marginais'
  },
  ru: {
    logo_sub: 'База Ухода за Растениями',
    language_label: 'Язык',
    option_en: 'Английский',
    option_tl: 'Тагальский',
    option_es: 'Испанский',
    option_fr: 'Французский',
    option_de: 'Немецкий',
    option_zh: 'Китайский',
    option_ja: 'Японский',
    option_ko: 'Корейский',
    option_pt: 'Португальский',
    option_ru: 'Русский',
    tab_drought: 'Засухоустойчивые',
    tab_leafy: 'Листовые Овощи',
    watering_logic: 'Логика Полива',
    growing_conditions: 'Условия Выращивания',
    plant_index: 'Каталог Растений — 12 Видов',
    trigger: 'Триггер',
    threshold: 'Порог',
    ideal_moisture_label: 'Идеальный диапазон влажности почвы',
    soil_mix_label: 'Почвенная Смесь',
    light_label: 'Свет',
    humidity_label: 'Влажность',
    substrate_label: 'Субстрат',
    water_quality_label: 'Качество Воды',
    footer: 'База Ухода за Растениями ioSoil — v1.0 — 5 категорий • 60 видов',
    drought_title: 'Выносливые и Водоэффективные Растения',
    tropical_title: 'Тропические Растения Высокой Влажности',
    leafy_title: 'Быстрорастущие Съедобные Культуры',
    aquatic_title: 'Погруженные и Прибрежные Водные Растения'
  },
  zh: {
    logo_sub: '植物养护数据库',
    language_label: '语言',
    option_en: '英语',
    option_tl: '他加禄语',
    option_es: '西班牙语',
    option_fr: '法语',
    option_de: '德语',
    option_zh: '中文',
    option_ja: '日语',
    option_ko: '韩语',
    option_pt: '葡萄牙语',
    option_ru: '俄语',
    tab_drought: '耐旱',
    tab_leafy: '叶菜类',
    watering_logic: '浇水逻辑',
    growing_conditions: '生长条件',
    plant_index: '植物索引 — 12个物种',
    trigger: '触发条件',
    threshold: '阈值',
    ideal_moisture_label: '理想土壤湿度范围',
    soil_mix_label: '土壤配比',
    light_label: '光照',
    humidity_label: '湿度',
    substrate_label: '基质',
    water_quality_label: '水质',
    footer: 'ioSoil 植物养护数据库 — v1.0 — 5个类别 • 60个物种',
    drought_title: '高韧性节水植物',
    tropical_title: '高湿热带植物',
    leafy_title: '速生可食叶菜',
    aquatic_title: '沉水与挺水水生植物'
  },
  ja: {
    logo_sub: '植物ケアデータベース',
    language_label: '言語',
    option_en: '英語',
    option_tl: 'タガログ語',
    option_es: 'スペイン語',
    option_fr: 'フランス語',
    option_de: 'ドイツ語',
    option_zh: '中国語',
    option_ja: '日本語',
    option_ko: '韓国語',
    option_pt: 'ポルトガル語',
    option_ru: 'ロシア語',
    tab_drought: '乾燥耐性',
    tab_leafy: '葉物野菜',
    watering_logic: '水やりロジック',
    growing_conditions: '栽培条件',
    plant_index: '植物インデックス — 12種',
    trigger: '開始条件',
    threshold: '上限値',
    ideal_moisture_label: '理想的な土壌水分範囲',
    soil_mix_label: '用土配合',
    light_label: '光',
    humidity_label: '湿度',
    substrate_label: '基質',
    water_quality_label: '水質',
    footer: 'ioSoil 植物ケアデータベース — v1.0 — 5カテゴリ • 60種',
    drought_title: '丈夫で節水性の高い植物',
    tropical_title: '高湿度の熱帯植物',
    leafy_title: '成長の早い食用作物',
    aquatic_title: '沈水性・抽水性の水生植物'
  },
  ko: {
    logo_sub: '식물 관리 데이터베이스',
    language_label: '언어',
    option_en: '영어',
    option_tl: '타갈로그어',
    option_es: '스페인어',
    option_fr: '프랑스어',
    option_de: '독일어',
    option_zh: '중국어',
    option_ja: '일본어',
    option_ko: '한국어',
    option_pt: '포르투갈어',
    option_ru: '러시아어',
    tab_drought: '가뭄 내성',
    tab_leafy: '잎채소',
    watering_logic: '물주기 로직',
    growing_conditions: '재배 조건',
    plant_index: '식물 목록 — 12종',
    trigger: '시작 조건',
    threshold: '임계값',
    ideal_moisture_label: '이상적인 토양 수분 범위',
    soil_mix_label: '토양 배합',
    light_label: '빛',
    humidity_label: '습도',
    substrate_label: '기질',
    water_quality_label: '수질',
    footer: 'ioSoil 식물 관리 데이터베이스 — v1.0 — 5개 카테고리 • 60종',
    drought_title: '강인하고 물 효율적인 식물',
    tropical_title: '고습도 열대 식물',
    leafy_title: '빠르게 자라는 식용 작물',
    aquatic_title: '침수·습지 수생 식물'
  }
};

const fullContentPacks = {
  es: {
    tab_arid: 'Arido',
    tab_tropical: 'Tropical',
    tab_aquatic: 'Acuatico',
    arid_badge: 'Seco',
    arid_title: 'Plantas Aridas',
    arid_summary: 'Plantas que prosperan en condiciones secas con baja humedad.',
    arid_moisture_pct: '10% - 20%',
    drought_badge: 'Sequia',
    drought_title: 'Tolerancia a la Sequia',
    drought_summary: 'Plantas adaptadas a periodos prolongados sin agua.',
    drought_moisture_pct: '20% - 40%',
    tropical_badge: 'Tropical',
    tropical_title: 'Plantas Tropicales',
    tropical_summary: 'Plantas que requieren calor, humedad y luz abundante.',
    tropical_moisture_pct: '50% - 70%',
    leafy_badge: 'Frondoso',
    leafy_title: 'Plantas Frondosas',
    leafy_summary: 'Plantas de follaje abundante que requieren humedad constante.',
    leafy_moisture_pct: '55% - 75%',
    aquatic_badge: 'Acuatico',
    aquatic_title: 'Plantas Acuaticas',
    aquatic_summary: 'Plantas que viven en o bajo el agua.',
    aquatic_moisture_pct: '85% - 100%+',
    arid_trigger: 'Riega cuando la humedad del suelo cae <strong>por debajo del 10%</strong>. Verifica con sonda de suelo.',
    arid_threshold: 'Deten el riego al llegar a <strong>20%</strong>. Evita encharcamientos.',
    drought_trigger: 'Riega cuando la capa superior (2-3 cm) esta seca y la humedad esta <strong>por debajo de 20%</strong>.',
    drought_threshold: 'Deten en <strong>40% de humedad</strong> y deja drenar completamente.',
    tropical_trigger: 'Riega cuando el sensor marque <strong>menos de 50%</strong> o la capa superior este seca.',
    tropical_threshold: 'Deten en <strong>70% de humedad</strong>. Asegura buen drenaje.',
    leafy_trigger: 'Riega cuando la humedad baje a <strong>55%</strong>. Revisa a diario en clima calido.',
    leafy_threshold: 'Mantener en o por debajo de <strong>75%</strong>.',
    aquatic_trigger: 'Mantener nivel de agua constante. Rellenar cuando baje de <strong>85%</strong>.',
    aquatic_threshold: 'No hay limite superior de humedad; monitorea pH, dKH y EC/TDS.',
    arid_soil_mix: '50% arena gruesa + 30% perlita + 20% sustrato. Debe drenar rapido.',
    arid_light: 'Luz solar directa 6-8+ horas.',
    arid_humidity: '10%-30% de HR.',
    drought_soil_mix: '40% sustrato + 30% perlita + 30% grava o piedra pomez.',
    drought_light: 'Luz brillante indirecta a sol directo, 4-8 horas.',
    drought_humidity: '30%-50% de HR.',
    tropical_soil_mix: '60% fibra de coco + 20% perlita + 20% corteza de orquidea.',
    tropical_light: 'Luz brillante indirecta, 4-6 horas.',
    tropical_humidity: '60%-80% de HR.',
    leafy_soil_mix: '50% compost + 30% tierra vegetal + 20% perlita.',
    leafy_light: 'Sol pleno a semisombra, 4-8 horas.',
    leafy_humidity: '50%-70% de HR.',
    aquatic_substrate: 'Arcilla o marga acuatica con grava gruesa.',
    aquatic_light: 'Sol pleno a luz indirecta brillante, 4-8 horas.',
    aquatic_water_quality: 'Temp 15-28C. Oxigenar y medir pH semanalmente.',
    danger_summary_title: 'Detalles de peligro',
    arid_danger_low: 'Peligro — humedad del suelo bajo 5%: plantas pueden secarse y morir.',
    arid_danger_high: 'Peligro — humedad del suelo sobre 30%: raíces pueden pudrirse.',
    drought_danger_low: 'Peligro — humedad bajo 12%: plantas pueden marchitarse.',
    drought_danger_high: 'Peligro — humedad sobre 50%: raíces pueden sufrir y pudrirse.',
    tropical_danger_low: 'Peligro — humedad bajo 30%: plantas tropicales pueden sufrir sequía.',
    tropical_danger_high: 'Peligro — humedad sobre 80%: rápido riesgo de pudrición de raíces.',
    leafy_danger_low: 'Peligro — humedad bajo 40%: hojas pueden florecer o rendimiento puede bajar.',
    leafy_danger_high: 'Peligro — humedad sobre 85%: raíces pueden carecer de oxígeno y fallar.',
    aquatic_danger_low: 'Peligro — agua bajo 75%: plantas acuáticas marginales pueden sufrir.',
    aquatic_danger_high: 'Nota — sin peligro de humedad superior; vigila la calidad del agua y oxígeno.'
  },
  fr: {
    tab_arid: 'Aride',
    tab_tropical: 'Tropical',
    tab_aquatic: 'Aquatique',
    arid_badge: 'Sec',
    arid_title: 'Plantes Arides',
    arid_summary: 'Plantes qui prosperent en conditions seches avec faible humidite.',
    arid_moisture_pct: '10% - 20%',
    drought_badge: 'Secheresse',
    drought_title: 'Tolerance a la Secheresse',
    drought_summary: 'Plantes adaptees aux longues periodes sans eau.',
    drought_moisture_pct: '20% - 40%',
    tropical_badge: 'Tropical',
    tropical_title: 'Plantes Tropicales',
    tropical_summary: 'Plantes exigeant chaleur, humidite et lumiere abondante.',
    tropical_moisture_pct: '50% - 70%',
    leafy_badge: 'Feuillage',
    leafy_title: 'Plantes Feuillues',
    leafy_summary: 'Plantes au feuillage dense demandant une humidite stable.',
    leafy_moisture_pct: '55% - 75%',
    aquatic_badge: 'Aquatique',
    aquatic_title: 'Plantes Aquatiques',
    aquatic_summary: 'Plantes vivant dans ou sous l\'eau.',
    aquatic_moisture_pct: '85% - 100%+',
    arid_trigger: 'Arroser quand l\'humidite descend <strong>sous 10%</strong>. Verifier avec une sonde.',
    arid_threshold: 'Arreter a <strong>20%</strong>. Eviter toute stagnation d\'eau.',
    drought_trigger: 'Arroser quand les 2-3 cm superieurs sont secs et <strong>sous 20%</strong>.',
    drought_threshold: 'Arreter a <strong>40% d\'humidite</strong>, puis laisser drainer.',
    tropical_trigger: 'Arroser <strong>sous 50%</strong> ou quand la surface est seche.',
    tropical_threshold: 'Arreter a <strong>70%</strong>. Assurer un bon drainage.',
    leafy_trigger: 'Arroser quand l\'humidite atteint <strong>55%</strong>. Controle quotidien par forte chaleur.',
    leafy_threshold: 'Maintenir a ou sous <strong>75%</strong>.',
    aquatic_trigger: 'Maintenir un niveau d\'eau constant; recharger sous <strong>85%</strong>.',
    aquatic_threshold: 'Pas de limite superieure; surveiller pH, dKH et EC/TDS.',
    arid_soil_mix: '50% sable grossier + 30% perlite + 20% terreau, drainage rapide.',
    arid_light: 'Lumiere directe 6-8+ heures.',
    arid_humidity: '10%-30% HR.',
    drought_soil_mix: '40% terreau + 30% perlite + 30% gravier ou pierre ponce.',
    drought_light: 'Lumiere vive indirecte a soleil direct, 4-8 heures.',
    drought_humidity: '30%-50% HR.',
    tropical_soil_mix: '60% fibre coco + 20% perlite + 20% ecorce d\'orchidee.',
    tropical_light: 'Lumiere vive indirecte, 4-6 heures.',
    tropical_humidity: '60%-80% HR.',
    leafy_soil_mix: '50% compost + 30% terre vegetale + 20% perlite.',
    leafy_light: 'Plein soleil a mi-ombre, 4-8 heures.',
    leafy_humidity: '50%-70% HR.',
    aquatic_substrate: 'Argile ou limon aquatique avec gravier grossier.',
    aquatic_light: 'Plein soleil a lumiere vive indirecte, 4-8 heures.',
    aquatic_water_quality: 'Temp 15-28C. Oxygener et tester le pH chaque semaine.',
    danger_summary_title: 'Détails du danger',
    arid_danger_low: 'Danger — humidité du sol inférieure à 5 % : les plantes peuvent se dessécher et mourir.',
    arid_danger_high: 'Danger — humidité du sol supérieure à 30 % : les racines peuvent pourrir.',
    drought_danger_low: 'Danger — humidité inférieure à 12 % : les plantes peuvent se flétrir.',
    drought_danger_high: 'Danger — humidité supérieure à 50 % : les racines peuvent souffrir et pourrir.',
    tropical_danger_low: 'Danger — humidité inférieure à 30 % : les plantes tropicales peuvent souffrir de la sécheresse.',
    tropical_danger_high: 'Danger — humidité supérieure à 80 % : risque rapide de pourriture des racines.',
    leafy_danger_low: 'Danger — humidité inférieure à 40 % : les feuilles peuvent monter à graine ou le rendement peut baisser.',
    leafy_danger_high: 'Danger — humidité supérieure à 85 % : les racines peuvent manquer d\'oxygène et échouer.',
    aquatic_danger_low: 'Danger — eau inférieure à 75 % : les plantes aquatiques marginales peuvent souffrir.',
    aquatic_danger_high: 'Note — pas de danger d\'humidité supérieure ; surveille la qualité de l\'eau et l\'oxygénation.'
  },
  de: {
    tab_arid: 'Arid',
    tab_tropical: 'Tropisch',
    tab_aquatic: 'Aquatisch',
    arid_badge: 'Trocken',
    arid_title: 'Aride Pflanzen',
    arid_summary: 'Pflanzen, die unter trockenen Bedingungen mit niedriger Feuchte gedeihen.',
    arid_moisture_pct: '10% - 20%',
    drought_badge: 'Duerre',
    drought_title: 'Duerretoleranz',
    drought_summary: 'Pflanzen, die an lange Trockenphasen angepasst sind.',
    drought_moisture_pct: '20% - 40%',
    tropical_badge: 'Tropisch',
    tropical_title: 'Tropische Pflanzen',
    tropical_summary: 'Pflanzen, die Waerme, Feuchte und viel Licht brauchen.',
    tropical_moisture_pct: '50% - 70%',
    leafy_badge: 'Blattig',
    leafy_title: 'Blattpflanzen',
    leafy_summary: 'Ueppige Blattpflanzen mit Bedarf an gleichmaessiger Feuchte.',
    leafy_moisture_pct: '55% - 75%',
    aquatic_badge: 'Wasser',
    aquatic_title: 'Wasserpflanzen',
    aquatic_summary: 'Pflanzen, die in oder unter Wasser leben.',
    aquatic_moisture_pct: '85% - 100%+',
    arid_trigger: 'Giessen bei <strong>unter 10%</strong> Bodenfeuchte. Mit Sonde pruefen.',
    arid_threshold: 'Bei <strong>20%</strong> stoppen. Staunaesse vermeiden.',
    drought_trigger: 'Giessen, wenn obere 2-3 cm trocken und <strong>unter 20%</strong> sind.',
    drought_threshold: 'Bei <strong>40% Feuchte</strong> stoppen und vollstaendig abtropfen lassen.',
    tropical_trigger: 'Giessen bei <strong>unter 50%</strong> oder trockener Oberflaeche.',
    tropical_threshold: 'Bei <strong>70%</strong> stoppen. Gute Drainage sicherstellen.',
    leafy_trigger: 'Giessen, wenn Feuchte auf <strong>55%</strong> faellt.',
    leafy_threshold: 'Bei oder unter <strong>75%</strong> halten.',
    aquatic_trigger: 'Wasserstand konstant halten; unter <strong>85%</strong> nachfuellen.',
    aquatic_threshold: 'Keine obere Grenze; pH, dKH und EC/TDS ueberwachen.',
    arid_soil_mix: '50% grober Sand + 30% Perlit + 20% Substrat, sehr durchlaessig.',
    arid_light: 'Direkte Sonne 6-8+ Stunden.',
    arid_humidity: '10%-30% RH.',
    drought_soil_mix: '40% Erde + 30% Perlit + 30% Kies oder Bims.',
    drought_light: 'Helles indirektes bis direktes Licht, 4-8 Stunden.',
    drought_humidity: '30%-50% RH.',
    tropical_soil_mix: '60% Kokosfaser + 20% Perlit + 20% Orchideenrinde.',
    tropical_light: 'Helles indirektes Licht, 4-6 Stunden.',
    tropical_humidity: '60%-80% RH.',
    leafy_soil_mix: '50% Kompost + 30% Oberboden + 20% Perlit.',
    leafy_light: 'Volle Sonne bis Halbschatten, 4-8 Stunden.',
    leafy_humidity: '50%-70% RH.',
    aquatic_substrate: 'Wasserton oder Lehm mit grobem Kies.',
    aquatic_light: 'Volle Sonne bis helles indirektes Licht, 4-8 Stunden.',
    aquatic_water_quality: 'Temp 15-28C. Belueften und pH woechentlich pruefen.',
    danger_summary_title: 'Gefahrendetails',
    arid_danger_low: 'Gefahr — Bodenfeuchte unter 5 %: Pflanzen können austrocknen und absterben.',
    arid_danger_high: 'Gefahr — Bodenfeuchte über 30 %: Wurzeln können faulen.',
    drought_danger_low: 'Gefahr — Feuchte unter 12 %: Pflanzen können welken.',
    drought_danger_high: 'Gefahr — Feuchte über 50 %: Wurzeln können leiden und faulen.',
    tropical_danger_low: 'Gefahr — Feuchte unter 30 %: Tropenpflanzen können unter Trockenheit leiden.',
    tropical_danger_high: 'Gefahr — Feuchte über 80 %: schnelle Wurzelfäule-Gefahr.',
    leafy_danger_low: 'Gefahr — Feuchte unter 40 %: Blätter können schießen oder Ertrag kann sinken.',
    leafy_danger_high: 'Gefahr — Feuchte über 85 %: Wurzeln können Sauerstoff mangeln und ausfallen.',
    aquatic_danger_low: 'Gefahr — Wasser unter 75 %: Randzone-Wasserpflanzen können leiden.',
    aquatic_danger_high: 'Hinweis — keine obere Feuchte-Gefahr; beobachte Wasserqualität und Belüftung.'
  },
  pt: {
    tab_arid: 'Arido',
    tab_tropical: 'Tropical',
    tab_aquatic: 'Aquatico',
    arid_badge: 'Seco',
    arid_title: 'Plantas Aridas',
    arid_summary: 'Plantas que prosperam em condicoes secas com baixa umidade.',
    arid_moisture_pct: '10% - 20%',
    drought_badge: 'Seca',
    drought_title: 'Tolerancia a Seca',
    drought_summary: 'Plantas adaptadas a periodos longos sem agua.',
    drought_moisture_pct: '20% - 40%',
    tropical_badge: 'Tropical',
    tropical_title: 'Plantas Tropicais',
    tropical_summary: 'Plantas que exigem calor, umidade e luz abundante.',
    tropical_moisture_pct: '50% - 70%',
    leafy_badge: 'Folhoso',
    leafy_title: 'Plantas Folhosas',
    leafy_summary: 'Plantas com folhagem densa que requerem umidade constante.',
    leafy_moisture_pct: '55% - 75%',
    aquatic_badge: 'Aquatico',
    aquatic_title: 'Plantas Aquaticas',
    aquatic_summary: 'Plantas que vivem na agua ou submersas.',
    aquatic_moisture_pct: '85% - 100%+',
    arid_trigger: 'Regar quando a umidade cair <strong>abaixo de 10%</strong>. Confirmar com sonda.',
    arid_threshold: 'Parar em <strong>20%</strong>. Evitar encharcamento.',
    drought_trigger: 'Regar quando os 2-3 cm superiores estiverem secos e <strong>abaixo de 20%</strong>.',
    drought_threshold: 'Parar em <strong>40% de umidade</strong> e deixar drenar.',
    tropical_trigger: 'Regar quando estiver <strong>abaixo de 50%</strong> ou topo seco.',
    tropical_threshold: 'Parar em <strong>70%</strong>. Garantir drenagem.',
    leafy_trigger: 'Regar ao cair para <strong>55%</strong>.',
    leafy_threshold: 'Manter em ou abaixo de <strong>75%</strong>.',
    aquatic_trigger: 'Manter nivel de agua constante; repor abaixo de <strong>85%</strong>.',
    aquatic_threshold: 'Sem limite superior; monitorar pH, dKH e EC/TDS.',
    arid_soil_mix: '50% areia grossa + 30% perlita + 20% substrato.',
    arid_light: 'Luz solar direta 6-8+ horas.',
    arid_humidity: '10%-30% UR.',
    drought_soil_mix: '40% solo + 30% perlita + 30% brita ou pomice.',
    drought_light: 'Luz indireta forte a sol direto, 4-8 horas.',
    drought_humidity: '30%-50% UR.',
    tropical_soil_mix: '60% fibra de coco + 20% perlita + 20% casca de orquidea.',
    tropical_light: 'Luz indireta forte, 4-6 horas.',
    tropical_humidity: '60%-80% UR.',
    leafy_soil_mix: '50% composto + 30% terra vegetal + 20% perlita.',
    leafy_light: 'Sol pleno a meia-sombra, 4-8 horas.',
    leafy_humidity: '50%-70% UR.',
    aquatic_substrate: 'Argila ou lodo aquatico com cascalho grosso.',
    aquatic_light: 'Sol pleno a luz indireta forte, 4-8 horas.',
    aquatic_water_quality: 'Temp 15-28C. Oxigenar e medir pH semanalmente.',
    danger_summary_title: 'Detalhes do perigo',
    arid_danger_low: 'Perigo — umidade do solo abaixo de 5%: plantas podem secar e morrer.',
    arid_danger_high: 'Perigo — umidade do solo acima de 30%: raízes podem apodrecer.',
    drought_danger_low: 'Perigo — umidade abaixo de 12%: plantas podem murchar.',
    drought_danger_high: 'Perigo — umidade acima de 50%: raízes podem sofrer e apodrecer.',
    tropical_danger_low: 'Perigo — umidade abaixo de 30%: plantas tropicais podem sofrer seca.',
    tropical_danger_high: 'Perigo — umidade acima de 80%: rápido risco de podridão de raízes.',
    leafy_danger_low: 'Perigo — umidade abaixo de 40%: folhas podem florescer ou rendimento pode cair.',
    leafy_danger_high: 'Perigo — umidade acima de 85%: raízes podem faltar oxigênio e falhar.',
    aquatic_danger_low: 'Perigo — água abaixo de 75%: plantas aquáticas marginais podem sofrer.',
    aquatic_danger_high: 'Nota — sem perigo de umidade superior; monitore qualidade de água e oxigenação.'
  },
  ru: {
    tab_arid: 'Arid',
    tab_tropical: 'Тропический',
    tab_aquatic: 'Водный',
    arid_badge: 'Сухой',
    arid_title: 'Засушливые растения',
    arid_summary: 'Растения для сухих условий с низкой влажностью.',
    arid_moisture_pct: '10% - 20%',
    drought_badge: 'Засуха',
    drought_title: 'Устойчивость к засухе',
    drought_summary: 'Растения, приспособленные к длительным периодам без воды.',
    drought_moisture_pct: '20% - 40%',
    tropical_badge: 'Тропический',
    tropical_title: 'Тропические растения',
    tropical_summary: 'Растения, которым нужны тепло, влажность и много света.',
    tropical_moisture_pct: '50% - 70%',
    leafy_badge: 'Листовой',
    leafy_title: 'Листовые растения',
    leafy_summary: 'Пышные листовые растения, которым нужна стабильная влажность.',
    leafy_moisture_pct: '55% - 75%',
    aquatic_badge: 'Водный',
    aquatic_title: 'Водные растения',
    aquatic_summary: 'Растения, живущие в воде или под водой.',
    aquatic_moisture_pct: '85% - 100%+',
    arid_trigger: 'Поливать при <strong>ниже 10%</strong> влажности почвы.',
    arid_threshold: 'Остановить на <strong>20%</strong>. Избегать застоя воды.',
    drought_trigger: 'Поливать, когда верхние 2-3 см сухие и <strong>ниже 20%</strong>.',
    drought_threshold: 'Остановить на <strong>40% влажности</strong> и дать полностью стечь.',
    tropical_trigger: 'Поливать при <strong>ниже 50%</strong> или сухом верхнем слое.',
    tropical_threshold: 'Остановить на <strong>70%</strong>. Обеспечить дренаж.',
    leafy_trigger: 'Поливать при падении до <strong>55%</strong>.',
    leafy_threshold: 'Держать на уровне или ниже <strong>75%</strong>.',
    aquatic_trigger: 'Держать уровень воды постоянным; пополнять ниже <strong>85%</strong>.',
    aquatic_threshold: 'Верхнего лимита нет; контролировать pH, dKH и EC/TDS.',
    arid_soil_mix: '50% крупного песка + 30% перлита + 20% субстрата.',
    arid_light: 'Прямой свет 6-8+ часов.',
    arid_humidity: '10%-30% RH.',
    drought_soil_mix: '40% почвы + 30% перлита + 30% гравия или пемзы.',
    drought_light: 'Яркий рассеянный до прямого свет, 4-8 часов.',
    drought_humidity: '30%-50% RH.',
    tropical_soil_mix: '60% кокосового волокна + 20% перлита + 20% коры орхидей.',
    tropical_light: 'Яркий рассеянный свет, 4-6 часов.',
    tropical_humidity: '60%-80% RH.',
    leafy_soil_mix: '50% компоста + 30% верхнего слоя + 20% перлита.',
    leafy_light: 'Полное солнце до полутени, 4-8 часов.',
    leafy_humidity: '50%-70% RH.',
    aquatic_substrate: 'Водная глина или суглинок с крупным гравием.',
    aquatic_light: 'Полное солнце до яркого рассеянного, 4-8 часов.',
    aquatic_water_quality: 'Темп 15-28C. Аэрация и еженедельный контроль pH.',
    danger_summary_title: 'Детали опасности',
    arid_danger_low: 'Опасность — влажность почвы ниже 5 %: растения могут высохнуть и погибнуть.',
    arid_danger_high: 'Опасность — влажность почвы выше 30 %: корни могут загнить.',
    drought_danger_low: 'Опасность — влажность ниже 12 %: растения могут завянуть.',
    drought_danger_high: 'Опасность — влажность выше 50 %: корни могут страдать и загнивать.',
    tropical_danger_low: 'Опасность — влажность ниже 30 %: тропические растения могут страдать от засухи.',
    tropical_danger_high: 'Опасность — влажность выше 80 %: быстрый риск гниения корней.',
    leafy_danger_low: 'Опасность — влажность ниже 40 %: листья могут выбить или урожай может упасть.',
    leafy_danger_high: 'Опасность — влажность выше 85 %: корни могут испытывать недостаток кислорода.',
    aquatic_danger_low: 'Опасность — вода ниже 75 %: маргинальные виды водных растений могут страдать.',
    aquatic_danger_high: 'Примечание — нет верхней опасности влажности; следите за качеством воды и аэрацией.'
  },
  zh: {
    tab_arid: '干旱',
    tab_tropical: '热带',
    tab_aquatic: '水生',
    arid_badge: '干燥',
    arid_title: '干旱植物',
    arid_summary: '适合低湿度干燥环境的植物。',
    arid_moisture_pct: '10% - 20%',
    drought_badge: '耐旱',
    drought_title: '耐旱植物',
    drought_summary: '可在较少浇水条件下生长的植物。',
    drought_moisture_pct: '20% - 40%',
    tropical_badge: '热带',
    tropical_title: '热带植物',
    tropical_summary: '需要温暖、湿润和充足光照的植物。',
    tropical_moisture_pct: '50% - 70%',
    leafy_badge: '叶菜',
    leafy_title: '叶菜植物',
    leafy_summary: '叶片茂密、需要稳定湿度的植物。',
    leafy_moisture_pct: '55% - 75%',
    aquatic_badge: '水生',
    aquatic_title: '水生植物',
    aquatic_summary: '生活在水中或水下的植物。',
    aquatic_moisture_pct: '85% - 100%+',
    arid_trigger: '当土壤湿度<strong>低于10%</strong>时浇水。',
    arid_threshold: '达到<strong>20%</strong>时停止浇水，避免积水。',
    drought_trigger: '当表层2-3厘米变干且<strong>低于20%</strong>时浇水。',
    drought_threshold: '在<strong>40%湿度</strong>停止并充分排水。',
    tropical_trigger: '当读数<strong>低于50%</strong>或表层变干时浇水。',
    tropical_threshold: '在<strong>70%</strong>停止，保证排水。',
    leafy_trigger: '湿度降到<strong>55%</strong>时浇水。',
    leafy_threshold: '保持在<strong>75%</strong>或以下。',
    aquatic_trigger: '保持水位稳定；低于<strong>85%</strong>时补水。',
    aquatic_threshold: '无上限；重点监测pH、dKH和EC/TDS。',
    arid_soil_mix: '50%粗砂 + 30%珍珠岩 + 20%基质。',
    arid_light: '直射光6-8+小时。',
    arid_humidity: '10%-30% RH。',
    drought_soil_mix: '40%营养土 + 30%珍珠岩 + 30%砾石/浮石。',
    drought_light: '明亮散射到直射光，4-8小时。',
    drought_humidity: '30%-50% RH。',
    tropical_soil_mix: '60%椰糠 + 20%珍珠岩 + 20%兰花树皮。',
    tropical_light: '明亮散射光，4-6小时。',
    tropical_humidity: '60%-80% RH。',
    leafy_soil_mix: '50%堆肥 + 30%表土 + 20%珍珠岩。',
    leafy_light: '全日照到半阴，4-8小时。',
    leafy_humidity: '50%-70% RH。',
    aquatic_substrate: '水生黏土或壤土，上覆粗砾石。',
    aquatic_light: '全日照到明亮散射光，4-8小时。',
    aquatic_water_quality: '温度15-28C。增氧并每周检测pH。',
    danger_summary_title: '危险详情',
    arid_danger_low: '危险 — 土壤湿度低于5%：植物可能干枯死亡。',
    arid_danger_high: '危险 — 土壤湿度高于30%：根部可能腐烂。',
    drought_danger_low: '危险 — 湿度低于12%：植物可能枯萎。',
    drought_danger_high: '危险 — 湿度高于50%：根部可能受损和腐烂。',
    tropical_danger_low: '危险 — 湿度低于30%：热带植物可能干旱受害。',
    tropical_danger_high: '危险 — 湿度高于80%：快速烂根风险。',
    leafy_danger_low: '危险 — 湿度低于40%：叶子可能冒条或产量可能下降。',
    leafy_danger_high: '危险 — 湿度高于85%：根部可能缺氧。',
    aquatic_danger_low: '危险 — 水位低于75%：边缘水生植物可能受害。',
    aquatic_danger_high: '注意 — 无上限湿度危险；注意水质和充氧。'
  },
  ja: {
    tab_arid: '乾燥',
    tab_tropical: '熱帯',
    tab_aquatic: '水生',
    arid_badge: '乾燥',
    arid_title: '乾燥地植物',
    arid_summary: '低湿度で乾いた環境に適した植物です。',
    arid_moisture_pct: '10% - 20%',
    drought_badge: '耐乾燥',
    drought_title: '乾燥耐性植物',
    drought_summary: '少ない潅水でも育つ植物です。',
    drought_moisture_pct: '20% - 40%',
    tropical_badge: '熱帯',
    tropical_title: '熱帯植物',
    tropical_summary: '高温多湿と十分な光を必要とする植物です。',
    tropical_moisture_pct: '50% - 70%',
    leafy_badge: '葉物',
    leafy_title: '葉物植物',
    leafy_summary: '葉がよく茂り、安定した水分を好みます。',
    leafy_moisture_pct: '55% - 75%',
    aquatic_badge: '水生',
    aquatic_title: '水生植物',
    aquatic_summary: '水中または水辺で育つ植物です。',
    aquatic_moisture_pct: '85% - 100%+',
    arid_trigger: '土壌水分が<strong>10%未満</strong>で潅水します。',
    arid_threshold: '<strong>20%</strong>で停止し、過湿を避けます。',
    drought_trigger: '表土2-3cmが乾き、<strong>20%未満</strong>で潅水します。',
    drought_threshold: '<strong>40%</strong>で停止し、十分に排水します。',
    tropical_trigger: '<strong>50%未満</strong>または表土が乾いたら潅水します。',
    tropical_threshold: '<strong>70%</strong>で停止し、排水を確保します。',
    leafy_trigger: '<strong>55%</strong>まで下がったら潅水します。',
    leafy_threshold: '<strong>75%</strong>以下を維持します。',
    aquatic_trigger: '水位を一定に保ち、<strong>85%未満</strong>で補水します。',
    aquatic_threshold: '上限はなく、pH・dKH・EC/TDSを監視します。',
    arid_soil_mix: '粗砂50% + パーライト30% + 用土20%。',
    arid_light: '直射日光6-8時間以上。',
    arid_humidity: '10%-30% RH。',
    drought_soil_mix: '培養土40% + パーライト30% + 砂利/軽石30%。',
    drought_light: '明るい間接光から直射、4-8時間。',
    drought_humidity: '30%-50% RH。',
    tropical_soil_mix: 'ココピート60% + パーライト20% + バーク20%。',
    tropical_light: '明るい間接光、4-6時間。',
    tropical_humidity: '60%-80% RH。',
    leafy_soil_mix: '堆肥50% + 表土30% + パーライト20%。',
    leafy_light: '日向から半日陰、4-8時間。',
    leafy_humidity: '50%-70% RH。',
    aquatic_substrate: '水生粘土または壌土に粗い砂利。',
    aquatic_light: '日向から明るい間接光、4-8時間。',
    aquatic_water_quality: '水温15-28C。曝気し、pHを週1回測定。',
    danger_summary_title: '危険詳細',
    arid_danger_low: '危険 — 土壌水分5%未満: 植物が枯れて死ぬ可能性があります。',
    arid_danger_high: '危険 — 土壌水分30%超過: 根が腐る可能性があります。',
    drought_danger_low: '危険 — 水分12%未満: 植物がしおれる可能性があります。',
    drought_danger_high: '危険 — 水分50%超過: 根が苦しむと腐る可能性があります。',
    tropical_danger_low: '危険 — 水分30%未満: 熱帯植物が干ばつストレスを受ける可能性があります。',
    tropical_danger_high: '危険 — 水分80%超過: 根腐れ急速リスク。',
    leafy_danger_low: '危険 — 水分40%未満: 葉が抽台するか収量が減る可能性があります。',
    leafy_danger_high: '危険 — 水分85%超過: 根が酸素不足になる可能性があります。',
    aquatic_danger_low: '危険 — 水位75%未満: 周辺水生植物が苦しむ可能性があります。',
    aquatic_danger_high: '注意 — 上限湿度危険なし; 水質と酸素化を監視してください。'
  },
  ko: {
    tab_arid: '건조',
    tab_tropical: '열대',
    tab_aquatic: '수생',
    arid_badge: '건조',
    arid_title: '건조지 식물',
    arid_summary: '낮은 습도의 건조 환경에 적합한 식물입니다.',
    arid_moisture_pct: '10% - 20%',
    drought_badge: '가뭄',
    drought_title: '가뭄 내성 식물',
    drought_summary: '적은 물 공급에서도 잘 자라는 식물입니다.',
    drought_moisture_pct: '20% - 40%',
    tropical_badge: '열대',
    tropical_title: '열대 식물',
    tropical_summary: '따뜻함, 높은 습도, 충분한 빛이 필요한 식물입니다.',
    tropical_moisture_pct: '50% - 70%',
    leafy_badge: '엽채',
    leafy_title: '잎채소 식물',
    leafy_summary: '잎이 풍성하고 일정한 수분을 선호합니다.',
    leafy_moisture_pct: '55% - 75%',
    aquatic_badge: '수생',
    aquatic_title: '수생 식물',
    aquatic_summary: '물속 또는 물가에서 자라는 식물입니다.',
    aquatic_moisture_pct: '85% - 100%+',
    arid_trigger: '토양 수분이 <strong>10% 미만</strong>일 때 물을 줍니다.',
    arid_threshold: '<strong>20%</strong>에서 중단하고 과습을 피합니다.',
    drought_trigger: '상층 2-3cm가 마르고 <strong>20% 미만</strong>일 때 물을 줍니다.',
    drought_threshold: '<strong>40%</strong>에서 중단하고 완전히 배수합니다.',
    tropical_trigger: '<strong>50% 미만</strong> 또는 겉흙이 마르면 물을 줍니다.',
    tropical_threshold: '<strong>70%</strong>에서 중단하고 배수를 확보합니다.',
    leafy_trigger: '<strong>55%</strong>로 떨어지면 물을 줍니다.',
    leafy_threshold: '<strong>75%</strong> 이하로 유지합니다.',
    aquatic_trigger: '수위를 일정하게 유지하고 <strong>85% 미만</strong>이면 보충합니다.',
    aquatic_threshold: '상한은 없으며 pH, dKH, EC/TDS를 모니터링합니다.',
    arid_soil_mix: '굵은 모래 50% + 펄라이트 30% + 배양토 20%.',
    arid_light: '직사광 6-8시간 이상.',
    arid_humidity: '10%-30% RH.',
    drought_soil_mix: '배양토 40% + 펄라이트 30% + 자갈/부석 30%.',
    drought_light: '밝은 간접광~직사광, 4-8시간.',
    drought_humidity: '30%-50% RH.',
    tropical_soil_mix: '코코피트 60% + 펄라이트 20% + 난석 20%.',
    tropical_light: '밝은 간접광, 4-6시간.',
    tropical_humidity: '60%-80% RH.',
    leafy_soil_mix: '퇴비 50% + 표토 30% + 펄라이트 20%.',
    leafy_light: '양지~반그늘, 4-8시간.',
    leafy_humidity: '50%-70% RH.',
    aquatic_substrate: '수생 점토 또는 양토 위에 굵은 자갈.',
    aquatic_light: '양지~밝은 간접광, 4-8시간.',
    aquatic_water_quality: '수온 15-28C. 산소 공급 및 주 1회 pH 측정.'
  }
};

Object.entries(staticLanguagePacks).forEach(([lang, pack]) => {
  translations[lang] = { ...translations[lang], ...pack };
});

Object.entries(fullContentPacks).forEach(([lang, pack]) => {
  translations[lang] = { ...translations[lang], ...pack };
});

function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;
  const languageSelect = document.getElementById('lang-select');
  if (languageSelect) {
    languageSelect.setAttribute('aria-label', dict.language_label || translations.en.language_label);
  }
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && dict[key]) {
      // keep innerHTML when HTML tags (like <strong>) are present in translations
      if (/<\/?strong|<br|&nbsp;/.test(dict[key])) el.innerHTML = dict[key];
      else el.textContent = dict[key];
    }
  });

  // populate tooltip data-note attributes for elements that request it
  document.querySelectorAll('[data-i18n-note]').forEach(el => {
    const key = el.getAttribute('data-i18n-note');
    if (key && dict[key]) {
      // strip HTML for tooltip attribute
      const tmp = document.createElement('div');
      tmp.innerHTML = dict[key];
      const text = tmp.textContent || tmp.innerText || '';
      el.setAttribute('data-note', text);
    }
  });

  // translate pill labels
  document.querySelectorAll('.pill-trigger').forEach(el => el.textContent = dict.trigger || translations.en.trigger);
  document.querySelectorAll('.pill-threshold').forEach(el => el.textContent = dict.threshold || translations.en.threshold);

  // update tab labels explicitly (buttons already use data-i18n)
  document.querySelectorAll('.tab[data-i18n]').forEach(btn => {
    const k = btn.getAttribute('data-i18n');
    if (k && dict[k]) btn.textContent = dict[k];
  });
}

function initLanguage() {
  const sel = document.getElementById('lang-select');
  if (!sel) return;
  const saved = localStorage.getItem('site-lang');
  const preferred = saved || (navigator.language || 'en').slice(0,2);
  const start = Array.from(sel.options).some(option => option.value === preferred) ? preferred : 'en';
  sel.value = start;
  applyTranslations(start);

  sel.addEventListener('change', function () {
    localStorage.setItem('site-lang', this.value);
    applyTranslations(this.value);
  });
}

/* -----------------------------
   Theme handling (dark / light)
   ----------------------------- */
function setTheme(theme) {
  const root = document.documentElement;
  const nextTheme = theme === 'dark' ? 'dark' : 'light';
  root.setAttribute('data-theme', nextTheme);
  document.body.setAttribute('data-theme', nextTheme);

  try { localStorage.setItem('site-theme', nextTheme); } catch (e) {}

  const btn = document.getElementById('theme-toggle');
  if (btn) {
    const isDark = nextTheme === 'dark';
    btn.setAttribute('aria-pressed', String(isDark));
    btn.textContent = isDark ? '🌙 Dark' : '☀️ Light';
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    btn.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    btn.setAttribute('data-mode', nextTheme);
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  setTheme(current === 'dark' ? 'light' : 'dark');
}

function initTheme() {
  const saved = localStorage.getItem('site-theme');
  const start = saved === 'dark' ? 'dark' : 'light';
  setTheme(start);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.addEventListener('click', toggleTheme);
}

function initApp() {
  initLanguage();
  initTheme();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
