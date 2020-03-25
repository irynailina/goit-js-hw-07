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

const productToLi = array =>
  array.forEach(item => {
    const newLi = document.createElement("li");
    newLi.textContent = item;
    return list.appendChild(newLi);
  });

productToLi(ingredients);
