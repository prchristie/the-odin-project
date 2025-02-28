/**
 * @param {boolean} startsOpen
 * @param {Document} doc
 * @param {() => HTMLElement} createContentCb
 */
export function createModal(startsOpen, doc, createContentCb, baseElement) {
  let modal;
  let isOpen = startsOpen;

  function initialize() {
    modal = doc.createElement("div");
    modal.classList.add("modal", `${isOpen ? "open" : "closed"}`);
    modal.appendChild(createCloseButton());
  }

  function createCloseButton() {
    const btn = doc.createElement("button");
    btn.innerText = "❌";
    btn.onclick = () => close();
    btn.classList.add("modal-close-btn");
    return btn;
  }

  function rerender() {
    baseElement.textContent = "";
    const children = createContentCb();
    initialize();
    modal.appendChild(children);
    baseElement.appendChild(modal);
  }

  rerender();

  function open() {
    modal.classList.remove("closed");
    modal.classList.add("open");
  }

  function close() {
    modal.classList.remove("open");
    modal.classList.add("closed");
  }

  return { open, close, rerender };
}
