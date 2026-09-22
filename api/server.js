const { kv } = require("@vercel/kv");

const upgrades = [
    {
        name: "Better Money",
        description: "+$1 per click",
        cost: 10,
        perClick: 1,
        perSecond: 0,
        buyLimit: 50
    },
    {
        name: "Money Printer",
        description: "+$5 per second",
        cost: 50,
        perClick: 0,
        perSecond: 5,
        buyLimit: 100
    },
    {
        name: "Golden Clicker",
        description: "+$50 per click",
        cost: 200,
        perClick: 50,
        perSecond: 0,
        buyLimit: 25
    }
];

function newGame() {
    return {
        money: 0,
        moneyPerClick: 1,
        moneyPerSecond: 0,
        bought: [0, 0, 0],
        lastUpdate: Date.now()
    };
}

export default async function handler(req, res) {
    const gameId = req.headers["x-game-id"];

    if (!gameId || typeof gameId !== "string" || gameId.length > 100) {
        return res.status(400).json({ error: "Invalid game ID" });
    }

    const key = `game:${gameId}`;

    let game = await kv.get(key);

    if (!game) {
        game = newGame();
    }

    const now = Date.now();
    const elapsed = Math.min((now - game.lastUpdate) / 1000, 10);

    if (elapsed > 0) {
        game.money += game.moneyPerSecond * elapsed;
        game.lastUpdate = now;
    }

    if (req.method === "GET") {
        await kv.set(key, game);
        return res.json(publicGame(game));
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { action, upgradeIndex } = req.body || {};

    if (action === "click") {
        game.money += game.moneyPerClick;
    }

    else if (action === "buy") {
        if (
            !Number.isInteger(upgradeIndex) ||
            upgradeIndex < 0 ||
            upgradeIndex >= upgrades.length
        ) {
            return res.status(400).json({ error: "Invalid upgrade" });
        }

        const upgrade = upgrades[upgradeIndex];

        if (game.bought[upgradeIndex] >= upgrade.buyLimit) {
            return res.status(400).json({ error: "Buy limit reached" });
        }

        if (game.money < upgrade.cost) {
            return res.status(400).json({ error: "Not enough money" });
        }

        game.money -= upgrade.cost;
        game.moneyPerClick += upgrade.perClick;
        game.moneyPerSecond += upgrade.perSecond;
        game.bought[upgradeIndex]++;
    }

    else {
        return res.status(400).json({ error: "Invalid action" });
    }

    game.lastUpdate = Date.now();

    await kv.set(key, game);

    return res.json(publicGame(game));
}

function publicGame(game) {
    return {
        money: game.money,
        moneyPerClick: game.moneyPerClick,
        moneyPerSecond: game.moneyPerSecond,
        bought: game.bought
    };
}
