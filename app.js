let range = 16;
let color = "black";
let eraserState = false;

function generateDisplay(size) {
	let display = document.querySelector(".display");
	display.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	display.style.gridTemplateRows = `repeat(${size}, 1fr)`;
	let squares = display.querySelectorAll("div");
	squares.forEach((div) => div.remove());
	let canvasSize = size * size;
	document.getElementById("demo").innerHTML = `${size} x ${size}`;

	for (let i = 0; i < canvasSize; i++) {
		let square = document.createElement("div");

		square.addEventListener("mouseover", () => {
			if (eraserState) {
				color = "#6A7F84";
			} else {
				color = "black";
			}
			square.style.backgroundColor = color;
		});
		square.style.backgroundColor = "#6A7F84";

		display.insertAdjacentElement("beforeend", square);
	}
}
generateDisplay(range);

const clearBtn = document.querySelector(".clearBtn");
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
	if (!eraserState) {
		eraserBtn.style.backgroundColor = "pink";
		eraserBtn.style.color = "black";
		eraserState = true;
	} else {
		eraserBtn.style.backgroundColor = "black";
		eraserBtn.style.color = "white";
		eraserState = false;
	}
});

function sliderFunction(slideNum) {
	// document.getElementById("demo").innerHTML = `${slideNum} x ${slideNum}`;
	range = slideNum;
	generateDisplay(slideNum);
}
