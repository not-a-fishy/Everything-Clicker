const moneyUI = document.getElementById("money-ui");
const moneyPerClickUI = document.getElementById("money-per-click-ui");
const moneyPerSecondUI = document.getElementById("money-per-second-ui");
const upgradesContainer = document.getElementById("upgrades-container");
const moneyImg = document.getElementById("money-img");

const upgrades = [
    // format: [name, description, cost, per click, per second, unlocked]
    ["Better Money", "+$1 per click", 10, 1, 0, false],
    ["Money Printer", "+$5 per second", 50, 0, 5, false],
    ["Golden Clicker", "+$50 per click", 200, 50, 0, false]
];

let toasts = [];
let money = 0;
let moneyPerClick = 1;
let moneyPerSecond = 0;

function update(amount = 0) {
    money += amount;

    moneyUI.textContent = `$${money}`;
    moneyPerClickUI.textContent = `$${moneyPerClick} per click`;
    moneyPerSecondUI.textContent = `$${moneyPerSecond} per second`;

    updateUpgrades();
}

function updateUpgrades() {
    upgradesContainer.innerHTML = "";

    upgrades.forEach((upgrade, index) => {
        const [name, description, cost, click, second, unlocked] = upgrade;

        if (!unlocked && money >= cost) {
            upgrade[5] = true;
        }

        if (!upgrade[5]) return;

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

            update();
        });

        upgradesContainer.appendChild(div);
    });
}

moneyImg.addEventListener("click", (e) => {
    update(moneyPerClick);
    const x = e.pageX;
    const y = e.pageY;
    const p = document.createElement("p");
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    p.classList.add("toast");
    p.textContent = `+${moneyPerClick}`;
    document.body.appendChild(p);
    setTimeout(() => {
        p.remove();
    }, 800);
});

setInterval(() => {
    update(moneyPerSecond);
}, 1000);

update();
