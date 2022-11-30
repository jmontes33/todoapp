const inputArea = document.getElementById("inputArea");
const button = document.getElementById("addBtn");
const list  = document.querySelector("ul");
const item = document.getElementsByTagName("li");

function inputLength() {
    return inputArea.value.length;
}

function itemLength() {
    return item.length;
}

function createListElement() {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(inputArea.value));
    list.appendChild(li);
    inputArea.value = "";

    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteListItem);

    function deleteListItem() {
        li.classList.add("delete")
    }
}

function addListAfterClick() {
    if (inputLength > 0) {
        createElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

inputArea.addEventListener("keypress", addListAfterKeypress);