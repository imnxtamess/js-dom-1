
// Add event listener click to the light-bulb img so that when it clicks it changes to the lit up one


const bulb = document.getElementById("bulb")

clickBtn.addEventListener("click", function () {
  if (bulb.src)
    bulb.src = "./assets/img/yellow_lamp.png"
})