const accordian = document.querySelector("accordian");
const title = document.querySelector("title");
const content = document.querySelector("content");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", () => {
    this.classList.toggle("active");
  });
}
