"use strict";

const input = document.querySelector("#name-input");
const text = document.querySelector("h1");
const span = document.querySelector("#name-output");

const placeName = event => {
  if (input.value === "") {
    span.textContent = "незнакомец";
  } else span.textContent = event.currentTarget.value;
};

input.addEventListener("input", placeName);
