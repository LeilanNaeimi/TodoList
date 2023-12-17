const btnAdd = document.querySelector(".btnAdd");

btnAdd.onclick = function () {
  // if (document.querySelector("form input").value.length == 0) {
  //   alert("Please Enter a Task");
  // } else {
  document.querySelector("#tasks").innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${document.querySelector("#form input").value}
              </span>
              <button class="delete">
                  <i class="far fa-trash-alt"></i>
              </button>
          </div>
      `;

  var current_tasks = document.querySelectorAll(".delete");
  for (var i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }
};

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
