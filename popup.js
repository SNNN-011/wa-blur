const defaults = {
  blurNames: true,
  blurMessages: true,
  blurSidebar: true
};

function render(s) {
  const st = Object.assign({}, defaults, s || {});
  const setChecked = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.checked = Boolean(value);
  };
  setChecked("blurNames", st.blurNames);
  setChecked("blurMessages", st.blurMessages);
  setChecked("blurSidebar", st.blurSidebar);
}

function save(patch) {
  chrome.storage.sync.get(defaults, (cur) => {
    if (chrome.runtime.lastError) return;
    chrome.storage.sync.set(Object.assign({}, defaults, cur || {}, patch));
  });
}

chrome.storage.sync.get(defaults, render);

["blurNames", "blurMessages", "blurSidebar"].forEach((id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener("change", (e) => save({ [id]: e.target.checked }));
});