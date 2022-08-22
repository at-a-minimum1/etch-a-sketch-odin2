let range = 0;

function generateDisplay(size) {
	let display = document.querySelector(".display");
	display.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	display.style.gridTemplateRows = `repeat(${size}, 1fr)`;
	let squares = display.querySelectorAll("div");
	squares.forEach((div) => div.remove());
	let canvasSize = size * size;
	for (let i = 0; i < canvasSize; i++) {
		let square = document.createElement("div");

		square.addEventListener("mouseover", () => {
			square.style.backgroundColor = "black";
		});
		square.style.backgroundColor = "lightgrey";

		display.insertAdjacentElement("beforeend", square);
	}
}
generateDisplay(16);
// const rangeSlider = document.getElementsByClassName("form-slider");
// const range = rangeSlider.value;
let clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", () => {
	generateDisplay(range);
});
let colorBtn = document.querySelector(".colorBtn");
colorBtn.addEventListener("click", () => {
	console.log("This works");
});
let eraserBtn = document.querySelector(".eraserBtn");
eraserBtn.addEventListener("click", () => {
	console.log("This works");
});

function chooseColor(color) {}

function sliderFunction(slideNum) {
	document.getElementById("demo").innerHTML = slideNum;
	range = slideNum;
	generateDisplay(slideNum);
}

//TODO Figure out how to grab values from html and put them into javascript and vice versa
