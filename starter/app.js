const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const text = input.value.trim();

  if (text === "") {
    alert("Skriv något först!");
    return;
  }

  const newItem = document.createElement("li");
  newItem.textContent = text;

  list.insertBefore(newItem, list.firstChild);

  input.value = "";
});