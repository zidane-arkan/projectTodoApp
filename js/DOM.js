//1.Menambahkan Input Kedalam Box Todo (Yang akan dilakukan)
const UNCOMPLETED_lIST_TODO_ID = "todos";
const COMPLETED_lIST_TODO_ID = "completed-todos";
let addTodo = function () {
    //Get Uncompleted Todos List
    let uncompletedTodoList = document.getElementById(UNCOMPLETED_lIST_TODO_ID);
    //Get Element From "Tambah Yang harus dilakukan" Input
    let titleInput = document.getElementById("title");
    let dateInput = document.getElementById("date");
    //Add Todo List to "Yang Harus Dilakukan" box
    let addTodosList = makeTodo(titleInput.value, dateInput.value, true);
    uncompletedTodoList.appendChild(addTodosList);
};

//Make Todo List Function
let makeTodo = function (titleInput, dateInput, checkTodo) {
    //Create Title Element
    let textTitle = document.createElement("h2");
    textTitle.innerText = `${titleInput}`;
    //Create Date Element
    let textDate = document.createElement("p");
    textDate.innerText = `${dateInput}`;
    //Add title and date element to inner class
    let innerDiv = document.createElement("div");
    innerDiv.classList.add("inner");
    innerDiv.append(textTitle, textDate);

    let itemDiv = document.createElement("div");
    itemDiv.classList.add("item", "shadow");
    itemDiv.appendChild(innerDiv);
    //Create Button & Add Button 
    if (checkTodo === true) {
        let checkButton = createButton("check-button", addFinishList);
        itemDiv.append(checkButton);
    } else {
        let trashButton = createButton("trash-button", removeList);
        let undoButton = createButton("undo-button", undoList);
        itemDiv.append(undoButton, trashButton);
    }
    return itemDiv;
};
//Make Create Button Function
let createButton = function (buttonType, eventFunction) {
    let button = document.createElement("button");
    button.classList.add(buttonType);
    button.addEventListener("click", function (event) {
        eventFunction(event.target.parentElement);
    });
    return button;
};
//Add "To Finish List" Function
let addFinishList = function (parentList) {
    //Get Completed Todos List 
    let finishBox = document.getElementById(COMPLETED_lIST_TODO_ID);
    //Get Text Title From make Todo Box
    let textTitle = document.getElementById("title").value;
    //Get Date Text From Todo Box 
    let dateText = document.getElementById("date").value;
    //Create Make Todo
    let finishTodo = makeTodo(textTitle, dateText, false);
    //Add todo box to finish Box List
    finishBox.appendChild(finishTodo);
    //Remove Element From Todo Box
    parentList.remove();
};
//Add Remove Function
let removeList = function (parentName) {
    parentName.remove();
};
//Add Undo Function 
let undoList = function (parentName) {
    //Get Uncompleted Todos List
    let uncompletedTodoList = document.getElementById(UNCOMPLETED_lIST_TODO_ID);
    //Get Text Title From make Todo Box
    let textTitle = document.getElementById("title").value;
    //Get Date Text From Todo Box 
    let dateText = document.getElementById("date").value;
    //Add Back To Todo List 
    let undoTodo = makeTodo(textTitle, dateText, true);
    uncompletedTodoList.appendChild(undoTodo);
    //Remove Element From Finish TodoList
    removeList(parentName);
};
