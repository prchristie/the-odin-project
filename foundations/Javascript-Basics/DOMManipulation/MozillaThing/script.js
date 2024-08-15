const inputTextElement = document.querySelector("#add-item");
const addItemButtonElement = document.querySelector("#add-item-btn");
const shoppingList = document.querySelector(".shopping-list");

var shoppingListArray = [];

addItemButtonElement?.addEventListener("click", () => {
  if (inputTextElement && inputTextElement instanceof HTMLInputElement) {
    const item = inputTextElement.value;
    inputTextElement.value = "";
    addItemToShoppingList(item);
  }
});

function addItemToShoppingList(item) {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-button");
  deleteBtn.textContent = "Delete";
  const newListItem = document.createElement("li");
  newListItem.textContent = item;

  newListItem.appendChild(deleteBtn);

  shoppingList?.appendChild(newListItem);

  deleteBtn.addEventListener("click", () =>
    removeItemFromShoppingList(newListItem)
  );
}

function removeItemFromShoppingList(item) {
  shoppingList?.removeChild(item);
}
