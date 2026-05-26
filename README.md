<p align="center">
  <img src="assets/banner.png" alt="Google No AI Banner" width="100%">
</p>

# Google No AI

A Chrome extension that forces Google searches to display **classic web results only**, bypassing AI-generated summaries (AI Overviews, AI Mode, etc.).

## What it does

Google redesigned its results page to show AI-generated answers first. This extension automatically intercepts any Google search and appends the `udm=14` parameter, which redirects directly to the traditional "Web" results tab.

- Removes AI Overviews from search results.
- Works on searches from the address bar, the Google homepage, and direct links.
- Zero configuration required; runs silently in the background.

## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle at the top right).
4. Click **Load unpacked**.
5. Select the `google-no-ai-extension` folder.

You're all set! From now on, every Google search will be automatically redirected to AI-free web results.

## How it works

The extension uses the `chrome.tabs.onUpdated` event to detect when a tab navigates to a Google search URL (`/search`). If the URL does not already contain the `udm=14` parameter, it appends it and redirects the tab.

The `udm=14` parameter is an internal Google identifier that corresponds to the **"Web"** tab (classic results), skipping the AI view.

### Example

- **Original URL:** `https://www.google.com/search?q=example`
- **Extension URL:** `https://www.google.com/search?q=example&udm=14`

## Project structure

```
google-no-ai-extension/
├── manifest.json     # Extension configuration (Manifest V3)
├── background.js     # Redirection logic
├── icon16.png        # Toolbar icon (16x16)
├── icon32.png        # Toolbar icon (32x32)
├── icon48.png        # Extensions page icon (48x48)
├── icon128.png       # Chrome Web Store icon (128x128)
└── README.md         # This file
```

## Permissions

The extension requests only the minimum permissions needed:

- **`tabs`**: To listen for URL changes in tabs and redirect when appropriate.
- **`host_permissions` for `*://*.google.com/*`**: To act only on Google pages.

No browsing history is accessed, no data is sent to external servers, and no code is injected into the pages you visit.

## Compatibility

- **Browsers:** Chrome, Edge, Brave, Opera, and any Chromium-based browser supporting Manifest V3.
- **Languages:** Works with all regional Google domains (`google.com`, `google.co.uk`, `google.es`, etc.).

## Contributing

Contributions are welcome! If you find a bug, if Google changes how `udm=14` works, or if you have an idea to improve the extension, open an issue or submit a pull request.

## License

MIT

---

*Built to keep web search simple and free of AI noise.*
