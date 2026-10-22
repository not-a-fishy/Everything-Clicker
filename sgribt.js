let count = 0;
let autoadd = 0;
let click = 1;
const button = document.querySelector("#clicker");

const txt1 = document.getElementById("txt1");
const txt2 = document.getElementById("txt2");
const txt3 = document.getElementById("txt3");

function render() {
	txt1.textContent = "Crypto Mined: " + Math.floor(count);
	txt2.textContent = "Click Increase: " + click;
	txt3.textContent = "Auto Crypto Mines: " + autoadd + "/s";
}

function increase() {
	count += click;
	render();
}

function load_upgrades() {
	return;
}

function upgrade_logic() {
	return;
}

button.addEventListener("click", increase);

setInterval(() => {
	if (autoadd > 0) {
		count += autoadd;
		render();
	}
}, 1000);

render();
