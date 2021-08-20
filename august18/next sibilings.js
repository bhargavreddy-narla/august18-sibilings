"use strict";

console.log("Next sibilings");

let current = document.querySelector(".current");
let nextSibiling = current.nextElementSibling;
console.log(nextSibiling);

while (nextSibiling) {
  console.log(nextSibiling);
  nextSibiling = nextSibiling.nextElementSibling;
}
/*
let current1 = document.querySelector(".current");
let nextSibiling1 = nextSibiling.nextElementSibling;
console.log(nextSibiling1);

let current2 = document.querySelector(".current");
let nextSibiling2 = nextSibiling1.nextElementSibling;
console.log(nextSibiling2);

let current3 = document.querySelector(".current");
let nextSibiling3 = nextSibiling2.nextElementSibling;
console.log(nextSibiling3);

let current4 = document.querySelector(".current");
let nextSibiling4 = nextSibiling3.nextElementSibling;
console.log(nextSibiling4);

let current5 = document.querySelector(".current");
let nextSibiling5 = nextSibiling4.nextElementSibling;
console.log(nextSibiling5);

let current6 = document.querySelector(".current");
let nextSibiling6 = nextSibiling5.nextElementSibling;
console.log(nextSibiling6);*/
