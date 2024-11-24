// "fa fa-star"
// "fa fa-star-o"
let state = true;
const toggleStar = (starElement, el, index) => {
  if (state) {
    console.log("mouse", state);
    starElement.addEventListener("mouseover", () => {
      const containerElement = document.querySelector(el);
      for (let i = 0; i < containerElement.children.length; i++) {
        if (i <= index) {
          containerElement.children[i].classList.remove("fa-star");
          containerElement.children[i].classList.remove("fa-star-o");
          containerElement.children[i].classList.add("fa-star"); // to add filled star
        } else {
          // disable class "fa fa-star-o"
          containerElement.children[i].classList.remove("fa-star");
          containerElement.children[i].classList.remove("fa-star-o");
          containerElement.children[i].classList.add("fa-star-o"); // to empty star
        }
      }
    });
    starElement.addEventListener("mouseout", () => {
      const containerElement = document.querySelector(el);
      for (let i = 0; i < containerElement.children.length; i++) {
        containerElement.children[i].classList.remove("fa-star");
        containerElement.children[i].classList.remove("fa-star-o");
        containerElement.children[i].classList.add("fa-star-o");
      }
    });
  }
};

const getNewStarElement = (index, callback, el) => {
  const starElement = document.createElement("i");
  starElement.classList.add("fa");
  starElement.classList.add("fa-star-o");
  starElement.id = index;

  toggleStar(starElement, el, index);

  starElement.addEventListener("click", () => {
    state = false;
    console.log("click", state);
    callback(index + 1);
    // Update classes of starElements till index
    const containerElement = document.querySelector(el);

    for (let i = 0; i < containerElement.children.length; i++) {
      if (i <= index) {
        // enable class "fa fa-star"

        containerElement.children[i].classList.remove("fa-star");
        containerElement.children[i].classList.remove("fa-star-o");
        containerElement.children[i].classList.add("fa-star"); // to add filled star
      } else {
        // disable class "fa fa-star-o"
        containerElement.children[i].classList.remove("fa-star");
        containerElement.children[i].classList.remove("fa-star-o");
        containerElement.children[i].classList.add("fa-star-o"); // to empty star
      }
    }
  });

  return starElement;
};

function Star(element, count, callback) {
  // Write a logic to create star rating problem
  const containerElement = document.querySelector(element); //get the starID div
  // console.log(containerElement); //div having star id
  for (let i = 0; i < count; i++) {
    const starElement = getNewStarElement(i, callback, element);
    containerElement.appendChild(starElement);
  }
}

function getStar(value) {
  document.getElementById("display-star").innerHTML = value;
}

new Star("#star", 5, getStar);
