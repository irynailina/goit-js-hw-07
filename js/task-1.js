"use strict";

const list = document.querySelector("#categories");
const categories = list.children.length;

console.log(`В списке ${categories} категории`);

const title = document.querySelectorAll(".item");

const getElementsInside = title.forEach(item =>
  console.log(
    `Категория: ${item.children[0].innerText}
Колличество элементов: ${item.children[1].children.length}`
  )
);
