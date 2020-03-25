"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const list = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();


for (const ingredient of ingredients) {
  const newLi = document.createElement('li');
  newLi.innerText = ingredient;
  fragment.appendChild(newLi)
}

list.appendChild(fragment)

