import userCreator from "./UserObjCreator.js";
import newUser from "./userCreator.js";

let form = document.querySelector(".form");
let nameInp = document.getElementById("name");
let surnameInp = document.getElementById("surname");
let groupInp = document.getElementById("group");
let genderSelect = document.getElementById("gender");
let mainTable = document.getElementById("table");
let storage = window.localStorage;
let getStorage = storage.getItem("users");
let data;

if (getStorage) {
  data = JSON.parse(getStorage);
} else {
  data = [];
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let newUserObj = new userCreator(
    nameInp.value,
    surnameInp.value,
    groupInp.value,
    genderSelect.value
  );

  data.push(newUserObj);
  storage.setItem("users", JSON.stringify(data));

  let userNew = newUser(
    newUserObj.name,
    newUserObj.surname,
    newUserObj.group,
    newUserObj.gender
  );
  mainTable.append(userNew);

  nameInp.value = "";
  surnameInp.value = "";
  groupInp.value = "";
});

data.forEach((user) => {
  let userNew = newUser(user.name, user.surname, user.group, user.gender);

  mainTable.append(userNew);
});
