const accordians = document.querySelectorAll(".accordian");
const title = document.querySelector(".title");
const content = document.querySelector(".content");

for (let i = 0; i < accordians.length; i++) {
  accordians[i].addEventListener("click", function () {
    this.classList.toggle("active");
    console.log(accordians[i]);
  });
}
