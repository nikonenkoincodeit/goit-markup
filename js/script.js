const heroBtnRef = document.querySelector(".hero-btn");
const modalCloseRef = document.querySelector(".modal__close");
const wrapperModalRef = document.querySelector(".wrapper-modal");

function updateClassWrapper() {
  wrapperModalRef.classList.toggle("is-hidden");
}

heroBtnRef.addEventListener("click", updateClassWrapper);
modalCloseRef.addEventListener("click", updateClassWrapper);
console.log("1111111 :>> ", 1111111);
