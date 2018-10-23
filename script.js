var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button1 = document.querySelector(".button1");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

var random = function(){
	return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function randomize() {

	body.style.background =
	"linear-gradient(to right, "
	+ (color1.value = random())
	+ ", "
	+ (color2.value = random())
	+ ")";

	css.textContent = body.style.background + ";";

}

button1.addEventListener("click", randomize);

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);