
"use strict";

const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
span.style.fontSize = "26px";

const sizeChange = () => {
  span.style.fontSize = input.value + "px";
};

input.addEventListener("input", sizeChange);
