
// Add event listener click to the light-bulb img so that when it clicks it changes to the lit up one and viceversa


const whiteBulb = document.getElementById("white-bulb")

clickBtn.addEventListener("click", function () {
  if (whiteBulb.src.includes("white"))
    whiteBulb.src = "./assets/img/yellow_lamp.png"
  else if (whiteBulb.src.includes("yellow"))
    whiteBulb.src = "./assets/img/white_lamp.png"
})

