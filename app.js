const cardNames = window.CARD_NAMES || {};
const IMAGE_ROOT = "models/fieldspells";
const PLACEHOLDER_IMAGE = `${IMAGE_ROOT}/0.avif`;
const SCROLL_KEY = "tagforce-fieldspell-scroll-y";

const series = [
  {
    id: "tf1",
    label: "Tag Force 1",
    shortLabel: "TF1",
    assetRoot: "models/fieldspells/tf1",
    previewIds: [
      "1", "4336", "4337", "4338", "4339", "4340", "4341", "4899",
      "4932", "4933", "4934", "4935", "4936", "4937", "5182", "5187",
      "5276", "5329", "5387", "5533", "5788", "5791", "5982", "6207",
      "6271", "6399", "6642", "6668", "6758", "6759", "6775", "6823",
    ],
  },
  {
    id: "tf2",
    label: "Tag Force 2",
    shortLabel: "TF2",
    assetRoot: "models/fieldspells/tf2",
    previewIds: [
      "2", "3720", "3723", "3733", "4336", "4337", "4338", "4339",
      "4340", "4341", "4899", "4932", "4933", "4934", "4935", "4936",
      "4937", "5182", "5187", "5276", "5329", "5387", "5533", "5788",
      "5791", "5982", "6207", "6271", "6399", "6642", "6668", "6758",
      "6759", "6775", "6823", "7004", "7079", "7129", "7164",
    ],
  },
  {
    id: "tf3",
    label: "Tag Force 3",
    shortLabel: "TF3",
    assetRoot: "models/fieldspells/tf3",
    previewIds: [
      "2", "3720", "3723", "3733", "3757", "3767", "3768", "3779",
      "3788", "4336", "4337", "4338", "4339", "4340", "4341", "4899",
      "4932", "4933", "4934", "4935", "4936", "4937", "5182", "5187",
      "5276", "5329", "5387", "5533", "5788", "5791", "5982", "6207",
      "6271", "6399", "6642", "6668", "6758", "6759", "6775", "6823",
      "7004", "7079", "7129", "7164", "7307", "7457", "7624", "7626",
      "7627", "7683", "7857", "7904", "7916",
    ],
  },
  {
    id: "tf4",
    label: "Tag Force 4",
    shortLabel: "TF4",
    assetRoot: "models/fieldspells/tf4",
    previewIds: [
      "4", "3720", "3723", "3733", "3757", "3767", "3768", "3788",
      "4336", "4337", "4338", "4339", "4340", "4341", "4899", "4932",
      "4933", "4934", "4935", "4936", "4937", "5182", "5187", "5276",
      "5329", "5387", "5533", "5788", "5791", "5982", "6207", "6271",
      "6399", "6642", "6668", "6758", "6759", "6775", "6823", "7004",
      "7079", "7129", "7164", "7307", "7457", "7624", "7626", "7627",
      "7683", "7904", "7916", "8045", "8135", "8266", "8338", "8341",
      "8347", "8480", "8482", "8539", "8585",
    ],
  },
  {
    id: "tf5",
    label: "Tag Force 5",
    shortLabel: "TF5",
    assetRoot: "models/fieldspells/tf5",
    previewIds: [
      "5", "3720", "3723", "3733", "3757", "3767", "3768", "3788",
      "4336", "4337", "4338", "4339", "4340", "4341", "4899", "4932",
      "4933", "4934", "4935", "4936", "4937", "5182", "5187", "5276",
      "5329", "5387", "5533", "5788", "5791", "5982", "6207", "6271",
      "6399", "6642", "6668", "6758", "6759", "6775", "6823", "7004",
      "7079", "7129", "7164", "7307", "7457", "7624", "7626", "7627",
      "7683", "7904", "7916", "8045", "8135", "8266", "8338", "8341",
      "8347", "8480", "8482", "8528", "8539", "8585", "8666", "8982",
      "8984", "9049", "9123", "9127",
    ],
  },
  {
    id: "tf6",
    label: "Tag Force 6",
    shortLabel: "TF6",
    assetRoot: "models/fieldspells/tf6",
    previewIds: [
      "6", "9", "3599", "3712", "3713", "3720", "3723", "3733",
      "3757", "3767", "3768", "3788", "4336", "4337", "4338", "4339",
      "4340", "4341", "4899", "4932", "4933", "4934", "4935", "4936",
      "4937", "5182", "5187", "5276", "5329", "5387", "5533", "5788",
      "5791", "5982", "6207", "6271", "6399", "6642", "6668", "6758",
      "6759", "6775", "6823", "7004", "7079", "7129", "7164", "7307",
      "7457", "7624", "7626", "7627", "7683", "7904", "7916", "8045",
      "8135", "8266", "8338", "8341", "8347", "8480", "8482", "8528",
      "8539", "8585", "8666", "8982", "8984", "9032", "9049", "9123",
      "9127", "9232", "9267", "9342", "9350", "9456", "9520", "9715",
    ],
  },
  {
    id: "tf7",
    label: "Tag Force 7",
    shortLabel: "TF7",
    assetRoot: "models/fieldspells/tf7",
    previewIds: [
      "7", "3599",
    ],
  },
];

// PREVIEW_SHORTCUTS_START
const PREVIEW_SHORTCUTS = {
  "tf2:4336": "models/fieldspells/tf1/duel-bg-fmagic4336-base-tma-preview.html",
  "tf2:4337": "models/fieldspells/tf1/duel-bg-fmagic4337-base-tma-preview.html",
  "tf2:4338": "models/fieldspells/tf1/duel-bg-fmagic4338-base-tma-preview.html",
  "tf2:4339": "models/fieldspells/tf1/duel-bg-fmagic4339-base-tma-preview.html",
  "tf2:4340": "models/fieldspells/tf1/duel-bg-fmagic4340-base-tma-preview.html",
  "tf2:4341": "models/fieldspells/tf1/duel-bg-fmagic4341-base-tma-preview.html",
  "tf2:4899": "models/fieldspells/tf1/duel-bg-fmagic4899-base-tma-preview.html",
  "tf2:4932": "models/fieldspells/tf1/duel-bg-fmagic4932-base-tma-preview.html",
  "tf2:4933": "models/fieldspells/tf1/duel-bg-fmagic4933-base-tma-preview.html",
  "tf2:4934": "models/fieldspells/tf1/duel-bg-fmagic4934-base-tma-preview.html",
  "tf2:4935": "models/fieldspells/tf1/duel-bg-fmagic4935-base-tma-preview.html",
  "tf2:4936": "models/fieldspells/tf1/duel-bg-fmagic4936-base-tma-preview.html",
  "tf2:4937": "models/fieldspells/tf1/duel-bg-fmagic4937-base-tma-preview.html",
  "tf2:5182": "models/fieldspells/tf1/duel-bg-fmagic5182-base-tma-preview.html",
  "tf2:5187": "models/fieldspells/tf1/duel-bg-fmagic5187-base-tma-preview.html",
  "tf2:5329": "models/fieldspells/tf1/duel-bg-fmagic5329-base-tma-preview.html",
  "tf2:5387": "models/fieldspells/tf1/duel-bg-fmagic5387-base-tma-preview.html",
  "tf2:5533": "models/fieldspells/tf1/duel-bg-fmagic5533-base-tma-preview.html",
  "tf2:5788": "models/fieldspells/tf1/duel-bg-fmagic5788-base-tma-preview.html",
  "tf2:5791": "models/fieldspells/tf1/duel-bg-fmagic5791-base-tma-preview.html",
  "tf2:5982": "models/fieldspells/tf1/duel-bg-fmagic5982-base-tma-preview.html",
  "tf2:6271": "models/fieldspells/tf1/duel-bg-fmagic6271-base-tma-preview.html",
  "tf2:6399": "models/fieldspells/tf1/duel-bg-fmagic6399-base-tma-preview.html",
  "tf2:6668": "models/fieldspells/tf1/duel-bg-fmagic6668-base-tma-preview.html",
  "tf2:6758": "models/fieldspells/tf1/duel-bg-fmagic6758-base-tma-preview.html",
  "tf2:6759": "models/fieldspells/tf1/duel-bg-fmagic6759-base-tma-preview.html",
  "tf2:6775": "models/fieldspells/tf1/duel-bg-fmagic6775-base-tma-preview.html",
  "tf2:6823": "models/fieldspells/tf1/duel-bg-fmagic6823-base-tma-preview.html",
  "tf3:2": "models/fieldspells/tf2/duel-bg-fmagic2-base-tma-preview.html",
  "tf3:3720": "models/fieldspells/tf2/duel-bg-fmagic3720-base-tma-preview.html",
  "tf3:3723": "models/fieldspells/tf2/duel-bg-fmagic3723-base-tma-preview.html",
  "tf3:3733": "models/fieldspells/tf2/duel-bg-fmagic3733-base-tma-preview.html",
  "tf3:4336": "models/fieldspells/tf1/duel-bg-fmagic4336-base-tma-preview.html",
  "tf3:4337": "models/fieldspells/tf1/duel-bg-fmagic4337-base-tma-preview.html",
  "tf3:4338": "models/fieldspells/tf1/duel-bg-fmagic4338-base-tma-preview.html",
  "tf3:4339": "models/fieldspells/tf1/duel-bg-fmagic4339-base-tma-preview.html",
  "tf3:4340": "models/fieldspells/tf1/duel-bg-fmagic4340-base-tma-preview.html",
  "tf3:4341": "models/fieldspells/tf1/duel-bg-fmagic4341-base-tma-preview.html",
  "tf3:4899": "models/fieldspells/tf1/duel-bg-fmagic4899-base-tma-preview.html",
  "tf3:4932": "models/fieldspells/tf1/duel-bg-fmagic4932-base-tma-preview.html",
  "tf3:4933": "models/fieldspells/tf1/duel-bg-fmagic4933-base-tma-preview.html",
  "tf3:4934": "models/fieldspells/tf1/duel-bg-fmagic4934-base-tma-preview.html",
  "tf3:4935": "models/fieldspells/tf1/duel-bg-fmagic4935-base-tma-preview.html",
  "tf3:4936": "models/fieldspells/tf1/duel-bg-fmagic4936-base-tma-preview.html",
  "tf3:4937": "models/fieldspells/tf1/duel-bg-fmagic4937-base-tma-preview.html",
  "tf3:5182": "models/fieldspells/tf1/duel-bg-fmagic5182-base-tma-preview.html",
  "tf3:5187": "models/fieldspells/tf1/duel-bg-fmagic5187-base-tma-preview.html",
  "tf3:5276": "models/fieldspells/tf2/duel-bg-fmagic5276-base-tma-preview.html",
  "tf3:5329": "models/fieldspells/tf1/duel-bg-fmagic5329-base-tma-preview.html",
  "tf3:5387": "models/fieldspells/tf1/duel-bg-fmagic5387-base-tma-preview.html",
  "tf3:5533": "models/fieldspells/tf1/duel-bg-fmagic5533-base-tma-preview.html",
  "tf3:5788": "models/fieldspells/tf1/duel-bg-fmagic5788-base-tma-preview.html",
  "tf3:5791": "models/fieldspells/tf1/duel-bg-fmagic5791-base-tma-preview.html",
  "tf3:5982": "models/fieldspells/tf1/duel-bg-fmagic5982-base-tma-preview.html",
  "tf3:6271": "models/fieldspells/tf1/duel-bg-fmagic6271-base-tma-preview.html",
  "tf3:6399": "models/fieldspells/tf1/duel-bg-fmagic6399-base-tma-preview.html",
  "tf3:6642": "models/fieldspells/tf2/duel-bg-fmagic6642-base-tma-preview.html",
  "tf3:6668": "models/fieldspells/tf1/duel-bg-fmagic6668-base-tma-preview.html",
  "tf3:6758": "models/fieldspells/tf1/duel-bg-fmagic6758-base-tma-preview.html",
  "tf3:6759": "models/fieldspells/tf1/duel-bg-fmagic6759-base-tma-preview.html",
  "tf3:6775": "models/fieldspells/tf1/duel-bg-fmagic6775-base-tma-preview.html",
  "tf3:6823": "models/fieldspells/tf1/duel-bg-fmagic6823-base-tma-preview.html",
  "tf3:7004": "models/fieldspells/tf2/duel-bg-fmagic7004-base-tma-preview.html",
  "tf3:7079": "models/fieldspells/tf2/duel-bg-fmagic7079-base-tma-preview.html",
  "tf3:7129": "models/fieldspells/tf2/duel-bg-fmagic7129-base-tma-preview.html",
  "tf3:7164": "models/fieldspells/tf2/duel-bg-fmagic7164-base-tma-preview.html",
  "tf5:3720": "models/fieldspells/tf4/duel-bg-fmagic3720-base-tma-preview.html",
  "tf5:3723": "models/fieldspells/tf4/duel-bg-fmagic3723-base-tma-preview.html",
  "tf5:3733": "models/fieldspells/tf4/duel-bg-fmagic3733-base-tma-preview.html",
  "tf5:3757": "models/fieldspells/tf4/duel-bg-fmagic3757-base-tma-preview.html",
  "tf5:3767": "models/fieldspells/tf4/duel-bg-fmagic3767-base-tma-preview.html",
  "tf5:3768": "models/fieldspells/tf4/duel-bg-fmagic3768-base-tma-preview.html",
  "tf5:3788": "models/fieldspells/tf4/duel-bg-fmagic3788-base-tma-preview.html",
  "tf5:4336": "models/fieldspells/tf4/duel-bg-fmagic4336-base-tma-preview.html",
  "tf5:4337": "models/fieldspells/tf4/duel-bg-fmagic4337-base-tma-preview.html",
  "tf5:4338": "models/fieldspells/tf4/duel-bg-fmagic4338-base-tma-preview.html",
  "tf5:4339": "models/fieldspells/tf4/duel-bg-fmagic4339-base-tma-preview.html",
  "tf5:4340": "models/fieldspells/tf4/duel-bg-fmagic4340-base-tma-preview.html",
  "tf5:4341": "models/fieldspells/tf4/duel-bg-fmagic4341-base-tma-preview.html",
  "tf5:4899": "models/fieldspells/tf4/duel-bg-fmagic4899-base-tma-preview.html",
  "tf5:4932": "models/fieldspells/tf4/duel-bg-fmagic4932-base-tma-preview.html",
  "tf5:4933": "models/fieldspells/tf4/duel-bg-fmagic4933-base-tma-preview.html",
  "tf5:4934": "models/fieldspells/tf4/duel-bg-fmagic4934-base-tma-preview.html",
  "tf5:4935": "models/fieldspells/tf4/duel-bg-fmagic4935-base-tma-preview.html",
  "tf5:4937": "models/fieldspells/tf4/duel-bg-fmagic4937-base-tma-preview.html",
  "tf5:5187": "models/fieldspells/tf4/duel-bg-fmagic5187-base-tma-preview.html",
  "tf5:5276": "models/fieldspells/tf4/duel-bg-fmagic5276-base-tma-preview.html",
  "tf5:5329": "models/fieldspells/tf4/duel-bg-fmagic5329-base-tma-preview.html",
  "tf5:5387": "models/fieldspells/tf4/duel-bg-fmagic5387-base-tma-preview.html",
  "tf5:5533": "models/fieldspells/tf4/duel-bg-fmagic5533-base-tma-preview.html",
  "tf5:5788": "models/fieldspells/tf4/duel-bg-fmagic5788-base-tma-preview.html",
  "tf5:5791": "models/fieldspells/tf4/duel-bg-fmagic5791-base-tma-preview.html",
  "tf5:5982": "models/fieldspells/tf4/duel-bg-fmagic5982-base-tma-preview.html",
  "tf5:6271": "models/fieldspells/tf4/duel-bg-fmagic6271-base-tma-preview.html",
  "tf5:6399": "models/fieldspells/tf4/duel-bg-fmagic6399-base-tma-preview.html",
  "tf5:6642": "models/fieldspells/tf4/duel-bg-fmagic6642-base-tma-preview.html",
  "tf5:6668": "models/fieldspells/tf4/duel-bg-fmagic6668-base-tma-preview.html",
  "tf5:6758": "models/fieldspells/tf4/duel-bg-fmagic6758-base-tma-preview.html",
  "tf5:6759": "models/fieldspells/tf4/duel-bg-fmagic6759-base-tma-preview.html",
  "tf5:6775": "models/fieldspells/tf4/duel-bg-fmagic6775-base-tma-preview.html",
  "tf5:7079": "models/fieldspells/tf4/duel-bg-fmagic7079-base-tma-preview.html",
  "tf5:7129": "models/fieldspells/tf4/duel-bg-fmagic7129-base-tma-preview.html",
  "tf5:7164": "models/fieldspells/tf4/duel-bg-fmagic7164-base-tma-preview.html",
  "tf5:7307": "models/fieldspells/tf4/duel-bg-fmagic7307-base-tma-preview.html",
  "tf5:7457": "models/fieldspells/tf4/duel-bg-fmagic7457-base-tma-preview.html",
  "tf5:7624": "models/fieldspells/tf4/duel-bg-fmagic7624-base-tma-preview.html",
  "tf5:7626": "models/fieldspells/tf4/duel-bg-fmagic7626-base-tma-preview.html",
  "tf5:7627": "models/fieldspells/tf4/duel-bg-fmagic7627-base-tma-preview.html",
  "tf5:7683": "models/fieldspells/tf4/duel-bg-fmagic7683-base-tma-preview.html",
  "tf5:7904": "models/fieldspells/tf4/duel-bg-fmagic7904-base-tma-preview.html",
  "tf5:7916": "models/fieldspells/tf4/duel-bg-fmagic7916-base-tma-preview.html",
  "tf5:8045": "models/fieldspells/tf4/duel-bg-fmagic8045-base-tma-preview.html",
  "tf5:8135": "models/fieldspells/tf4/duel-bg-fmagic8135-base-tma-preview.html",
  "tf5:8266": "models/fieldspells/tf4/duel-bg-fmagic8266-base-tma-preview.html",
  "tf5:8338": "models/fieldspells/tf4/duel-bg-fmagic8338-base-tma-preview.html",
  "tf5:8341": "models/fieldspells/tf4/duel-bg-fmagic8341-base-tma-preview.html",
  "tf5:8347": "models/fieldspells/tf4/duel-bg-fmagic8347-base-tma-preview.html",
  "tf5:8480": "models/fieldspells/tf4/duel-bg-fmagic8480-base-tma-preview.html",
  "tf5:8482": "models/fieldspells/tf4/duel-bg-fmagic8482-base-tma-preview.html",
  "tf5:8539": "models/fieldspells/tf4/duel-bg-fmagic8539-base-tma-preview.html",
  "tf5:8585": "models/fieldspells/tf4/duel-bg-fmagic8585-base-tma-preview.html",
  "tf6:8338": "models/fieldspells/tf4/duel-bg-fmagic8338-base-tma-preview.html",
  "tf6:8480": "models/fieldspells/tf4/duel-bg-fmagic8480-base-tma-preview.html",
  "tf6:8539": "models/fieldspells/tf4/duel-bg-fmagic8539-base-tma-preview.html",
  "tf6:8666": "models/fieldspells/tf5/duel-bg-fmagic8666-base-tma-preview.html",
  "tf6:8982": "models/fieldspells/tf5/duel-bg-fmagic8982-base-tma-preview.html",
  "tf6:8984": "models/fieldspells/tf5/duel-bg-fmagic8984-base-tma-preview.html",
  "tf7:3599": "models/fieldspells/tf6/duel-bg-fmagic3599-base-tma-preview.html",
};
const previewShortcuts = PREVIEW_SHORTCUTS;
// PREVIEW_SHORTCUTS_END

const cards = series.flatMap((game) => game.previewIds.map((previewId) => {
  const id = String(Number(previewId));

  return {
    id,
    previewId,
    seriesId: game.id,
    seriesLabel: game.label,
    name: cardNames[id] || id,
    image: `${IMAGE_ROOT}/${id}.avif`,
    preview: previewShortcuts[`${game.id}:${previewId}`] || `${game.assetRoot}/duel-bg-fmagic${previewId}-base-tma-preview.html`,
  };
}));

const libraryView = document.querySelector("#libraryView");
const viewerView = document.querySelector("#viewerView");
const cardGrid = document.querySelector("#cardGrid");
const cardTemplate = document.querySelector("#cardTemplate");
const seriesTabs = document.querySelector("#seriesTabs");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");
const previewFrame = document.querySelector("#previewFrame");
const viewerTitle = document.querySelector("#viewerTitle");
const backButton = document.querySelector("#backButton");

let activeFilter = "";
let activeSeriesId = series[0].id;

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function fitCardNames() {
  for (const name of document.querySelectorAll(".card-name")) {
    name.style.setProperty("--name-scale", "1");
    name.style.width = "max-content";

    const availableWidth = name.parentElement.clientWidth;
    const naturalWidth = name.scrollWidth;
    const scale = naturalWidth > availableWidth ? (availableWidth - 2) / naturalWidth : 1;

    name.style.setProperty("--name-scale", String(Math.max(scale, 0.1)));
  }
}

function saveScrollPosition() {
  sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
}

function restoreScrollPosition() {
  const scrollY = Number(sessionStorage.getItem(SCROLL_KEY) || "0");
  requestAnimationFrame(() => {
    window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });
  });
}

function getCardFromHash() {
  const params = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const id = params.get("card");
  const seriesId = params.get("series") || activeSeriesId;
  return cards.find((card) => card.id === id && card.seriesId === seriesId);
}

function loadPreview(url) {
  const frameUrl = previewFrame.getAttribute("data-preview-url");
  if (frameUrl === url) {
    return;
  }

  previewFrame.setAttribute("data-preview-url", url);

  if (previewFrame.contentWindow) {
    previewFrame.contentWindow.location.replace(url);
    return;
  }

  previewFrame.src = url;
}

function clearPreview() {
  previewFrame.removeAttribute("data-preview-url");

  if (previewFrame.contentWindow) {
    previewFrame.contentWindow.location.replace("about:blank");
    return;
  }

  previewFrame.removeAttribute("src");
}

function setView(card, options = {}) {
  if (card) {
    activeSeriesId = card.seriesId;
    renderTabs();
    libraryView.hidden = true;
    viewerView.hidden = false;
    viewerTitle.textContent = card.name;
    loadPreview(card.preview);
    document.title = `${card.name} - ${card.seriesLabel} Field Spell Preview`;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return;
  }

  viewerView.hidden = true;
  libraryView.hidden = false;
  clearPreview();
  viewerTitle.textContent = "";
  document.title = "Tag Force Field Spell Previews";
  renderTabs();
  renderCards();

  if (options.restoreScroll) {
    restoreScrollPosition();
  }
}

function openCard(card) {
  saveScrollPosition();
  window.location.hash = new URLSearchParams({ series: card.seriesId, card: card.id }).toString();
}

function renderTabs() {
  seriesTabs.replaceChildren();

  for (const game of series) {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "series-tab";
    tab.textContent = game.shortLabel;
    tab.setAttribute("aria-label", game.label);
    tab.setAttribute("aria-pressed", String(game.id === activeSeriesId));
    tab.addEventListener("click", () => {
      activeSeriesId = game.id;
      renderTabs();
      renderCards();
    });

    seriesTabs.append(tab);
  }
}

function getVisibleCards() {
  const query = activeFilter.trim().toLowerCase();
  return cards.filter((card) => {
    if (card.seriesId !== activeSeriesId) {
      return false;
    }

    return card.id.includes(query) || card.name.toLowerCase().includes(query);
  });
}

function setCardImage(image, card) {
  image.onerror = () => {
    if (!image.src.endsWith("/0.avif")) {
      image.src = PLACEHOLDER_IMAGE;
    }
  };
  image.src = card.image;
}

function renderCards() {
  const visibleCards = getVisibleCards();
  const activeSeries = series.find((game) => game.id === activeSeriesId);
  const seriesTotal = cards.filter((card) => card.seriesId === activeSeriesId).length;

  cardGrid.replaceChildren();

  for (const card of visibleCards) {
    const tile = cardTemplate.content.firstElementChild.cloneNode(true);
    const image = tile.querySelector("img");

    setCardImage(image, card);
    image.alt = `${card.name} card art`;
    tile.querySelector(".card-name").textContent = card.name;
    tile.title = `${card.name} (${card.id})`;
    tile.addEventListener("click", () => openCard(card));

    cardGrid.append(tile);
  }

  resultCount.textContent = `${visibleCards.length} of ${seriesTotal} ${activeSeries.shortLabel} cards`;
  requestAnimationFrame(fitCardNames);
}

function syncRoute(options = {}) {
  const card = getCardFromHash();
  setView(card || null, { restoreScroll: options.restoreScroll && !card });
}

function primeInitialCardHistory() {
  if (!getCardFromHash()) {
    return;
  }

  const cardUrl = window.location.pathname + window.location.search + window.location.hash;
  const homeUrl = window.location.pathname + window.location.search;
  history.replaceState(null, document.title, homeUrl);
  history.pushState(null, document.title, cardUrl);
}

searchInput.addEventListener("input", (event) => {
  activeFilter = event.target.value;
  renderCards();
});

backButton.addEventListener("click", () => {
  history.replaceState(null, document.title, window.location.pathname + window.location.search);
  setView(null, { restoreScroll: true });
});

window.addEventListener("hashchange", () => {
  syncRoute({ restoreScroll: true });
});

window.addEventListener("popstate", () => {
  syncRoute({ restoreScroll: true });
});

window.addEventListener("resize", fitCardNames);

primeInitialCardHistory();
renderTabs();
renderCards();
syncRoute();
