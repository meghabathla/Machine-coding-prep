function convertor() {
  const celcius = document.getElementById("cel");
  const Farenheit = document.getElementById("feh");
  console.log(celcius);

  celcius.addEventListener("input", (e) => {
    console.log(e.target.value);
    cel = e.target.value;
    if (cel) {
      Farenheit.value = ((cel * 9) / 5 + 32).toFixed(2);
    }
  });
  Farenheit.addEventListener("input", (e) => {
    console.log(e.target.value);
    feh = e.target.value;
    if (feh) {
      celcius.value = (((feh - 32) * 5) / 9).toFixed(2);
    }
  });
}
convertor();
