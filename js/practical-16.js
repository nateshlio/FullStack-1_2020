// SELECTORS

var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");
var warningg = document.querySelector(".warning");
// EVENT HANDLERS

todoButton.addEventListener("click", create);
todoList.addEventListener("click", checkDelete);

// FUNCTIONS

function create(e){
    
    // STOP FORM TO SUBMIT DATA
    
    e.preventDefault();

    if(todoInput.value.length === 0){
        warningg.classList.add("show");
    }
    else{
    
    warningg.classList.remove("show");
    var newDiv = document.createElement("div");
    
    //ASSIGNING CLASS TO DIV
    newDiv.classList.add("todo");

    // CREATE NEW LIST ITEM
    var newLi = document.createElement("li");
    newLi.classList.add("todo-item");
    newLi.innerHTML = todoInput.value;
    
    //ATTACH LI TO DIV
    newDiv.appendChild(newLi);

    // CREATE BUTTON
    var checkBtn = document.createElement("button");
    checkBtn.classList.add("check-btn");
    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    newDiv.appendChild(checkBtn);

    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
    newDiv.appendChild(deleteBtn);

    todoList.appendChild(newDiv);
    }
}

function checkDelete(e){
    var targetItem = e.target;
    if(targetItem.classList[0] === "delete-btn"){
        var parent = targetItem.parentNode;
        parent.remove();
    }
    if(targetItem.classList[0] === "check-btn"){
        var parent = targetItem.parentNode;
        parent.classList.toggle("completed");
    }
}