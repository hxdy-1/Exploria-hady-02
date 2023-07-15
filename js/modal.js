"use strict";

const modalEl = document.querySelector(".modal_container");
const modalDropShadowEl = document.querySelector(".modal_drop_shadow");
const xMarkEl = document.querySelector(".cross");
const scheduleBtn = document.querySelector(".schedule_btn");

const toggelModalVisibility = () => {
    modalEl.classList.toggle("hidden");
    modalDropShadowEl.classList.toggle("hidden");
    console.log("modal got opened or closed");
};

scheduleBtn.addEventListener("click", toggelModalVisibility);

modalDropShadowEl.addEventListener("click", toggelModalVisibility);

// xMarkEl.addEventListener("click", () => {
//     // modalEl.classList.remove("hidden");
//     // modalDropShadowEl.classList.remove("hidden");

//     console.log("modal cross");
// });

// document.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") {
//         toggelModalVisibility();
//     }
// });
