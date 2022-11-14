function changeProgress() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #24809e 0%, #24809e ${value}%, #fff ${value}%, #fff 100%)`;
}

const scrollBars = document.querySelectorAll(".scroll-bar");

scrollBars.forEach((scrollBar) => {
  scrollBar.addEventListener("input", changeProgress);
});
