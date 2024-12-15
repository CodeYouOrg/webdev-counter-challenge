"use strict";

let count = 0;

const countElement = document.querySelector(".count");
const incrementBtn = document.querySelector(".increment-btn");
const resetBtn = document.querySelector(".reset-btn");
const decrementBtn = document.querySelector(".decrement-btn");


function incrementCount() {
    ++ count; //increase count by 1
}


function decrementCount() {
    -- count; //decrease count by 1
}


function resetCount() {
    count = 0; //reset counter to 0
}

function renderUpdatedCount() {
    countElement.innerText = count;
}

incrementBtn.addEventListener("click", function () {
    ++ count;

    renderUpdatedCount();
});

resetBtn.addEventListener("click", function () {
    count = 0;
    
    renderUpdatedCount();
});

decrementBtn.addEventListener("click", function () {
    --count;

    renderUpdatedCount();
});
