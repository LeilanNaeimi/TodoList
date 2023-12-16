function addToList() {
  let listItem = document.querySelector(".listItem");
  console.log(listItem);

  let listVal = listItem.value;

  console.log(listItem, listVal);

  if (listVal.trim() !== "") {
    let li = document.createElement("li");
    console.log(li);
    li.appendChild(document.createTextNode(listVal));
    document.getElementById("list").appendChild(li);
    listItem.value = "";
  } else {
    alert("Please enter a task!");
  }
}
