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
			square.style.backgroundColor = "blue";
		});
		square.style.backgroundColor = "black";

		display.insertAdjacentElement("beforeend", square);
	}
}
generateDisplay(16);
const rangeSlider = document.getElementById("myRange");
let range = 0;
let clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", () => {
	generateDisplay(16);
	console.log(range);
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

function sliderFunction(val) {
	document.getElementById("demo").innerHTML = val;
}
