"use strict";

const input = document.querySelector("#validation-input");
const length = input.getAttribute("data-length");

const validCheck = () => {
  if (input.value.length === Number(length)) {
    input.classList.add("valid");
  } else input.classList.add("invalid");
};

input.addEventListener("change", validCheck);
