function generateDisplay(size) {
	let display = document.querySelector(".display");
	display.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	display.style.gridTemplateRows = `repeat(${size}, 1fr)`;
	let squares = display.querySelectorAll("div");
	squares.forEach((div) => div.remove());
	for (let i = 0; i < 256; i++) {
		let square = document.createElement("div");

		square.addEventListener("mouseover", () => {
			square.style.backgroundColor = "blue";
		});
		square.style.backgroundColor = "black";

		display.insertAdjacentElement("beforeend", square);
	}
}
generateDisplay(16);
let clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", () => {
	generateDisplay(16);
});
let colorBtn = document.querySelector(".colorBtn");
colorBtn.addEventListener("click", () => {
	console.log("This works");
});
let eraserBtn = document.querySelector(".eraserBtn");
eraserBtn.addEventListener("click", () => {
	console.log("This works");
});
