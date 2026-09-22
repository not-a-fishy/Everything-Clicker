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

let game = null;

let gameId = localStorage.getItem("gameId");

if (!gameId) {
    gameId = crypto.randomUUID();
    localStorage.setItem("gameId", gameId);
}

async function request(action, upgradeIndex = null) {
    const response = await fetch("/api/game", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Game-ID": gameId
        },
        body: JSON.stringify({
            action,
            upgradeIndex
        })
    });

    const data = await response.json();

    if (!response.ok) {
        console.error(data.error);
        return;
    }

    game = data;
    updateUI();
}

async function loadGame() {
    const response = await fetch("/api/server", {
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
        const [name, description, cost, buyLimit] = upgrade;
        const count = game.bought[index] || 0;

        const div = document.createElement("div");
        div.className = "upgrade";

        div.innerHTML = `
            <div class="upgrade-info">
                <strong>${name}</strong>
                <span>${description}</span>
                <small>Cost: $${cost}</small>
                <small>Bought: ${count}/${buyLimit}</small>
            </div>
            <button ${count >= buyLimit ? "disabled" : ""}>
                Buy
            </button>
        `;

        div.querySelector("button").addEventListener("click", () => {
            request("buy", index);
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
