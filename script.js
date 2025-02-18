
// Add event listener click to the light-bulb img so that when it clicks it changes to the lit up one


const whiteBulb = document.getElementById("white-bulb")

clickBtn.addEventListener("click", function () {
  whiteBulb.src = "./assets/img/yellow_lamp.png"
})