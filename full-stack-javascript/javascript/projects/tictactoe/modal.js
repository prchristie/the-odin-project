/**
 * @param {boolean} startsOpen
 * @param {Document} doc
 * @param {() => HTMLElement} createContentCb
 */
export function createModal(startsOpen, doc, createContentCb, baseElement) {
  const isOpen = startsOpen;
  const modal = createInitialModal();

  function createInitialModal() {
    const modal = doc.createElement("div");
    modal.classList.add("modal", `${isOpen ? "open" : "closed"}`);
    modal.appendChild(createCloseButton());

    return modal;
  }

  function createCloseButton() {
    const btn = doc.createElement("button");
    btn.innerText = "❌";
    btn.onclick = () => close();
    btn.classList.add("modal-close-btn");
    return btn;
  }

  function rerender() {
    modal.innerText = "";
    modal.appendChild(createCloseButton())
    const children = createContentCb();
    modal.appendChild(children);
    baseElement.appendChild(modal);
  }

  function open() {
    modal.classList.remove("closed");
    modal.classList.add("open");

    rerender();
  }

  function close() {
    modal.classList.remove("open");
    modal.classList.add("closed");

    rerender();
  }

  return { open, close, rerender };
}
