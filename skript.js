const moneyUI = document.getElementById("money-ui");
const moneyPerClickUI = document.getElementById("money-per-click-ui");
const moneyPerSecondUI = document.getElementById("money-per-second-ui");
const upgradesContainer = document.getElementById("upgrades-container");
const moneyImg = document.getElementById("money-img"); 

let money = 0;
let moneyPerClick = 1;
let moneyPerSecond = 0;

function update(amount = 0) {
    money += amount;
    moneyUI.textContent = `$${money}`;
    moneyPerClickUI.textContent = `$${moneyPerClick} per click`;
    moneyPerSecondUI.textContent = `$${moneyPerSecond} per second`;
}

moneyImg.addEventListener('click', () => {
    update(moneyPerClick);
});

setInterval(() => {
    update(moneyPerSecond);
}, 1000);

update();
