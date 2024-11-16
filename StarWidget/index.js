// "fa fa-star"
// "fa fa-star-o"

const toggleStar = (starElement, state) => {

}

const getNewStarElement = (index, callback, el) => {
    const starElement = document.createElement("i");
  starElement.classList.add("fa");
  starElement.classList.add("fa-star-o");
  starElement.id = index;
  
  starElement.addEventListener("click", ()=>{
      callback(index + 1);
    // Update classes of starElements till index
    const containerElement = document.querySelector(el);
    
    console.log(containerElement.children.length)
    
    for(let i=0; i < containerElement.children.length; i++) {
      if(i <= index) {
          // enable class "fa fa-star"
        containerElement.children[i].classList.remove("fa-star");
        containerElement.children[i].classList.remove("fa-star-o");
        containerElement.children[i].classList.add("fa-star");
      } else {
                // disable class "fa fa-star-o"
        containerElement.children[i].classList.remove("fa-star");
        containerElement.children[i].classList.remove("fa-star-o");
        containerElement.children[i].classList.add("fa-star-o");
      }
    }
    
  });
  
  return starElement;
}

function Star(el, count, callback) {
    // Write a logic to create star rating problem
  const containerElement = document.querySelector(el);
  
  for(let i=0; i<count; i++) {
    const starElement = getNewStarElement(i, callback, el);
    containerElement.appendChild(starElement);
  }
  
}



function getStar(value){
  document.getElementById("display-star").innerHTML = value;
}

new Star("#star", 5, getStar);