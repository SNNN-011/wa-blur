# WA Blur

A small Microsoft Edge / Chrome extension that adds a privacy layer to **WhatsApp Web**:
blur sidebar names and previews, active chat names, and open chat messages.
Hover any blurred element to reveal it.

> Built small on purpose. No analytics, no data collection.

---

## Features

- Blur **names** in the sidebar and active chat
- Blur **open chat messages** (5px + grayscale)
- Blur **last-message previews** in the sidebar
- Hover-to-reveal for every blurred element
- Compact floating popup with independent toggles
- Settings saved with `chrome.storage.sync`
- Manifest V3, Edge & Chrome compatible

---

## Installation

### Edge / Chrome (unpacked)

1. Open `edge://extensions` (or `chrome://extensions`)
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select this folder
5. Open https://web.whatsapp.com

---

## File Layout

```text
.
├── manifest.json
├── content.js          # inject/remove feature styles based on toggles
├── popup.html          # settings dashboard
├── popup.js            # toggle logic
├── css/
│   ├── messages.css        # open chat messages
│   ├── messagesPreview.css # sidebar previews
│   └── name.css            # names everywhere
└── README.md
```

---

## How It Works

WhatsApp Web changes class names often, so the CSS selectors are based on
current stable attributes and class groups maintained in:

- `css/messages.css`
- `css/messagesPreview.css`
- `css/name.css`

`content.js` checks your saved settings, then injects only the selected
stylesheets into the page. Unchecking an option removes its stylesheet
without touching the others, so toggles apply instantly.

---

## Permissions

- `storage` — save toggle state
- `host_permissions`: `https://web.whatsapp.com/*`

No background service worker, no external requests.

---

## License

MIT
```

Add MIT LICENSE? We can add. Not required. Nice. Create LICENSE with MIT text.<|end|><|start|>-assisted by tool? Actually let's write quickly.<|end|><|start|>start_of_turn<|message|>assistant to=write<|channel|>analysis <|constrain|>xml<|message|><rfl:parameter name="path">
C:\Users\yasin\SetupAgent\whatsapp-blur-extension\LICENSE