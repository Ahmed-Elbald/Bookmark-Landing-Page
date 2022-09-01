
// Getting elements from the document
const mainHeader = document.querySelector(".main-header");
const navOpenBtn = document.querySelector(".nav-mobile-open-btn");
const navCloseBtn = document.querySelector(".nav-mobile__close-btn");

const sliderBtns = document.querySelectorAll(".slider-btns .slider-btn");
const featuresContainer = document.querySelector(".features");
const features = featuresContainer.querySelectorAll(".feature");

const questions = document.querySelectorAll(".questions .question");

const form = document.querySelector(".section--cta .section__form");
const emailInputContainer = form.querySelector(".input-container");
const emailInput = emailInputContainer.querySelector("#email-input");


// Controling the mobile nav
navOpenBtn.addEventListener("click", () => {

  mainHeader.classList.add("js-nav-opened");
  navOpenBtn.setAttribute("aria-expanded", "true");
  navCloseBtn.setAttribute("aria-expanded", "true");

});

navCloseBtn.addEventListener("click", () => {

  mainHeader.classList.remove("js-nav-opened");
  navOpenBtn.setAttribute("aria-expanded", "false");
  navCloseBtn.setAttribute("aria-expanded", "false");

});

// Controling the slider
sliderBtns.forEach(btn => {

  btn.addEventListener("click", (e) => {

    let btnOrder = e.target.dataset.id;
    featuresContainer.style.transform = `translateX(-${(btnOrder - 1) * 100}%)`;
    addActive(features, btnOrder);
    addActive(sliderBtns, btnOrder);

  });

});


function addActive(elements, target) {

  for (let element of elements) {
    element.classList.remove("js-active");
    if (element.dataset.id == target) {
      element.classList.add("js-active");
    }
  }

};

// Controling the questions
questions.forEach(question => {

  let questionHeader = question.querySelector(".question__header");
  questionHeader.addEventListener("click", () => {

    question.classList.toggle("js-expanded");
    let expandBtn = questionHeader.querySelector(".question__expand-btn");
    let btnCurrentState = expandBtn.getAttribute("aria-expanded");
    if (btnCurrentState == "true") expandBtn.setAttribute("aria-expanded", "false");
    else expandBtn.setAttribute("aria-expanded", "true");

  });

});

// Controling the form
form.addEventListener("submit", (e) => validateInput(e));
emailInput.addEventListener("focusout", () => validateInput());
emailInput.addEventListener("input", () => validateInput(null, true));
const regExp = /[a-z0-9]{8,}@.+\..+/;

function validateInput(e, typing) {

  let inputValue = emailInput.value;
  if (regExp.test(inputValue)) {
    emailInputContainer.classList.remove("js-invalid");
  } else {
    if (!typing) {
      emailInputContainer.classList.add("js-invalid");
      if (e) e.preventDefault();
    }
  }

}