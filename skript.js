const moneyUI = document.getElementById("money-ui");
const moneyPerClickUI = document.getElementById("money-per-click-ui");
const moneyPerSecondUI = document.getElementById("money-per-second-ui");
const upgradesContainer = document.getElementById("upgrades-container");
const moneyImg = document.getElementById("money-img");

const upgrades = [
    ["Better Money", "+$1 per click", 10, 50],
    ["Money Printer", "+$5 per second", 50, 100],
    ["Golden Clicker", "+$50 per click", 200, 25]
];

let gameId = localStorage.getItem("gameId");

if (!gameId) {
    gameId = crypto.randomUUID();
    localStorage.setItem("gameId", gameId);
}

let game = {
    money: 0,
    moneyPerClick: 1,
    moneyPerSecond: 0,
    bought: []
};

async function request(action, upgrade = null) {
    const response = await fetch("/api/game", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Game-ID": gameId
        },
        body: JSON.stringify({ action, upgrade })
    });

    if (!response.ok) {
        console.error(await response.json());
        return;
    }

    game = await response.json();
    updateUI();
}

async function loadGame() {
    const response = await fetch("/api/game", {
        headers: {
            "X-Game-ID": gameId
        }
    });

    if (!response.ok) {
        console.error("Failed to load game");
        return;
    }

    game = await response.json();
    updateUI();
}

function updateUI() {
    moneyUI.textContent = `$${Math.floor(game.money)}`;
    moneyPerClickUI.textContent =
        `$${game.moneyPerClick} per click`;
    moneyPerSecondUI.textContent =
        `$${game.moneyPerSecond} per second`;

    updateUpgrades();
}

function updateUpgrades() {
    upgradesContainer.innerHTML = "";

    upgrades.forEach((upgrade, index) => {
        const [name, description, cost, click, second,buy_limit,count, unlocked] = upgrade;

        if (!unlocked && game.money >= cost) {
            upgrade[7] = true;
        }

        if (!upgrade[7]) return;

        const div = document.createElement("div");
        div.className = "upgrade";

        div.innerHTML = `
            <div class="upgrade-info">
                <strong>${name}</strong>
                <span>${description}</span>
                <small>Cost: $${cost}</small>
                <small>Bought: ${count}/${buyLimit}</small>
            </div>
            <button>Buy</button>
        `;

        div.querySelector("button").addEventListener("click", () => {
            if (game.money < cost) return;
            if (upgrade[6] >= buy_limit) { alert("buy limit reached"); return; }

            game.money -= cost;
            game.moneyPerClick += click;
            game.moneyPerSecond += second;
            upgrade[6] += 1;

            updateUI();
        });

        upgradesContainer.appendChild(div);
    });
}

moneyImg.addEventListener("click", e => {
    request("click");

    const p = document.createElement("p");

    p.style.left = `${e.pageX}px`;
    p.style.top = `${e.pageY}px`;

    p.classList.add("toast");
    p.textContent = `+$${game?.moneyPerClick || 1}`;

    document.body.appendChild(p);

    setTimeout(() => p.remove(), 800);
});

loadGame();

setInterval(loadGame, 1000);
