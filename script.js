let addBtn = document.getElementById("submit");

addBtn.addEventListener("click", addList);

function addList() {
  let input = document.getElementById("input").value;
  console.log(input);
  if (input == "") {
    alert("Add an item");
  } else {
    document.getElementById("input").value = "";

    let li = document.createElement("li");
    let task = document.createTextNode(input);
    let result = document.getElementById("result");

    li.appendChild(task);
    result.appendChild(li);

    // Save to-do list item to local storage
    saveToLocalStorage(input);

    // add delete button
    let removeTag = document.createElement("span");
    let removeText = document.createTextNode("X");

    removeTag.appendChild(removeText);
    li.appendChild(removeTag);

    li.addEventListener("click", taskDone);

    function taskDone() {
      li.remove();
      // Remove the task from local storage when deleted
      removeFromLocalStorage(input);
    }
  }
}

// Function to save a task to local storage
function saveToLocalStorage(task) {
  let items = localStorage.getItem("myList");
  console.log(items);
  if (items === null) {
    items = [];
  } else {
    items = JSON.parse(items);
  }

  items.push(task);
  localStorage.setItem("myList", JSON.stringify(items));
}

// Function to save a task to local storage
function removeFromLocalStorage(task) {
  items = JSON.parse(items);
  console.log(`remove: ${items}`);
}

//// init
let items = localStorage.getItem("myList");
let result = document.getElementById("result");

console.log(items);

items = JSON.parse(items);
for (let i = 0; i < items.length; i++) {
  let li = document.createElement("li");
  let task = document.createTextNode(items[i]);
  li.appendChild(task);
  result.appendChild(li);
}
