const title = document.querySelector("#title");
const comments = document.querySelector("#comments");
const save = document.querySelector("#save");
const todoList = document.querySelector("#todoList");

save.addEventListener("click", (e) => {

    e.preventDefault();

    const item = document.createElement("li");
    item.innerHTML = `${title.value} - ${comments.value} <span class = "delButton">Delete</span>`;
    todoList.appendChild(item);

    title.value = "";
    comments.value = "";

    const delButtons = document.querySelectorAll(".delButton");
    const body = document.querySelector("body");

    for (let delButton of delButtons) {
        delButton.addEventListener("click", function() {
            this.parentNode.remove(this.parentNode);
        });
        delButton.addEventListener("mouseover", (e) => {
            
            delButton.style.fontSize = "50px";
            delButton.innerText = "really?";
            body.style.backgroundColor = "grey";

            delButton.addEventListener("mouseout", (e) => {
                delButton.innerText = "did you finished???"
                delButton.style.color = "red";
                body.style.backgroundColor = "black";
            });
        });
    }



});