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
