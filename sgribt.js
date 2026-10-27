let count = 0;
let autoadd = 0;
let click = 1;
const button = document.querySelector("#clicker");
let data = []

const txt1 = document.getElementById("txt1");
const txt2 = document.getElementById("txt2");
const txt3 = document.getElementById("txt3");
const upgdiv = document.getElementById("upgBtns");

function render() {
	txt1.textContent = "Crypto Mined: " + Math.floor(count);
	txt2.textContent = "Click Increase: " + click;
	txt3.textContent = "Auto Crypto Mines: " + autoadd + "/s";
}

function increase() {
	count += click;
	render();
}

async function loadUpgrades() {
  try {
    const response = await fetch('./upgradesW2.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    data = await response.json();
    console.log(data);
	for (let i = 0; i<data.length; i++){
		const button = document.createElement("button");
		button.textContent = data[i]["upgrade"] + " " + data[i]["cost"]
		button.onClick = () => upgrade_logic(i);
		upgdiv.appendChild(button);
	}
  } catch (error) {
    console.error("Could not load JSON file:", error);
  }
}
function upgrade_logic(i) {
	return;
}

button.addEventListener("click", increase);

loadUpgrades();

setInterval(() => {
	if (autoadd > 0) {
		count += autoadd;
		render();
	}
}, 1000);

render();
