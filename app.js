// variables
const addBtn = document.querySelector("#addBtn");
const ul = document.querySelector("#list-item-group");

addBtn.addEventListener("click", addItem);

function addItem(e) {
  e.preventDefault();
  const inputValue = document.querySelector("#addInput").value;
  const li = document.createElement("li");
  li.className = "list-items";
  li.appendChild(document.createTextNode(inputValue));
  ul.appendChild(li);
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "ri-delete-bin-fill deleteBtn";
  li.appendChild(deleteBtn);
}

ul.addEventListener("click", removeItem);

function removeItem(e) {
  const li = e.target.parentElement;
  ul.removeChild(li);
}
