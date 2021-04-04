const number = document.getElementById("number");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");

increase.addEventListener("click", () => {
    number.innerText = parseInt(number.innerText) + 1;
    if (number.innerText > 0) {
        number.style.color = "green";
    }
});

decrease.addEventListener("click", () => {
    number.innerText = parseInt(number.innerText) - 1;
    if (number.innerText < 0) {
        number.style.color = "red";
    }
});

reset.addEventListener("click", () => {
    number.innerText = 0;
    if (number.innerText == 0) {
        number.style.color = "black";
    }
});