// const date = document.querySelector("#date");
// const content = document.querySelector("#content");
// const table = document.querySelector("table");
// const td = document.querySelector("td");


// table.addEventListener("click",function(e){
//     if(e.target.tagName === "P")
//     date.value = e.target.textContent;
// })
// function writeSchedule(){
//     const div = document.createElement("div");
//     td.append(div);
//     td.textContent = content.value;
    
// }
const date = document.querySelector("#date");
const content = document.querySelector("#content");
const dataValue = document.querySelector("table");
const btn = document.querySelector("button");

let td = null;
dataValue.addEventListener("click",function(e){
    content.value="";
    if(e.target.tagName === "P"){
    date.value = e.target.textContent;
    td = e.target.parentNode;
    content.value =td.childNodes[1].textContent;
    }
    
    if(e.target.tagName ==="DIV"){
        td.childNodes[1].remove();
    }
    
    
})
function writeSchedule(){
    const div = document.createElement("div");
    div.textContent = content.value;
    td.append(div);
    content.value = ""
}
