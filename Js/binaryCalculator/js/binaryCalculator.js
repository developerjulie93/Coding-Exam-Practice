let res = document.getElementById("res");
let str = '';
let arrNum = [];
let opr = null;

function action(e){
    let btn = e.target;
    let btnId = document.getElementById(btn.id);
    
    if((btnId==btnSum)||(btnId==btnSub)||(btnId==btnMul)||(btnId== btnDiv)){
        opr = btnId;
        arrNum.push(parseInt(str,2));
        str = '';
    }
    else{
        str += btnId.innerHTML;
    }
    
    res.innerHTML += btnId.innerHTML;
    if(btnId == btnEql){
        arrNum.push(parseInt(str,2));
        res.innerHTML = calculator(arrNum, opr);
        str = '';
    }
};

function calculator(arr,opr){
    let result = 0;
    if(opr == btnSum){
      for(let elmn of arr){
        result += elmn;
     }
    }
    else if(opr == btnMul){
      result = 1;
      for(let elmn of arr){
        result *= elmn;
     }
    }
    else if(opr == btnSub){
       result = arr[0]-arr[1];
    }
    else if(opr == btnDiv){
       result = Math.floor((arr[0])/(arr[1]));
    }
    else{
        res.innerHTML = "Error";
    }
    return result.toString(2);
};

document.getElementById("btn0").onclick = action;
document.getElementById("btn1").onclick = action;
document.getElementById("btnSum").onclick = action;
document.getElementById("btnSub").onclick = action;
document.getElementById("btnMul").onclick = action;
document.getElementById("btnDiv").onclick = action;
document.getElementById("btnEql").onclick = action;

document.getElementById("btnClr").onclick = function(){
    res.innerHTML = null;
    str = '';
    arrNum = [];
    
};

