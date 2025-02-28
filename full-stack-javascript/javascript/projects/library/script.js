const myLibrary = [
  new Book("hello", "https://picsum.photos/200/300", true),
  new Book("hello", "https://picsum.photos/200/320", true),
];

function Book(title, coverArtUrl, read) {
  this.title = title;
  this.coverArtUrl = coverArtUrl;
  this.read = read;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

function createDeleteButton(index) {
  const button = document.createElement("button");
  button.setAttribute("index", index);
  button.textContent = "Delete";

  return button;
}

function createLibraryView(library) {
  return library.map((b, i) => {
    const titleElement = document.createElement("p");
    const coverArtElement = document.createElement("img");
    coverArtElement.src = b.coverArtUrl;
    titleElement.innerText = b.title;

    const titleTd = document.createElement("td");
    const imageTd = document.createElement("td");
    const deleteTd = document.createElement("td");
    const readTd = document.createElement("td");
    titleTd.appendChild(titleElement);
    imageTd.appendChild(coverArtElement);
    deleteTd.appendChild(createDeleteButton(i));

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = b.read;
    checkbox.setAttribute("index", i);
    readTd.appendChild(checkbox);

    const tableRow = document.createElement("tr");
    tableRow.appendChild(titleTd);
    tableRow.appendChild(imageTd);
    tableRow.appendChild(deleteTd);
    tableRow.appendChild(readTd);

    return tableRow;
  });
}

function renderLibrary(element) {
  element.textContent = "";
  createLibraryView(myLibrary).forEach((tr) => element?.appendChild(tr));
  setupDeleteBookButtons(element);
}

function setupNewBookModal(table) {
  const newBookButton = document.querySelector("#new-book");
  const form = document.querySelector("form");
  const dialog = document.querySelector("dialog");

  newBookButton?.addEventListener("click", () => dialog?.showModal());
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    addBookToLibrary(
      new Book(formData.get("bookTitle"), formData.get("coverUrl"), false)
    );
    renderLibrary(table);
    form.reset();
    dialog?.close();
  });
}

function setupDeleteBookButtons(table) {
  const buttons = document.querySelectorAll("button[index]");

  buttons.forEach((b) =>
    b.addEventListener("click", () => {
      const index = Number(b.getAttribute("index"));
      myLibrary.splice(index, 1);
      renderLibrary(table);
    })
  );
}

function setupReadCheckbox() {
  const checkboxes = document.querySelectorAll("input[index]");

  checkboxes.forEach((c) => {
    c.addEventListener("change", () => {
      const index = Number(c.getAttribute("index"));
      myLibrary[index].read = this.checked;
    });
  });
}

const table = document.querySelector("table");
setupNewBookModal(table);
renderLibrary(table);
