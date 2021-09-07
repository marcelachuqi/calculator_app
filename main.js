"use strict";

const sum = document.querySelector(".sum");
const rest = document.querySelector(".rest");
const mult = document.querySelector(".mult");
const div = document.querySelector(".div");
const ok = document.querySelector(".ok");
const clear = document.querySelector(".clear");

let op;

sum.addEventListener("click", (event) => {
  event.preventDefault();
  op = "+";
});
rest.addEventListener("click", (event) => {
  event.preventDefault();
  op = "-";
});
mult.addEventListener("click", (event) => {
  event.preventDefault();
  op = "*";
});
div.addEventListener("click", (event) => {
  event.preventDefault();
  op = "/";
});

ok.addEventListener("click", (event) => {
  event.preventDefault();
  const n1 = parseInt(document.querySelector("#n1").value);
  const n2 = parseInt(document.querySelector("#n2").value);

  let r;
  if (op == "-") {
    r = n1 - n2;
  } else if (op == "+") {
    r = n1 + n2;
  } else if (op == "*") {
    r = n1 * n2;
  } else if (op == "/") {
    r = n1 / n2;
  }
  document.querySelector(".result").innerHTML += r;
});

function fun() {
  document.getElementById("form-js").reset();
}

clear.addEventListener("click", fun);
