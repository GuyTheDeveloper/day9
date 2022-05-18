export default function newUser(name, surname, group, gender) {
  let tr = document.createElement("tr");

  let tdName = document.createElement("td");
  tdName.textContent = name;
  tr.append(tdName);

  let tdSurname = document.createElement("td");
  tdSurname.textContent = surname;
  tr.append(tdSurname);

  let tdGroup = document.createElement("td");
  tdGroup.textContent = group;
  tr.append(tdGroup);

  let tdGender = document.createElement("td");
  tdGender.textContent = gender;
  tr.append(tdGender);
  return tr;
}
