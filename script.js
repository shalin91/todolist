const btn = document.querySelector(".btn");
var input = document.querySelector(".input");
const container = document.querySelector(".container");

class item {
  constructor(itemName) {
    this.createDiv(itemName);
  }

  createDiv(itemName) {
    let input = document.createElement("input");
    input.value = itemName;
    input.disabled = true;
    input.classList.add("item-input");
    input.type = "text";

    let itemBox = document.createElement("div");
    itemBox.classList.add("item");

    let editbtn = document.createElement("button");
    editbtn.innerHTML = "Edit";
    editbtn.classList.add("editbtn");

    let removebtn = document.createElement("button");
    removebtn.innerHTML = "Remove";
    removebtn.classList.add("removebtn");

    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editbtn);
    itemBox.appendChild(removebtn);

    editbtn.addEventListener("click", () => this.edit(input));

    removebtn.addEventListener("click", () => this.remove(itemBox));
  }

  edit(input) {
    input.disabled = !input.disabled;
  }

  remove(item) {
    container.removeChild(item);
  }
}

function check() {
  if (input.Value != "") {
    new item(input.value);
    input.value = "";
  }
}

btn.addEventListener("click", check);
window.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    check();
  }
});
