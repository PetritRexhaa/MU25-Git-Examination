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

 const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const button = document.createElement("button");
  button.textContent = "Klar";
  button.style.marginLeft = "10px";

  button.addEventListener("click", function () {
    if (span.style.textDecoration === "line-through") {
      span.style.textDecoration = "none";
      span.style.opacity = "1";
      button.textContent = "Klar";
    } else {
      span.style.textDecoration = "line-through";
      span.style.opacity = "0.6";
      button.textContent = "Oklart";
    }
  });

  li.appendChild(span);
  li.appendChild(button);

  list.insertBefore(li, list.firstChild);

  input.value = "";
  input.focus();
});