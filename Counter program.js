// COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabe1 = document.getElementById("countLabe1");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabe1.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabe1.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabe1.textContent = count;
}

