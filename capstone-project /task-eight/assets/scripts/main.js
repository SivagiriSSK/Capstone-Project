// fruits array initialization
let fruits = [];
let tableItem = document.getElementById("tableItem");
let tableBody = document.getElementById("tableBody");
let count = 0;
tableItem.style.border = "none";

// handleCreateInputFiled function implementation
function handleCreateInputFiled() {
  let userInputField = `
  <tr>
    <td>
      <input class="user-input" type="text">
    <td>
  <tr>`;
  tableBody.innerHTML += userInputField;
  tableItem.style.border = "2px dotted black";
  count += 1;
}

// handleSubmit function implementation
function handleSubmit() {
  let userInput = document.querySelectorAll(".user-input");
  fruits = [];
  for (var i = 0; i < count; i++) {
    fruits.push(userInput[i].value);
  }
  displayAll();
}

// insertValue function implementation
function insertValue() {
  let userEnteredFruit = fruits
    .map((e) => {
      return `
      <tr>
        <td>
          <input class="user-input" value=${e} >
        <td>
      <tr>`;
    })
    .join("");
  tableBody.innerHTML = userEnteredFruit;
}

// displayAll function implementation
function displayAll() {
  let displayFruit = fruits
    .map((e) => {
      return `<div>${e}</div>`;
    })
    .join("");
  document.querySelector(".selected-value").innerHTML = displayFruit;
}

// handleRemoveElement function implementation
function handleRemoveElement() {
  fruits.pop();
  displayAll();
  insertValue();
  count = fruits.length;
  if (fruits.length == 0) {
    tableItem.style.border = "none";
  }
}

// handleRemoveAllElement function implementation
function handleRemoveAllElement() {
  fruits = [];
  displayAll();
  insertValue();
  tableItem.style.border = "none";
}

// handleUppercase function implementation
function handleUpperCase() {
  let userEnteredFruit = fruits
    .map((e) => {
      return `<div>${e.toUpperCase()}</div>`;
    })
    .join("");
  document.querySelector(".selected-value").innerHTML = userEnteredFruit;
}

// handleLowercase function implementation
function handleLowerCase() {
  let userEnteredFruit = fruits
    .map((e) => {
      return `<div>${e.toLowerCase()}</div>`;
    })
    .join("");
  document.querySelector(".selected-value").innerHTML = userEnteredFruit;
}
