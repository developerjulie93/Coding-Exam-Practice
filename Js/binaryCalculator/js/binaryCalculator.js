
                
let res = document.getElementById("res");
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btns = document.getElementsByClassName("btns");

btns.onclick = function(){
    res.innerHTML = "click";
};
