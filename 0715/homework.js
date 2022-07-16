const todos = document.querySelector("#todo-list");
const deleteButton = document.querySelector(".delete");
const button = document.querySelector(".submit");
const todoInput = document.querySelector("#todo-input");
let i = 0;

button.addEventListener("click", onSubmit)
deleteButton.addEventListener("click", onDelete)
function onSubmit(e){

    e.preventDefault();
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(todoInput.value));
    li.classList.add("item");
    todos.appendChild(li);
    todoInput.value= "";
    i++
    li.addEventListener('click', function(){ 
        if(li.style.textDecoration==="line-through"){
            li.style.textDecoration = "none";
        }
        else{
        li.style.textDecoration='line-through';
        }
    });
}
function onDelete(e){
    e.preventDefault();
    todos.childNodes[i].remove();
    if(i !==0)
    {
        i--;
    }

}


