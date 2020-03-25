"use strict";

const counterValue = document.querySelector("#value");
const decrementButton = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  '#counter button[data-action="increment"]'
);

let value = 0;

const decrement = () => {
  value -= 1;
  counterValue.textContent = value;
};

decrementButton.addEventListener("click", decrement);

const increment = () => {
  value += 1;
  counterValue.textContent = value;
};

incrementButton.addEventListener("click", increment);
