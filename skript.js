const moneyUI = document.getElementById("money-ui");
const moneyPerClickUI = document.getElementById("money-per-click-ui");
const moneyPerSecondUI = document.getElementById("money-per-second-ui");
const upgradesContainer = document.getElementById("upgrades-container");
const moneyImg = document.getElementById("money-img");

const upgrades = [
    // stuff here :)
    // format
    // ['name', 'description', 'cost', 'amount per click', 'amount per second', 'unlocked (boolean)']
]

let money = 0;
let moneyPerClick = 1;
let moneyPerSecond = 0;

function update(amount = 0) {
    money += amount;
    moneyUI.textContent = `$${money}`;
    moneyPerClickUI.textContent = `$${moneyPerClick} per click`;
    moneyPerSecondUI.textContent = `$${moneyPerSecond} per second`;
}

function updateUpgrades() {
    upgrades.forEach((upgrade) => {
        if (!upgrade.unlocked && money > upgrade.cost) upgrade.unlocked = true;
    });

    upgrades.forEach((upgrade) => {
        if (upgrade.unlocked) {
            const div = document.createElement("div");
            div.className = "upgrade";
    
            div.innerHTML = `
                <div class="upgrade-info">
                    <strong>${name}</strong>
                    <span>${description}</span>
                    <small>Cost: $${cost}</small>
                </div>
                <button ${money < cost ? "disabled" : ""}>Buy</button>
            `;
    
            div.querySelector("button").addEventListener("click", () => {
                if (money < cost) return;
    
                money -= cost;
                moneyPerClick += click;
                moneyPerSecond += second;
    
                upgrades[index][5] = false;
    
                update();
            });
    
            upgradesContainer.appendChild(div);
        }
    });
}

moneyImg.addEventListener('click', () => {
    update(moneyPerClick);
});

setInterval(() => {
    update(moneyPerSecond);
}, 1000);

update();
