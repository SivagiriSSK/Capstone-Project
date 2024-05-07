//user form starts here
let users = [
  {
    email: "paresh@gmail.com",
    name: "Paresh",
  },
  {
    email: "hardik@gmail.com",
    name: "Hardik",
  },
];
document.getElementById("submitButton").disabled = true;

// user table loaded here
function userTable() {
  // user input value dynamically added to table
  let tableRow = users
    .map((e, index) => {
      return `
      <tr>
        <td> ${e.name}</td>
        <td>${e.email}</td>
        <td> 
          <button type="button" class="edit-button" onclick="handleEdit(${index})"> Edit </button>
          <button type="button" class="delete-button" onclick="handleDelete(${index})"> Delete </button>
        </td>
      </tr>`;
    })
    .join("");
  // user input values dynamically insert to table row
  document.querySelector(".table-body").innerHTML = tableRow;
}
userTable();

// delete button functionality added here
function handleDelete(index) {
  // user clicked row deleted here
  users.splice(index, 1);
  userTable();
}

// edit functionality added here
var updateData = null;
var editIndex;
function handleEdit(index) {
  var nameInput = document.getElementById("nameInput");
  var emailInput = document.getElementById("emailInput");
  nameInput.value = users[index].name;
  emailInput.value = users[index].email;
  editIndex = index;
  let deleteButton = document.querySelectorAll(".delete-button")[index];
  deleteButton.disabled = true;
  deleteButton.style.backgroundColor = "#e636599e";
  document.getElementById("submitButton").disabled = false;
}

// save button functionality
function handleSaveForm() {
  // user input stored here
  var nameInput = document.getElementById("nameInput");
  var emailInput = document.getElementById("emailInput");

  if ((nameInput.value && emailInput.value) !== "") {
    // values added to array
    users[editIndex].name = nameInput.value;
    users[editIndex].email = emailInput.value;
    userTable();
    nameInput.value = "";
    emailInput.value = "";
  }
}

// update functionality
function handleUpdateForm(index) {
  // user modified value stored here
  var newNameInput = document.getElementById("newNameInput");
  var newEmailInput = document.getElementById("newEmailInput");

  // modified value added to users array
  users[index] = {
    email: newEmailInput.value,
    name: newNameInput.value,
  };

  //sets the input field plain
  newNameInput.value = "";
  newEmailInput.value = "";
  userTable();
  document.getElementById("userForm").innerHTML = userForm;
}
//update functionality ends
