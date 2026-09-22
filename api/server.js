const games = new Map();

const upgrades = [
    ["Better Money", 10, 1, 0],
    ["Money Printer", 50, 0, 1],
    ["Golden Clicker", 200, 50, 0]
];

function getGame(id) {
    if (!games.has(id)) {
        games.set(id, {
            money: 0,
            moneyPerClick: 1,
            moneyPerSecond: 0,
            bought: [false, false, false],
            lastTick: Date.now()
        });
    }

    return games.get(id);
}

export default function handler(req, res) {
    const id = req.headers["x-game-id"];

    if (!id) {
        return res.status(400).json({ error: "Missing game ID" });
    }

    const game = getGame(id);

    const now = Date.now();
    const elapsed = (now - game.lastTick) / 1000;

    game.money += elapsed * game.moneyPerSecond;
    game.lastTick = now;

    if (req.method === "GET") {
        return res.json({
            money: game.money,
            moneyPerClick: game.moneyPerClick,
            moneyPerSecond: game.moneyPerSecond,
            bought: game.bought
        });
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { action, upgrade } = req.body || {};

    if (action === "click") {
        game.money += game.moneyPerClick;
    }

    else if (action === "buy") {
        if (
            !Number.isInteger(upgrade) ||
            upgrade < 0 ||
            upgrade >= upgrades.length
        ) {
            return res.status(400).json({ error: "Invalid upgrade" });
        }

        if (game.bought[upgrade]) {
            return res.status(400).json({ error: "Already bought" });
        }

        const [, cost, click, second] = upgrades[upgrade];

        if (game.money < cost) {
            return res.status(400).json({ error: "Not enough money" });
        }

        game.money -= cost;
        game.moneyPerClick += click;
        game.moneyPerSecond += second;
        game.bought[upgrade] = true;
    }

    else {
        return res.status(400).json({ error: "Invalid action" });
    }

    return res.json({
        money: game.money,
        moneyPerClick: game.moneyPerClick,
        moneyPerSecond: game.moneyPerSecond,
        bought: game.bought
    });
}
