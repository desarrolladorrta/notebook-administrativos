(() => {
  "use strict";

  const printButton = document.querySelector("#print-guide");
  if (printButton) printButton.addEventListener("click", () => window.print());

  const notes = [...document.querySelectorAll(".note")];
  if (!notes.length) return;

  const previous = document.querySelector("#notes-previous");
  const next = document.querySelector("#notes-next");

  function showCurrentNote() {
    const parsed = Number.parseInt(window.location.hash.slice(1), 10);
    const current = Math.max(1, Math.min(notes.length, Number.isInteger(parsed) ? parsed : 1));

    notes.forEach((note, index) => note.classList.toggle("is-current", index === current - 1));
    previous.href = `#${Math.max(1, current - 1)}`;
    next.href = `#${Math.min(notes.length, current + 1)}`;
    previous.setAttribute("aria-disabled", String(current === 1));
    next.setAttribute("aria-disabled", String(current === notes.length));
    document.title = `Nota ${current}/${notes.length} | CECAR`;
  }

  window.addEventListener("hashchange", showCurrentNote);
  showCurrentNote();
})();
