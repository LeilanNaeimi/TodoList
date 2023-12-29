function addList() {
  // let task = { list: "list1" };
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

    // console.log(pTag);

    /// localstorage
    // const listJson = JSON.stringify(task);
    // localStorage.setItem("myList", listJson);
    // const items = localStorage.getItem("myList");
    // const final = JSON.parse(items);
    // console.log(`my items:${final} ,task is: ${task}`);

    /**** add delete button */
    let removeTag = document.createElement("span");
    let removeText = document.createTextNode("X");

    removeTag.appendChild(removeText);
    pTag.appendChild(removeTag);

    pTag.addEventListener("click", taskDone);

    function taskDone() {
      pTag.remove();
    }
  }
}
