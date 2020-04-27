const buttonChangeColor = document.getElementById("changeColorDiv");
const body = document.querySelector("body");
const textParagraphs = document.querySelectorAll("div.topDiv");
let div = document.getElementById("bigTopMargin");
let newParagraph = document.createElement("h4");
const inputDelay = document.getElementById("inputDelay");
const inputRepetitions = document.getElementById("inputRepetitions");
newParagraph.className = "text-center mb-4 text-white";
div.insertBefore(newParagraph, div.firstElementChild);
newParagraph.textContent = "HEX COLOR of Background:";
inputDelay.value = 200;
inputRepetitions.value = 10;

function random256() {
    return Math.floor(Math.random() * 256);
}

function randomRGBNumbers() {
    return [random256(), random256(), random256()];
}

function randomRGB() {
    return "rgb(" + random256() + ", " + random256() + ", " + random256() + ")";
}

function randomRGBToHex(r,g,b) {
    document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }

buttonChangeColor.addEventListener('click', (e) => {
    div.style.marginTop = "50px";
    (function myLoop(i) {
        setTimeout(function() {
            let firstRandom = randomRGBToHex(random256(), random256(), random256());
            buttonChangeColor.style.backgroundColor = firstRandom;
            newParagraph.textContent = `HEX COLOR of Background: ${firstRandom}`;
            document.querySelector('body').style.color = "white";     
          if (--i) myLoop(i);   //  decrement i and call myLoop again if i > 0
        }, inputDelay.value)
      })(inputRepetitions.value);;
});