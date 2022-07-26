const snbMenu = document.querySelector("#snb .sub_menu");
const snbBtn = document.querySelector("#snb .btn_menu");
console.log(snbBtn);
snbBtn.addEventListener("click",function(){
    if(snbMenu.classList.contains("hide")){
        snbMenu.classList.remove("hide");
    }
    else{
        snbMenu.classList.add("hide");
    }
})