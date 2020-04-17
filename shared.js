const buttons = document.querySelectorAll(".button");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");

function toggleModal() {
  modal.classList.toggle("on");
  backdrop.classList.toggle("on");
}

buttons.forEach((el) => {
  el.addEventListener("click", toggleModal);
});

const modalAction = document.querySelectorAll(".modal__action");

modalAction.forEach((el) => {
  el.addEventListener("click", toggleModal);
});
