/* @colllapse */
let range = 16;
let color = "black";
let eraserState = false;
let colorState = false;

function generateDisplay(size) {
	let display = document.querySelector(".display");
	display.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	display.style.gridTemplateRows = `repeat(${size}, 1fr)`;
	let squares = display.querySelectorAll("div");
	squares.forEach((div) => div.remove());
	let canvasSize = size * size;
	demo.style.color = "rgb(198, 193, 30)";
	document.getElementById("demo").innerHTML = `${size} x ${size}`;

	for (let i = 0; i < canvasSize; i++) {
		let square = document.createElement("div");

		square.addEventListener("mouseover", () => {
			setColor();
			square.style.backgroundColor = color;
		});
		square.style.backgroundColor = "#6A7F84";

		display.insertAdjacentElement("beforeend", square);
	}
}
generateDisplay(range);

function setColor() {
	let randomColor = Math.floor(Math.random() * 16777215).toString(16);

	if (eraserState) {
		color = "#6A7F84";
	} else if (!eraserState && colorState) {
		color = "#" + randomColor;
	} else {
		color = "black";
	}
}

const clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", () => {
	generateDisplay(range);
});
let colorBtn = document.querySelector(".colorBtn");
colorBtn.addEventListener("click", () => {
	if (!colorState) {
		colorBtn.innerHTML = "On";
		// colorBtn.style.backgroundColor = "grey";
		colorBtn.style.color = "black";
		colorState = true;
	} else {
		colorBtn.innerHTML = "Off";
		// colorBtn.style.backgroundColor = "#D9D9D9";
		colorBtn.style.color = "black";
		colorState = false;
	}
});
let eraserBtn = document.querySelector(".eraserBtn");
eraserBtn.addEventListener("click", () => {
	if (!eraserState) {
		eraserBtn.innerHTML = "On";
		// eraserBtn.style.backgroundColor = "#79090F";
		eraserBtn.style.color = "black";
		eraserState = true;
	} else {
		eraserBtn.innerHTML = "Off";
		// eraserBtn.style.backgroundColor = "#D9D9D9";
		eraserBtn.style.color = "black";
		eraserState = false;
	}
});

function sliderFunction(slideNum) {
	range = slideNum;
	generateDisplay(slideNum);
}
