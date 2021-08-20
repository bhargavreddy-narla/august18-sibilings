"use strict";

console.log("previous sibilings");

let active = document.querySelector("#active");
let previousSibiling = active.previousElementSibling;
console.log(previousSibiling);

while (previousSibiling) {
  console.log(previousSibiling);
  previousSibiling = previousSibiling.previousElementSibling;
}
/*
let active1 = document.querySelector("#active");
let previousSibiling1 = previousSibiling.previousElementSibling;
console.log(previousSibiling1);

let active2 = document.querySelector("#active");
let previousSibiling2 = previousSibiling1.previousElementSibling;
console.log(previousSibiling2);

let active3 = document.querySelector("#active");
let previousSibiling3 = previousSibiling2.previousElementSibling;
console.log(previousSibiling3);

let active4 = document.querySelector("#active");
let previousSibiling4 = previousSibiling3.previousElementSibling;
console.log(previousSibiling4);

let active5 = document.querySelector("#active");
let previousSibiling5 = previousSibiling4.previousElementSibling;
console.log(previousSibiling5);

let active6 = document.querySelector("#active");
let previousSibiling6 = previousSibiling5.previousElementSibling;
console.log(previousSibiling6);*/
