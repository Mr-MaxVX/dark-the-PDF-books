# Dark PDF Books

A tiny browser script that adds a dark overlay to a PDF page while you read it in the browser.

## How to use

1. Open the PDF in your browser.
2. Press F12 to open Developer Tools.
3. Go to the Console tab.
4. Copy the contents of `dark-pdf.js`.
5. Paste it into the console and press Enter.

The script creates a full-screen overlay that makes the white background darker and easier to read.

## Files

- `dark-pdf.js` - JavaScript code to paste into the browser console.
- `dark-pdf.css` - The CSS styling used by the overlay.

## Example

```javascript
const overlay = document.createElement("div");
overlay.className = "dark-pdf-overlay";
overlay.setAttribute(
  "style",
  `
    position: fixed;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    mix-blend-mode: difference;
    z-index: 1;
  `
);

if (!document.querySelector(".dark-pdf-overlay")) {
  document.body.appendChild(overlay);
}
```
