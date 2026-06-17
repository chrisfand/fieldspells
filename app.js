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
