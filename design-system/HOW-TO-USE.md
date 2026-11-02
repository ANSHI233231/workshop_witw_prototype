# Starter design system — local copy

Exported from the Starter design system on 30 Oct 2026 (the version with SearchSelect and ServerSelect).

## What's here

| Path | What |
|---|---|
| `README.md` | The brand book: usage rules, content, messages, colour, type, sizes, states, icons, logo |
| `tokens.json` | Every token: colours per theme, type styles, spacing, radius, shadows, sizes, durations, z-index |
| `tokens.css` | The same tokens as CSS custom properties, generated from tokens.json; switch with `data-theme="console"` or `"portal"` |
| `components/bundle.js` | All 27 components as `window.Starter` (load React 18 and ReactDOM 18 first) |
| `components/bundle.css` | Component styles (load after tokens.css) |
| `components/index.d.ts` | Props for every component |
| `components/<Name>/README.md` | Guidelines for each component |
| `components/<Name>/preview.html` | The original preview card as the design system page runs it |
| `design-system.json` | The design system's index (title, namespace, libraries, last change) |
| `standalone/` | Every preview as a page you can open in a browser; start at `standalone/index.html` |

## Viewing it

Open `standalone/index.html` in a browser. The pages load React 18.3.1 from unpkg and Inter from Google Fonts, so they need an internet connection. If your browser blocks local files, serve the folder (`npx serve .` or `python3 -m http.server`) and open `/standalone/`.

## Using it in a page

```html
<html data-theme="console">  <!-- or "portal" -->
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components/bundle.css">
<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script src="components/bundle.js"></script>
<div id="app" class="st-root"></div>
<script>
  const { Button } = window.Starter;
  ReactDOM.createRoot(document.getElementById('app'))
    .render(React.createElement(Button, { variant: 'primary', icon: 'plus' }, 'Add User'));
</script>
```
