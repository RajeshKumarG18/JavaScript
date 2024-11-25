// COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel1 = document.getElementById("countLabel1");
const countLabel2 = document.getElementById("countLabel2");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel1.textContent = count;
    countLabel2.textContent = count - 10;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel1.textContent = count;
    countLabel2.textContent = count -10;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel1.textContent = count;
    countLabel2.textContent = count -10;
}

