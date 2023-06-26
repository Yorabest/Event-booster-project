const modalEl = document.querySelector("#myModal");
const btnEl = document.querySelector("#myBtn");
const spanEl = document.querySelector(".close");
btnEl.onclick = function() {
  modalEl.style.display = "block";
}
spanEl.onclick = function() {
  modalEl.style.display = "none";
}
window.onclick = function(event) {
  if (event.target === modalEl) {
    modalEl.style.display = "none";
  }
}