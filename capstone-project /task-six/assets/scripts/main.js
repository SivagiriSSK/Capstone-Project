//user list stored in userList Array
const userList = [
  {
    name: "Satinder Singh",
    gender: "Male",
    city: "Bombay",
  },
  {
    name: "Leslie Mac",
    gender: "Female",
    city: "Queensland",
  },
  {
    name: "Andrea ely",
    gender: "Female",
    city: "Rio",
  },
  {
    name: "Amit Sarna",
    gender: "Male",
    city: "Navi Mumbai",
  },
  {
    name: "David Miller",
    gender: "Male",
    city: "Scouthe",
  },
];

//User information added to UserDetail
let userDetail = userList
  .map((e) => {
    return `
    <tr>
      <td>${e.name}</td>
      <td>${e.gender}</td>
      <td>${e.city}</td>
      <td>
        <button class="delete-button" onclick="handleDelete(this)">Delete</button></td>
    </tr>`;
  })
  .join("");

//User Details added to table
let tableBody = document.querySelector(".table-body");
tableBody.innerHTML = userDetail;

//handleDelete Functionality implementation
function handleDelete(removeRow) {
  removeRow.parentElement.parentElement.classList.add("transition-delete");
  setTimeout(() => {
    removeRow.parentElement.parentElement.remove();
  }, 1200);
}
