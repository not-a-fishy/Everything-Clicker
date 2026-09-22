const moneyUI = document.getElementById("money-ui");
const moneyPerClickUI = document.getElementById("money-per-click-ui");
const moneyPerSecondUI = document.getElementById("money-per-second-ui");
const upgradesContainer = document.getElementById("upgrades-container");
const moneyImg = document.getElementById("money-img");

let money = 0; 
let moneyPerClick = 1;
let moneyPerSecond = 0;

function updateUI() {
    moneyUI.textContent = `$${money}`;
    moneyPerClickUI.textContent = `$${moneyPerClick} per click`;
    moneyPerSecondUI.textContent = `$${moneyPerSecond} per second`;
}

function update() {
    money += moneyPerSecond;
    updateUI();
}

moneyImg.addEventListener(('click', 'tap') => {
    money += moneyPerClick;
    alert(money)
});



setInterval(() => {

    update();

}, 1000);
