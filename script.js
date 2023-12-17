function addList() {
  let input = document.getElementById("input").value;

  if (input == "") {
    alert("Add an item");
  } else {
    document.getElementById("input").value = "";

    let pTag = document.createElement("p");
    let task = document.createTextNode(input);
    let result = document.getElementById("result");

    pTag.appendChild(task);
    result.appendChild(pTag);

    console.log(pTag);
    console.log(task);
    console.log(result);

    /**** add delete button */
    let removeTag = document.createElement("span");
    let removeText = document.createTextNode("X");

    removeTag.appendChild(removeText);
    pTag.appendChild(removeTag);

    pTag.addEventListener("click", taskDone);

    function taskDone() {
      pTag.style.textDecoration = "line-through";
    }

    let remove = document.createAttribute("onclick");
    remove.value = "this.parentNode.remove();";
    removeTag.setAttribute("remove", remove);
  }
}

/*************** */
// btnAdd.onclick = function () {
//   let listItem = document.getElementById("listItem");
//   let ulList = document.getElementById("list");

//   let listVal = listItem.value;
//   if (listVal.trim() !== "") {
//     let liList = document.createElement("li");
//     let addItems = document.createTextNode(listVal);
//     liList.appendChild(addItems);
//     ulList.appendChild(liList);
//     listItem.value = "";
//   } else {
//     alert("Please enter a task!");
//   }
// };
