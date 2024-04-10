let display = document.getElementById("countDisplay");
let increase = document.getElementById("increment");
let decrease = document.getElementById("decrement");
let reset = document.getElementById("reset");

let count = 0;

function updateDisplay() {
    display.textContent = count;
    if (display.textContent == 0){
        display.style= "color: blue" ;
    }else if(display.textContent < 0) {
        display.style= "color: red" ;
        
    } else {
        display.style= "color: green" ;
        
    }
}

increase.addEventListener("click", () => {
    count++;
    updateDisplay();
})

decrease.addEventListener("click", () => {
    count--;
    updateDisplay();
})

reset.addEventListener("click", () => {
    count = 0;
    updateDisplay();
})

updateDisplay();
