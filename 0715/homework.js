// const todos = document.querySelector("#todo-list");
// const deleteButton = document.querySelector(".delete");
// const button = document.querySelector(".submit");
// const todoInput = document.querySelector("#todo-input");
// let i = 0;

// button.addEventListener("click", onSubmit)
// deleteButton.addEventListener("click", onDelete)
// function onSubmit(e){

//     e.preventDefault();
//     const li = document.createElement("li");
//     li.appendChild(document.createTextNode(todoInput.value));
//     li.classList.add("item");
//     todos.appendChild(li);
//     todoInput.value= "";
//     i++
//     li.addEventListener('click', function(){ 
//         if(li.style.textDecoration==="line-through"){
//             li.style.textDecoration = "none";
//         }
//         else{
//         li.style.textDecoration='line-through';
//         }
//     });
// }
// function onDelete(e){
//     e.preventDefault();
//     todos.childNodes[i].remove();
//     if(i !==0)
//     {
//         i--;
//     }

// }
const todos = document.querySelector("#todo-list");
const deleteButton = document.querySelector(".delete");
const button = document.querySelector(".submit");
const todoInput = document.querySelector("#todo-input");
let i = 0;

button.addEventListener("click", onSubmit);
deleteButton.addEventListener("click", onDelete);

function onSubmit(e) {
  e.preventDefault();

  // li 요소 생성
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(todoInput.value));
  li.classList.add("item");

  // li 요소에 넣을 삭제 버튼 생성 생성 및 li 요소에 추가
  const delBtn = document.createElement("button");
  delBtn.classList.add("delete");
  delBtn.appendChild(document.createTextNode("삭제"));

  // li 요소를 특정해서 삭제해야 하므로 해당 요소에 onclick + this 요소 전달하여 자기 자신을 매개 변수로 전달
  delBtn.setAttribute("onclick", "deleteLi(this)");
  li.appendChild(delBtn);

  // todo list 에 li 요소 추가
  todos.appendChild(li);
  todoInput.value = "";

  // 추가된 li 개수 파악용 i
  i++;

  // li 요소 클릭 시 text-deco 변경
  li.addEventListener("click", function () {
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none";
    } else {
      li.style.textDecoration = "line-through";
    }
  });
}

// 삭제 기능
function onDelete(e) {
  e.preventDefault();
  todos.childNodes[i].remove();
  if (i !== 0) {
    i--;
  }
}

// 해당 리스트 삭제 기능
function deleteLi(t) {
  // li 요소가 전달한 this 요소는 btn 요소 이므로 해당 요소의 부모 요소인 li 요소를 삭제하도록 parentNode 로 접근하여 삭제
  t.parentNode.remove();
}

