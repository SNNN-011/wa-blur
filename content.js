const defaults = {
  blurNames: true,
  blurMessages: true,
  blurSidebar: true
};

const FILES = {
  blurMessages: "css/messages.css",
  blurSidebar: "css/messagesPreview.css",
  blurNames: "css/name.css"
};

const LINK_PREFIX = "wablur-style-";

function syncStyles(settings) {
  const s = Object.assign({}, defaults, settings || {});
  Object.keys(FILES).forEach((key) => {
    const id = LINK_PREFIX + key;
    const exists = Boolean(document.getElementById(id));
    if (s[key] && !exists) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = chrome.runtime.getURL(FILES[key]);
      (document.head || document.documentElement).appendChild(link);
    } else if (!s[key] && exists) {
      const el = document.getElementById(id);
      if (el) el.remove();
    }
  });
}

function loadAndApply() {
  chrome.storage.sync.get(defaults, syncStyles);
}

if (chrome && chrome.storage) {
  loadAndApply();
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== "sync") return;
    loadAndApply();
  });
} else {
  syncStyles(defaults);
}