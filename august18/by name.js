"use strict";

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let rates = document.getElementsByName("rate");
  console.log(rates);

  rates.forEach((rate) => {
    if (rate.checked) {
      alert(`rate: ${rate.value}`);
    }
  });
});
