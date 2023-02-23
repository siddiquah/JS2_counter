let num = document.getElementById("num");
let btnIncrease = document.getElementsByClassName("btnIncrease");
let btnDecrease = document.getElementsByClassName("btnDecrease");
let btnReset = document.getElementsByClassName("btnReset");

let count = 0;

function countIncrease() {
    count++;
    num.innerHTML = count;
    if(count > 0) {
        num.style.color = "green";
    }
    else if(count === 0) {
        num.style.color = "#333";
    }
};

function countDecrease() {
    count--;
    num.innerHTML = count;
    if(count < 0) {
        num.style.color = "red";
    }
};

function reset() {
    count = 0;
    num.innerHTML = count;
    num.style.color = "#333";
}