const accordians = document.querySelectorAll(".accordian");

for (let i = 0; i < accordians.length; i++) {
  accordians[i].addEventListener("click", function () {
    const accordian = accordians[i]; // htmlnode
    const content = accordian.querySelector(".content");
    content.classList.toggle("active");
  });
}
//CSS selectors
//htmlnode vs htmlnodelist
