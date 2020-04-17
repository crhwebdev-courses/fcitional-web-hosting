var buttons = document.querySelectorAll(".plan button");
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");

function toggleModal() {
  modal.classList.toggle("on");
  backdrop.classList.toggle("on");
}

buttons.forEach(function (el) {
  el.addEventListener("click", toggleModal);
});

var modalAction = document.querySelectorAll(".modal__action");

modalAction.forEach(function (el) {
  el.addEventListener("click", toggleModal);
});
