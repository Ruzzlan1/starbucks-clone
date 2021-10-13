"use strict";

const tab = document.querySelector(".tab");
const tabLinks = document.querySelectorAll(".tablinks");
const tabcontent = document.querySelectorAll(".tabcontent");

function switchTab(e) {
  console.log(tab);
  if (!e.target.classList.contains("tablinks")) return;

  console.log(e.target);
  // const tab = e.target.getAttribute("tabindex");
}
// tabcontent.forEach((tab) => (tab.style.opacity = 0));

// Event Delegation
tab.addEventListener("click", switchTab);
