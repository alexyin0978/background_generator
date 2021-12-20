var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//set color gradient
color1.addEventListener("input",inputColor);
color2.addEventListener("input",inputColor);

function inputColor(){
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	//print background info
	var cssInfo = document.querySelector("h3");
	cssInfo.textContent = body.style.background + ";";
	//放function裡才能透過event來帶動textContent變化
};



