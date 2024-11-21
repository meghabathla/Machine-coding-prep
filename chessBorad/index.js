function chess() {
  const chessboard = document.getElementById("chessboard");

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const square = document.createElement("div");
      square.classList.add("square");

      if ((i + j) % 2 === 0) {
        square.style.backgroundColor = "black";
      } else {
        square.style.backgroundColor = "white";
      }
      chessboard.appendChild(square);
    }
  }
}
chess();
