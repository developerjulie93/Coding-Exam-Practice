const btn = document.getElementById('btn5');

let nums = [1, 2, 3, 6, 9, 8, 7, 4];
const ids = [1, 2, 3, 6, 9, 8, 7, 4];
btn.onclick = function(){
    nums.unshift(nums.pop());
    for(let i=0; i<ids.length; i++){
        document.getElementById('btn'+ids[i]).innerHTML = nums[i];
    }
}