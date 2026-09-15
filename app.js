(() => {
  "use strict";

  const slides = [...document.querySelectorAll(".slide")];
  const previousButton = document.querySelector("#previous");
  const nextButton = document.querySelector("#next");
  const currentLabel = document.querySelector("#current-slide");
  const totalLabel = document.querySelector("#total-slides");
  const progress = document.querySelector("#progress");
  const fullscreenButton = document.querySelector("#fullscreen");
  const notesButton = document.querySelector("#notes");
  const controlStatus = document.querySelector("#control-status");

  let activeIndex = 0;
  let notesWindow = null;

  const numberFromHash = () => {
    const parsed = Number.parseInt(window.location.hash.slice(1), 10);
    return Number.isInteger(parsed) ? parsed - 1 : activeIndex;
  };

  const clampIndex = (index) => Math.max(0, Math.min(slides.length - 1, index));

  function showSlide(index, updateHistory = true) {
    activeIndex = clampIndex(index);

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
      slide.inert = !isActive;
      if (isActive) slide.scrollTop = 0;
    });

    const humanIndex = activeIndex + 1;
    currentLabel.textContent = String(humanIndex).padStart(2, "0");
    totalLabel.textContent = String(slides.length).padStart(2, "0");
    progress.style.transform = `scaleX(${humanIndex / slides.length})`;
    previousButton.disabled = activeIndex === 0;
    nextButton.disabled = activeIndex === slides.length - 1;

    if (updateHistory) history.replaceState(null, "", `#${humanIndex}`);
    if (notesWindow && !notesWindow.closed) notesWindow.location.hash = String(humanIndex);
    document.title = `${humanIndex}/${slides.length} · ${slides[activeIndex].dataset.section} | CECAR`;
  }

  async function toggleFullscreen() {
    try {
      if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
      else await document.exitFullscreen();
    } catch {
      fullscreenButton.textContent = "No disponible";
    }
  }

  function openNotes() {
    notesWindow = window.open(`notes.html#${activeIndex + 1}`, "cecar-presenter-notes", "popup,width=620,height=760");
    if (notesWindow) notesWindow.focus();
    else controlStatus.textContent = "El navegador bloqueó las notas. Permite ventanas emergentes para este sitio e inténtalo de nuevo.";
  }

  const notesAreLocal = location.protocol === "file:" || ["localhost", "127.0.0.1"].includes(location.hostname);
  notesButton.hidden = !notesAreLocal;

  previousButton.addEventListener("click", () => showSlide(activeIndex - 1));
  nextButton.addEventListener("click", () => showSlide(activeIndex + 1));
  fullscreenButton.addEventListener("click", toggleFullscreen);
  notesButton.addEventListener("click", openNotes);

  document.addEventListener("fullscreenchange", () => {
    const isFullscreen = Boolean(document.fullscreenElement);
    fullscreenButton.textContent = isFullscreen ? "Salir de pantalla completa" : "Pantalla completa";
    fullscreenButton.setAttribute("aria-label", fullscreenButton.textContent);
  });

  window.addEventListener("hashchange", () => showSlide(numberFromHash(), false));
  window.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.target.closest("button, a, input, textarea, select, [contenteditable='true']")) return;

    const actions = {
      ArrowLeft: () => showSlide(activeIndex - 1),
      ArrowRight: () => showSlide(activeIndex + 1),
      PageUp: () => showSlide(activeIndex - 1),
      PageDown: () => showSlide(activeIndex + 1),
      Home: () => showSlide(0),
      End: () => showSlide(slides.length - 1),
      " ": () => showSlide(activeIndex + 1),
      f: toggleFullscreen,
      F: toggleFullscreen,
      n: openNotes,
      N: openNotes
    };

    if (actions[event.key]) {
      event.preventDefault();
      actions[event.key]();
    }
  });

  showSlide(numberFromHash(), false);
})();
