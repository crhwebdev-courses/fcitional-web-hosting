var buttons = document.querySelectorAll(".plan button");
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");

function openModal() {
  modal.classList.add("on");
  backdrop.classList.add("on");
}

function closeModal() {
  modal.classList.remove("on");
  backdrop.classList.remove("on");
}

buttons.forEach(function (el) {
  el.addEventListener("click", openModal);
});

var modalAction = document.querySelectorAll(".modal__action");

modalAction.forEach(function (el) {
  el.addEventListener("click", closeModal);
});

var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("expanded");
  closeModal();
});

toggleButton.addEventListener("click", function () {
  mobileNav.classList.toggle("expanded");
});
