let toDoInfo = document.querySelector("input[type=text]");
let addList = document.querySelector("input[type=submit]");
let listSection = document.querySelector(".list__section ul");

addList.addEventListener("click", (e) => {
  e.preventDefault();
  if (toDoInfo.value === "") {
    toDoInfo.setAttribute("style", " border : 2px solid red");
    return;
  }
  toDoInfo.setAttribute("style", "border : 2px solid #0004ff");
  let listItem = document.createElement("li");
  let listItemContent = document.createElement("p");
  let listEditIcon = document.createElement("i");
  listEditIcon.classList.add("fa-solid", "fa-pen");
  let listDeleteIcon = document.createElement("i");
  listDeleteIcon.classList.add("fa-solid", "fa-trash-alt");
  listItemContent.textContent += toDoInfo.value;
  listSection.prepend(listItem);
  listItem.appendChild(listEditIcon);
  listItem.appendChild(listItemContent);
  listItem.appendChild(listDeleteIcon);

  listEditIcon.addEventListener("click", () => {
    let editValue = prompt("You list edit !", `${listItemContent.innerText}`);
    listItemContent.innerText = editValue;
  });

  listDeleteIcon.addEventListener("click", () => {
    listSection.removeChild(listItem);
  });

  listItem.addEventListener("click", e => {
    if (e.target !== (listEditIcon || listDeleteIcon)) {
      listItem.classList.add("list__item--active");
      listItemContent.style.textDecoration = "line-through";
      listItem.removeChild(listEditIcon);
      listItem.removeChild(listDeleteIcon);
      const checkIcon = document.createElement("i");
      checkIcon.classList.add("fa-solid", "fa-check");
      listItem.prepend(checkIcon);
    } 
  });

  toDoInfo.value = "";
});
