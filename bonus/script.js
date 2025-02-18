
// Add event listener click to the light-bulb img so that when it clicks it changes to the lit up one and viceversa


const bulb = document.getElementById("bulb")

clickBtn.addEventListener("click", function () {
  if (bulb.src.includes("white")) {
    bulb.src = "./assets/img/yellow_lamp.png"
    clickBtn.innerText = 'Spegni'
  }
  else if (bulb.src.includes("yellow")) {
    bulb.src = "./assets/img/white_lamp.png"
    clickBtn.innerText = 'Accendi'
  }
})

console.log(clickBtn.innerText);
