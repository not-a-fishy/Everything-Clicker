"use strict";

const UPGRADES = [
    {"upgrade": "Newbie Capitalism", "cost": 10, "ClickIncrease": 1, "PerSecIncrease": 0, "description": "The first step to owning everything.", "buycap": 50, "purchased": 0, "multiplier": 1.15, "buylimitmsg": "You are now in the top 0.01% of richness, basic plans no longer interest you. (buy limit reached)"},
    {"upgrade": "Willing Slave-I mean residents", "cost": 50, "ClickIncrease": 0, "PerSecIncrease": 1, "description": "Hey, if it works it works man. They signed the Terms and Conditions for free housing.", "buycap": 100, "purchased": 0, "multiplier": 1.15, "buylimitmsg": "You ran out of space in your capitalist state. (buy limit reached)"},
    {"upgrade": "Ergonomic Mouse Pad", "cost": 100, "ClickIncrease": 2, "PerSecIncrease": 0, "description": "Wrist health is wealth health.", "buycap": 50, "purchased": 0, "multiplier": 1.15, "buylimitmsg": "Your wrists have never been safer. Your mousepad now has its own insurance policy. (buy limit reached)"},
    {"upgrade": "Long Term Investments", "cost": 500, "ClickIncrease": 0, "PerSecIncrease": 8, "description": "Who knew stocks made passive income?", "buycap": 100, "purchased": 0, "multiplier": 1.15, "buylimitmsg": "All companies rely on your shares to obtain funding. (buy limit reached)"},
    {"upgrade": "Titanium Mouse", "cost": 1000, "ClickIncrease": 8, "PerSecIncrease": 0, "description": "Lighter than air, harder than your competition.", "buycap": 50, "purchased": 0, "multiplier": 1.15, "buylimitmsg": "Any lighter and it would float away. (buy limit reached)"},
    {"upgrade": "Motivational Podcasts", "cost": 2000, "ClickIncrease": 15, "PerSecIncrease": 0, "description": "Your fingers have never been this motivated.", "buycap": 50, "purchased": 0, "multiplier": 1.15, "buylimitmsg": "You are very motivated. (buy limit reached)"},
    {"upgrade": "Caffeine Drip", "cost": 3500, "ClickIncrease": 25, "PerSecIncrease": 0, "description": "Your hands don't shake. They vibrate productively.", "buycap": 50, "purchased": 0, "multiplier": 1.15, "buylimitmsg": "Your doctor has stopped returning your calls. (buy limit reached)"},
    {"upgrade": "Housing Development Board", "cost": 5000, "ClickIncrease": 5, "PerSecIncrease": 40, "description": "Giving your Work-I mean residents housing increases their productivity and your own morale.", "buycap": 75, "purchased": 0, "multiplier": 1.15, "buylimitmsg": "Your buildings have been stacked so high they're reaching the clouds. (buy limit reached)"},
    {"upgrade": "Extra Hands", "cost": 15000, "ClickIncrease": 40, "PerSecIncrease": 0, "description": "Why click with two hands when you can click with four?", "buycap": 50, "purchased": 0, "multiplier": 1.15, "buylimitmsg": "You have run out of sleeves. (buy limit reached)"},
    {"upgrade": "Land Expansion", "cost": 20000, "ClickIncrease": 0, "PerSecIncrease": 180, "description": "More land for your empire.", "buycap": 75, "purchased": 0, "multiplier": 1.15, "buylimitmsg": "You are quickly running out of space to reclaim, and can no longer expand your country. (buy limit reached)"},
    {"upgrade": "Click Interns", "cost": 75000, "ClickIncrease": 150, "PerSecIncrease": 0, "description": "Unpaid, unthanked, and extremely good at clicking.", "buycap": 50, "purchased": 0, "multiplier": 1.15, "buylimitmsg": "HR has asked you to stop calling them interns. They're 'click associates' now. (buy limit reached)"},
    {"upgrade": "Commercial Seafaring", "cost": 100000, "ClickIncrease": 0, "PerSecIncrease": 700, "description": "Which billionaire doesn't like private sea carriage?", "buycap": 100, "purchased": 0, "multiplier": 1.15, "buylimitmsg": "All sea shipments now require your boats. (buy limit reached)"},
    {"upgrade": "Macro Keyboard", "cost": 250000, "ClickIncrease": 300, "PerSecIncrease": 0, "description": "One keypress. Forty-seven clicks.", "buycap": 50, "purchased": 0, "multiplier": 1.15, "buylimitmsg": "There are no keys left to bind. (buy limit reached)"},
    {"upgrade": "Offshore Tax Havens", "cost": 400000, "ClickIncrease": 0, "PerSecIncrease": 2000, "description": "Taxes are for people who can't afford an island.", "buycap": 50, "purchased": 0, "multiplier": 1.15, "buylimitmsg": "Every island is now yours. The IRS has stopped sending letters. (buy limit reached)"},
    {"upgrade": "Hostile Takeovers", "cost": 1000000, "ClickIncrease": 1500, "PerSecIncrease": 0, "description": "Every click is a signature on someone else's company.", "buycap": 50, "purchased": 0, "multiplier": 1.15, "buylimitmsg": "There is nothing left to take over. Your competitors are now your employees. (buy limit reached)"},
    {"upgrade": "Crypto Mining Software", "cost": 2000000, "ClickIncrease": 0, "PerSecIncrease": 10000, "description": "Deploy state-of-the-art algorithmic scripts to optimize your rigs.", "buycap": 50, "purchased": 0, "multiplier": 1.15, "buylimitmsg": "You ran out of RAM. (buy limit reached)"},
    {"upgrade": "Cybernetic Fingers", "cost": 4000000, "ClickIncrease": 5000, "PerSecIncrease": 0, "description": "Carbon fibre tendons. Zero fatigue. Mild existential dread.", "buycap": 50, "purchased": 0, "multiplier": 1.18, "buylimitmsg": "You can't tell where you end and the mouse begins. (buy limit reached)"},
    {"upgrade": "Hacking Powers", "cost": 10000000, "ClickIncrease": 400, "PerSecIncrease": 20000, "description": "Hack this game to earn money.", "buycap": 50, "purchased": 0, "multiplier": 1.15, "buylimitmsg": "You got caught hacking. (buy limit reached)"},
    {"upgrade": "Robotic Exoskeleton", "cost": 30000000, "ClickIncrease": 10000, "PerSecIncrease": 0, "description": "Iron Man, but for clicking.", "buycap": 50, "purchased": 0, "multiplier": 1.18, "buylimitmsg": "Your suit is now legally classified as a vehicle. (buy limit reached)"},
    {"upgrade": "I am a Parallelogram", "cost": 100000000, "ClickIncrease": 0, "PerSecIncrease": 0, "description": "Parallelograms spawn randomly and you get extra money from clicking them.", "buycap": 1, "purchased": 0, "multiplier": 1.15, "buylimitmsg": "You already bought this upgrade."},
    {"upgrade": "Neural Click Interface", "cost": 150000000, "ClickIncrease": 60000, "PerSecIncrease": 0, "description": "Think about money. Money happens.", "buycap": 40, "purchased": 0, "multiplier": 1.18, "buylimitmsg": "Your brain is now a peripheral. (buy limit reached)"},
    {"upgrade": "Private Military Contractors", "cost": 250000000, "ClickIncrease": 0, "PerSecIncrease": 1000000, "description": "Hostile markets become very friendly when you have your own army.", "buycap": 50, "purchased": 0, "multiplier": 1.15, "buylimitmsg": "Your army is now bigger than most countries' armies. Hiring more would be awkward. (buy limit reached)"},
    {"upgrade": "Eight Arms", "cost": 500000000, "ClickIncrease": 100000, "PerSecIncrease": 0, "description": "Octopus-grade clicking. Surgery was optional, ethics were not.", "buycap": 40, "purchased": 0, "multiplier": 1.2, "buylimitmsg": "Your arms are tangled. Please stop. (buy limit reached)"},
    {"upgrade": "Learn to code", "cost": 1000000000, "ClickIncrease": 0, "PerSecIncrease": 0, "description": "Allows you to open a coding box and code money giving software.", "buycap": 1, "purchased": 0, "multiplier": 1.15, "buylimitmsg": "You already bought this upgrade."},
    {"upgrade": "Quantum Clicker", "cost": 2000000000, "ClickIncrease": 800000, "PerSecIncrease": 0, "description": "Every click lands in every possible universe at once.", "buycap": 40, "purchased": 0, "multiplier": 1.2, "buylimitmsg": "The universes are filing a complaint about the overlap. (buy limit reached)"},
    {"upgrade": "Lobbying Congress", "cost": 5000000000, "ClickIncrease": 0, "PerSecIncrease": 5000000, "description": "It's not bribery if it's called a donation.", "buycap": 50, "purchased": 0, "multiplier": 1.15, "buylimitmsg": "Every politician is already on your payroll. (buy limit reached)"},
    {"upgrade": "Fingers of Midas", "cost": 10000000000, "ClickIncrease": 1500000, "PerSecIncrease": 0, "description": "Everything you touch turns to money, including the mouse.", "buycap": 35, "purchased": 0, "multiplier": 1.2, "buylimitmsg": "Your mouse is now solid gold and too heavy to lift. (buy limit reached)"},
    {"upgrade": "Clone Army of Clickers", "cost": 30000000000, "ClickIncrease": 8000000, "PerSecIncrease": 0, "description": "Each one has your fingers and your ambition.", "buycap": 35, "purchased": 0, "multiplier": 1.2, "buylimitmsg": "There is no room left in the cloning vats. (buy limit reached)"},
    {"upgrade": "Space Mining Corporation", "cost": 50000000000, "ClickIncrease": 0, "PerSecIncrease": 20000000, "description": "Earth ran out of resources, so go to space.", "buycap": 40, "purchased": 0, "multiplier": 1.2, "buylimitmsg": "You've mined every asteroid in range. The rest are too far for your fuel budget. (buy limit reached)"},
    {"upgrade": "AI Data Centers", "cost": 500000000000, "ClickIncrease": 0, "PerSecIncrease": 100000000, "description": "Let the machines do the work.", "buycap": 30, "purchased": 0, "multiplier": 1.2, "buylimitmsg": "The power grid can't handle any more of your servers. (buy limit reached)"},
    {"upgrade": "Time-Dilated Clicking", "cost": 2000000000000, "ClickIncrease": 150000000, "PerSecIncrease": 0, "description": "You click for a year. The world sees one second.", "buycap": 25, "purchased": 0, "multiplier": 1.25, "buylimitmsg": "Time has filed a restraining order against you. (buy limit reached)"},
    {"upgrade": "Buy Microsoft", "cost": 3960000000000, "ClickIncrease": 0, "PerSecIncrease": 400000000, "description": "Copilot for everyone!!!", "buycap": 10, "purchased": 0, "multiplier": 1.25, "buylimitmsg": "You got sued for cheating your workers. (buy limit reached)"},
    {"upgrade": "Clicking Singularity", "cost": 15000000000000, "ClickIncrease": 150000000, "PerSecIncrease": 0, "description": "A black hole that only clicks.", "buycap": 15, "purchased": 0, "multiplier": 1.3, "buylimitmsg": "The singularity has swallowed your desk. (buy limit reached)"},
    {"upgrade": "Divine Index Finger", "cost": 250000000000000, "ClickIncrease": 1000000000, "PerSecIncrease": 0, "description": "Let there be money.", "buycap": 10, "purchased": 0, "multiplier": 1.35, "buylimitmsg": "You are now the final boss of capitalism. (buy limit reached)"}
];

const STAGES = {};
let currentStage = null;

function setStage(name) {
    if (name === "bash" && localStorage.getItem("rebirthed") !== "1") name = "money";
    if (!STAGES[name]) name = "money";
    if (currentStage) STAGES[currentStage].stop();
    currentStage = name;
    localStorage.setItem("stage", name);
    document.body.dataset.stage = name;
    STAGES[name].start();
}

STAGES.money = (() => {
    const btn = document.getElementById("click-btn");
    const countText = document.getElementById("count");
    const clickText = document.getElementById("click-str");
    const autoText = document.getElementById("auto-str");
    const upgradesContainer = document.getElementById("upgrade-area");
    const rebirth_area = document.getElementById("rebirth");
    const glowContainer = document.getElementById("screen-glow");
    const buffArea = document.getElementById("buff-area");
    const rainCanvas = document.getElementById("crypto-rain");
    const rainCtx = rainCanvas.getContext("2d");
    const stageEl = document.getElementById("stage-money");

    const BOOST_MULTIPLIER = 7;
    const BOOST_DURATION = 60;
    const SPAWN_MIN = 300;
    const SPAWN_MAX = 900;
    const PARALLELOGRAM_SIZE = 80;
    const PARALLELOGRAM_LIFETIME = 8000;
    const RAIN_FONT_SIZE = 16;
    const REBIRTH_COST = 1e18;
    const CRYPTO_UPGRADE_NAME = "Crypto Mining Software";
    const PARALLELOGRAM_UPGRADE_NAME = "I am a Parallelogram";
    const SALT = "x9#kQ-parallelogram-7f2";
    const MAX_CPS = 25;

    const suffix = ["K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No"];
    for (const tens of ["Dc", "Vg", "Tg", "Qd", "Qn", "SxG", "SpG", "Og", "Nn"]) {
        suffix.push(tens, ...["U", "D", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No"].map(p => p + tens));
    }
    suffix.push("Ct");

    let intensity = 40;
    let growing = true;
    let count = 0;
    let inc = 1;
    let autoadd = 0;
    let data = [];
    let timer = randint(SPAWN_MIN, SPAWN_MAX);
    let boost = false;
    let boostEnd = 0;
    let parallelograms = [];
    let parallelogramsOn = false;
    let lastFrame = performance.now();
    let lastSave = 0;

    let rebirthed = false;
    let cheated = false;
    let rebirth_btn = null;
    let trustedCount = 0;
    let trustedPurchasedTotal = 0;
    let clickTimes = [];

    let inited = false;
    let running = false;
    let rafId = 0;
    let updateTimerId = 0;

    const parallelogramImage = new Image();
    parallelogramImage.src = "parallelogram.png";

    let boostChip = null;
    let boostTimeEl = null;
    let boostBarEl = null;

    let rainDrops = [];
    let rainLastRow = [];
    let rainWasActive = false;

    function hash(str) {
        let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
        for (let i = 0; i < str.length; i++) {
            const ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
    }

    function sign(countVal, purchasedJSON, rebirthFlag) {
        return hash(Math.floor(countVal) + "|" + purchasedJSON + "|" + (rebirthFlag ? "R|" : "") + SALT);
    }

    function purchasedMap() {
        const map = {};
        const sorted = data.slice().sort((a, b) => (a.upgrade < b.upgrade ? -1 : 1));
        for (const item of sorted) {
            if (item.purchased) map[item.upgrade] = item.purchased;
        }
        return map;
    }

    function legacyPurchasedMap() {
        const map = {};
        for (const item of data) map[item.upgrade] = item.purchased || 0;
        return map;
    }

    function purchasedTotal() {
        return data.reduce((s, i) => s + (i.purchased || 0), 0);
    }

    function commit() {
        trustedCount = count;
        trustedPurchasedTotal = purchasedTotal();
    }

    function flagCheat(reason) {
        if (cheated) return;
        cheated = true;
        console.warn("Cheat detected:", reason);
        localStorage.setItem("cheater", "1");

        count = 0;
        rebirthed = false;
        for (const item of data) item.purchased = 0;
        localStorage.removeItem("gameCount");
        localStorage.removeItem("purchased");
        localStorage.removeItem("rebirthed");
        localStorage.removeItem("sig");
        recalcStats();
        commit();

        const banner = document.createElement("div");
        banner.textContent = "Cheaters are bad. Your progress has been reset.";
        banner.style.cssText =
            "position:fixed;top:0;left:0;right:0;padding:12px;background:#b00020;" +
            "color:#fff;text-align:center;z-index:99999;font-weight:bold";
        stageEl.appendChild(banner);
        alert("cheaters are bad");
    }

    function checkIntegrity() {
        if (cheated || !data.length) return;
        const drift = Math.abs(count - trustedCount);
        if (drift > Math.max(1e-6 * Math.abs(trustedCount), 1e-6)) {
            flagCheat("count modified outside game logic");
        } else if (purchasedTotal() !== trustedPurchasedTotal) {
            flagCheat("upgrades modified outside game logic");
        }
    }

    function registerClick(event) {
        if (!event.isTrusted) return flagCheat("synthetic click"), false;
        const now = performance.now();
        clickTimes.push(now);
        clickTimes = clickTimes.filter(t => now - t < 1000);
        if (clickTimes.length > MAX_CPS) return flagCheat("autoclicker"), false;
        return true;
    }

    function format(n) {
        n = Number(n);
        if (!Number.isFinite(n)) return n > 0 ? "∞" : "0";
        if (n < 0) return "-" + format(-n);

        if (n < 1000) {
            return Number.isInteger(n) ? String(n) : String(parseFloat(n.toFixed(2)));
        }

        let tier = Math.floor(Math.log10(n) / 3);
        tier = Math.min(tier, suffix.length);

        let scaled = n / Math.pow(10, tier * 3);

        if (scaled >= 1000 && tier < suffix.length) {
            tier++;
            scaled = n / Math.pow(10, tier * 3);
        } else if (scaled < 1) {
            tier--;
            scaled = n / Math.pow(10, tier * 3);
        }

        const truncated = Math.floor(scaled * 100) / 100;
        return parseFloat(truncated.toFixed(2)) + suffix[tier - 1];
    }

    function randint(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getBoostMultiplier() {
        return boost ? BOOST_MULTIPLIER : 1;
    }

    function currentCost(item) {
        return Math.floor(item.cost * Math.pow(item.multiplier || 1, item.purchased));
    }

    function saveCount() {
        if (!data.length) return;
        localStorage.setItem("gameCount", count);
        localStorage.setItem("rebirthed", rebirthed ? "1" : "0");
        localStorage.setItem("sig", sign(count, JSON.stringify(purchasedMap()), rebirthed));
    }

    function saveProgress() {
        localStorage.setItem("purchased", JSON.stringify(purchasedMap()));
        saveCount();
    }

    function loadPurchased() {
        try {
            const saved = JSON.parse(localStorage.getItem("purchased"));
            if (saved) return saved;

            const old = JSON.parse(localStorage.getItem("gamedata"));
            if (old) {
                const migrated = {};
                for (const item of old) migrated[item.upgrade] = item.purchased || 0;
                return migrated;
            }
        } catch (error) {
            console.error("Error reading save:", error);
        }
        return {};
    }

    function loadCount() {
        const savedCount = parseFloat(localStorage.getItem("gameCount"));
        return Number.isFinite(savedCount) ? savedCount : 0;
    }

    function recalcStats() {
        inc = 1;
        autoadd = 0;
        for (const item of data) {
            inc += item.purchased * (item.ClickIncrease || 0);
            autoadd += item.purchased * (item.PerSecIncrease || 0);
        }
        const para = data.find(i => i.upgrade === PARALLELOGRAM_UPGRADE_NAME);
        parallelogramsOn = !!para && para.purchased > 0;
    }

    function showBoostChip() {
        if (boostChip) return;
        boostChip = document.createElement("div");
        boostChip.className = "buff-chip";

        const name = document.createElement("span");
        name.className = "buff-name";
        name.textContent = "x" + BOOST_MULTIPLIER + " Boost";

        boostTimeEl = document.createElement("span");
        boostTimeEl.className = "buff-time";

        boostBarEl = document.createElement("div");
        boostBarEl.className = "buff-bar";

        boostChip.append(name, boostTimeEl, boostBarEl);
        buffArea.appendChild(boostChip);
    }

    function hideBoostChip() {
        if (!boostChip) return;
        boostChip.remove();
        boostChip = null;
        boostTimeEl = null;
        boostBarEl = null;
    }

    function updateBuffs(now) {
        if (boost && now >= boostEnd) {
            boost = false;
            hideBoostChip();
            return;
        }
        if (!boost) return;

        const remainingMs = boostEnd - now;
        const secs = Math.ceil(remainingMs / 1000);
        boostTimeEl.textContent = Math.floor(secs / 60) + ":" + String(secs % 60).padStart(2, "0");
        boostBarEl.style.transform = "scaleX(" + (remainingMs / (BOOST_DURATION * 1000)) + ")";
        boostChip.classList.toggle("ending", secs <= 10);
    }

    function activateBoost() {
        boost = true;
        boostEnd = performance.now() + BOOST_DURATION * 1000;
        showBoostChip();
    }

    function removeParallelogram(el, animClass) {
        const index = parallelograms.indexOf(el);
        if (index === -1) return;
        parallelograms.splice(index, 1);

        el.style.pointerEvents = "none";
        if (animClass) {
            el.classList.remove("para-expiring");
            el.classList.add(animClass);
            setTimeout(() => el.remove(), 500);
        } else {
            el.remove();
        }
    }

    function burstSparkles(x, y) {
        const sparkCount = 12;
        for (let i = 0; i < sparkCount; i++) {
            const spark = document.createElement("div");
            spark.className = "para-spark";
            const angle = (i / sparkCount) * Math.PI * 2;
            const dist = randint(50, 110);
            spark.style.left = x + "px";
            spark.style.top = y + "px";
            spark.style.setProperty("--dx", Math.cos(angle) * dist + "px");
            spark.style.setProperty("--dy", Math.sin(angle) * dist + "px");
            stageEl.appendChild(spark);
            setTimeout(() => spark.remove(), 650);
        }
    }

    function spawnParallelogram() {
        const el = parallelogramImage.cloneNode();
        el.alt = "Click for boost";
        el.draggable = false;
        el.className = "para";
        el.style.position = "fixed";
        el.style.width = PARALLELOGRAM_SIZE + "px";
        el.style.left = randint(0, Math.max(0, window.innerWidth - PARALLELOGRAM_SIZE)) + "px";
        el.style.top = randint(0, Math.max(0, window.innerHeight - PARALLELOGRAM_SIZE)) + "px";
        el.style.cursor = "pointer";
        el.style.zIndex = "1000";
        el.style.userSelect = "none";

        el.addEventListener("click", (e) => {
            if (!e.isTrusted) return flagCheat("synthetic boost click");
            if (!parallelograms.includes(el)) return;
            const rect = el.getBoundingClientRect();
            burstSparkles(rect.left + rect.width / 2, rect.top + rect.height / 2);
            activateBoost();
            removeParallelogram(el, "para-pop");
        });

        stageEl.appendChild(el);
        parallelograms.push(el);

        setTimeout(() => el.classList.add("para-expiring"), PARALLELOGRAM_LIFETIME - 2000);
        setTimeout(() => removeParallelogram(el, "para-fade"), PARALLELOGRAM_LIFETIME - 500);
    }

    function updateBoost() {
        if (parallelogramsOn) {
            timer--;
            if (timer <= 0) {
                timer = randint(SPAWN_MIN, SPAWN_MAX);
                spawnParallelogram();
            }
        }
    }

    function pulseGlow() {
        if (growing) {
            intensity += 1;
            if (intensity >= 80) growing = false;
        } else {
            intensity -= 1;
            if (intensity <= 30) growing = true;
        }

        glowContainer.style.boxShadow = `
            inset 0 0 ${intensity * 2}px rgba(255, 225, 60, 0.75),
            inset 0 0 ${intensity * 4}px rgba(255, 190, 0, 0.35),
            0 0 ${intensity * 3}px rgba(255, 215, 0, 0.6)
        `;
    }

    function resizeRain() {
        rainCanvas.width = window.innerWidth;
        rainCanvas.height = window.innerHeight;
        const columns = Math.floor(rainCanvas.width / RAIN_FONT_SIZE);
        rainDrops = Array.from({ length: columns }, () => Math.random() * -40);
        rainLastRow = new Array(columns).fill(-1);
    }

    function getCryptoLevel() {
        if (!Array.isArray(data)) return 0;
        const item = data.find(i => i.upgrade === CRYPTO_UPGRADE_NAME);
        return item ? item.purchased / item.buycap : 0;
    }

    function drawRain(dt) {
        const level = getCryptoLevel();

        if (level <= 0) {
            if (rainWasActive) {
                rainCtx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
                rainWasActive = false;
            }
            return;
        }
        rainWasActive = true;

        rainCtx.globalCompositeOperation = "destination-out";
        rainCtx.fillStyle = "rgba(0, 0, 0, 0.12)";
        rainCtx.fillRect(0, 0, rainCanvas.width, rainCanvas.height);
        rainCtx.globalCompositeOperation = "source-over";

        rainCtx.font = RAIN_FONT_SIZE + "px monospace";

        const density = 0.1 + level * 0.9;
        const speed = (6 + level * 22) * Math.min(dt, 0.1);

        for (let i = 0; i < rainDrops.length; i++) {
            if (((i * 7919) % 100) / 100 > density) continue;

            rainDrops[i] += speed * (0.6 + ((i * 31) % 10) / 12);
            const row = Math.floor(rainDrops[i]);

            if (row >= 0 && row !== rainLastRow[i]) {
                rainLastRow[i] = row;
                const x = i * RAIN_FONT_SIZE;
                const y = row * RAIN_FONT_SIZE;

                rainCtx.fillStyle = "#d8ffe0";
                rainCtx.fillText(Math.random() < 0.5 ? "0" : "1", x, y);
                rainCtx.fillStyle = "#00ff55";
                rainCtx.fillText(Math.random() < 0.5 ? "0" : "1", x, y - RAIN_FONT_SIZE);
            }

            if (row * RAIN_FONT_SIZE > rainCanvas.height && Math.random() > 0.96) {
                rainDrops[i] = Math.random() * -20;
                rainLastRow[i] = -1;
            }
        }
    }

    function refreshUpgradeButtons() {
        for (const item of data) {
            if (!item.btn) continue;

            let text, disabled;
            if (item.purchased >= item.buycap) {
                text = "MAXED (" + item.purchased + ")";
                disabled = true;
            } else {
                const price = currentCost(item);
                text = "$" + format(price) + " (" + item.purchased + "/" + item.buycap + ")";
                disabled = count < price;
            }

            if (item.btn.textContent !== text) item.btn.textContent = text;
            if (item.btn.disabled !== disabled) item.btn.disabled = disabled;
        }
    }

    function render() {
        const boostMultiplier = getBoostMultiplier();
        countText.textContent = "$" + format(Math.floor(count));
        clickText.textContent = format(inc * boostMultiplier);
        autoText.textContent = format(autoadd * boostMultiplier);
        clickText.classList.toggle("boosted", boost);
        autoText.classList.toggle("boosted", boost);
        refreshUpgradeButtons();
        rebirth_render();
    }

    function addMoney(amount) {
        count += amount * getBoostMultiplier();
        commit();
        saveCount();
        render();
    }

    function gameLoop(now) {
        if (!running) return;

        const dt = Math.max(0, (now - lastFrame) / 1000);
        lastFrame = now;

        checkIntegrity();
        updateBuffs(now);

        if (autoadd > 0) {
            count += autoadd * getBoostMultiplier() * Math.min(dt, 1);
            commit();
        }

        if (boost) pulseGlow();
        drawRain(dt);
        render();

        glowContainer.style.display = boost ? "block" : "none";

        if (now - lastSave > 1000) {
            saveCount();
            lastSave = now;
        }

        rafId = requestAnimationFrame(gameLoop);
    }

    function upgrade(i) {
        if (cheated) return;
        const item = data[i];
        const price = currentCost(item);

        if (item.purchased >= item.buycap) {
            alert(item.buylimitmsg);
            return;
        }
        if (count < price) {
            alert("You don't have enough money");
            return;
        }

        count -= price;
        item.purchased++;
        commit();

        saveProgress();
        recalcStats();
        render();
    }

    function makeUpgradeButtons() {
        upgradesContainer.innerHTML = "";

        data.forEach((item, i) => {
            const upgradeBox = document.createElement("div");
            upgradeBox.className = "upgrades";

            const info = document.createElement("span");
            info.textContent = item.upgrade;
            info.className = "upgrade-name";

            const newBtn = document.createElement("button");
            newBtn.className = "upgrade-btn";
            newBtn.title = item.description;
            newBtn.onclick = () => upgrade(i);

            item.btn = newBtn;

            upgradeBox.appendChild(info);
            upgradeBox.appendChild(newBtn);
            upgradesContainer.appendChild(upgradeBox);
        });

        refreshUpgradeButtons();
    }

    function rebirth_render() {
        if (!rebirth_btn) {
            rebirth_btn = document.createElement("button");
            rebirth_btn.textContent = "Rebirth";
            rebirth_btn.title = "Would you like to rebirth?";
            rebirth_btn.classList.add("rebirth-btn");
            rebirth_btn.addEventListener("click", rebirth_logic);
            rebirth_area.appendChild(rebirth_btn);
            void rebirth_btn.offsetWidth;
        }

        const canRebirth = !cheated && count >= REBIRTH_COST;
        rebirth_btn.classList.toggle("visible", canRebirth);
        rebirth_btn.disabled = !canRebirth;
    }

    function rebirth_logic() {
        if (cheated) return;
        if (count >= REBIRTH_COST) {
            count = 0;
            rebirthed = true;
            commit();
            saveProgress();
            setStage("bash");
        }
    }

    function init() {
        inited = true;
        data = UPGRADES.map(u => ({ ...u }));

        count = loadCount();
        rebirthed = localStorage.getItem("rebirthed") === "1";

        const purchased = loadPurchased();
        for (const item of data) {
            item.purchased = purchased[item.upgrade] || 0;
        }

        const sig = localStorage.getItem("sig");
        const hasSave = localStorage.getItem("gameCount") !== null;
        const tampered =
            localStorage.getItem("cheater") === "1" ||
            (hasSave && sig &&
                sig !== sign(count, JSON.stringify(purchasedMap()), rebirthed) &&
                sig !== sign(count, JSON.stringify(legacyPurchasedMap()), rebirthed));

        localStorage.removeItem("gamedata");
        localStorage.removeItem("gameDataHasCached");

        recalcStats();
        commit();
        if (tampered) flagCheat("save file tampered");

        saveProgress();
        makeUpgradeButtons();
        render();

        window.addEventListener("resize", resizeRain);
        resizeRain();

        btn.addEventListener("click", (e) => {
            if (!data.length) return;
            if (!registerClick(e)) return;
            addMoney(inc);
        });
    }

    function start() {
        if (!inited) init();
        running = true;
        lastFrame = performance.now();
        updateTimerId = setInterval(updateBoost, 1000);
        rafId = requestAnimationFrame(gameLoop);
    }

    function stop() {
        running = false;
        cancelAnimationFrame(rafId);
        clearInterval(updateTimerId);
        for (const el of parallelograms.slice()) removeParallelogram(el);
        boost = false;
        hideBoostChip();
        glowContainer.style.display = "none";
        rainCtx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
        rainWasActive = false;
    }

    return { start, stop };
})();

STAGES.bash = (() => {
    const input = document.getElementById("cmd");
    const output = document.getElementById("output");
    const bash = document.getElementById("bash");
    const promptEl = document.querySelector(".prompt");

    const PASSWORD_SALT = "fakebash-v1";
    const ADMIN_HASH = "8f6c66774a8c84dd1e92b56244edcc13a72a6b4c387188c77ea247bb50af80ea";

    const SHA_K = [];
    const SHA_H = [];
    for (let n = 2, count = 0; count < 64; n++) {
        let isPrime = true;
        for (let d = 2; d * d <= n; d++) {
            if (n % d === 0) {
                isPrime = false;
                break;
            }
        }
        if (!isPrime) continue;
        if (count < 8) SHA_H[count] = (Math.pow(n, 1 / 2) * 2 ** 32) | 0;
        SHA_K[count] = (Math.pow(n, 1 / 3) * 2 ** 32) | 0;
        count++;
    }

    function rotr(x, n) {
        return (x >>> n) | (x << (32 - n));
    }

    function sha256(text) {
        const bytes = Array.from(new TextEncoder().encode(text));
        const bitLength = bytes.length * 8;
        bytes.push(0x80);
        while (bytes.length % 64 !== 56) bytes.push(0);
        for (let i = 7; i >= 0; i--) bytes.push(i > 3 ? 0 : (bitLength >>> (i * 8)) & 0xff);

        const h = SHA_H.slice();
        const w = new Array(64);

        for (let off = 0; off < bytes.length; off += 64) {
            for (let i = 0; i < 16; i++) {
                w[i] =
                    (bytes[off + 4 * i] << 24) |
                    (bytes[off + 4 * i + 1] << 16) |
                    (bytes[off + 4 * i + 2] << 8) |
                    bytes[off + 4 * i + 3];
            }
            for (let i = 16; i < 64; i++) {
                const s0 = rotr(w[i - 15], 7) ^ rotr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
                const s1 = rotr(w[i - 2], 17) ^ rotr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
                w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0;
            }

            let [a, b, c, d, e, f, g, hh] = h;
            for (let i = 0; i < 64; i++) {
                const S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
                const ch = (e & f) ^ (~e & g);
                const t1 = (hh + S1 + ch + SHA_K[i] + w[i]) | 0;
                const S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
                const maj = (a & b) ^ (a & c) ^ (b & c);
                const t2 = (S0 + maj) | 0;
                hh = g;
                g = f;
                f = e;
                e = (d + t1) | 0;
                d = c;
                c = b;
                b = a;
                a = (t1 + t2) | 0;
            }
            const added = [a, b, c, d, e, f, g, hh];
            for (let i = 0; i < 8; i++) h[i] = (h[i] + added[i]) | 0;
        }

        return h.map((x) => (x >>> 0).toString(16).padStart(8, "0")).join("");
    }

    function checkAdminPassword(attempt) {
        return sha256(PASSWORD_SALT + attempt) === ADMIN_HASH;
    }

    const HOMES = { user: ["home", "user"], admin: ["root"] };

    let currentUser = "user";
    let HOME = [...HOMES.user];
    let cwd = [...HOME];
    let waitingForPassword = false;

    const history = [];
    let historyIndex = 0;

    const fs = {
        home: {
            user: {
                documents: {
                    "todo.txt": "Find the secret",
                    projects: {
                        DO_NOT_LOOK: {
                            secret: {
                                supersecret: {
                                    "secret.txt": "The password is 00110110 00110010 00100000 00110101 00111000 00100000 00110110 01000011 00100000 00110111 01000001 00100000 00110101 01000001 00100000 00110101 00110111 00100000 00110100 01000101 00100000 00110111 00111001 00100000 00110101 01000001 00100000 00110101 00111000 00100000 00110101 00110010 00100000 00110111 00110111 00100000 00110101 00111001 00100000 00110101 00111000 00100000 00110100 01000101 00100000 00110111 01000001 00100000 00110110 00110100 00100000 00110011 00110010 00100000 00110011 00111001 00100000 00110111 00111001 00100000 00110101 01000001 00100000 00110100 00110100 00100000 00110100 00110101 00100000 00110111 00111001 00100000 00110100 01000100 00100000 00110011 00110011 00100000 00110100 00110010 00100000 00110111 00110011 00100000 00110110 00110011 00100000 00110011 00110010 00100000 00110101 00110010 00100000 00110111 00110110 00100000 00110110 00110010 00100000 00110110 01000101 00100000 00110101 00110010 00100000 00110110 01000110 00100000 00110101 00111001 00100000 00110101 00110111 00100000 00110100 01000101 00100000 00110111 00110010"
                                }
                            }
                        }
                    }
                },
                pictures: {
                    "cat.txt": "Not here"
                }
            }
        },
        etc: {
            "hostname": "fakebash"
        }
    };

    function resolvePath(str) {
        let parts;
        if (str.startsWith("/")) parts = [];
        else if (str === "~" || str.startsWith("~/")) {
            parts = [...HOME];
            str = str.slice(1);
        } else parts = [...cwd];

        for (const seg of str.split("/")) {
            if (seg === "" || seg === ".") continue;
            if (seg === "..") parts.pop();
            else parts.push(seg);
        }
        return parts;
    }

    function getNode(parts) {
        let node = fs;
        for (const seg of parts) {
            if (typeof node !== "object" || !(seg in node)) return undefined;
            node = node[seg];
        }
        return node;
    }

    function isDir(node) {
        return typeof node === "object" && node !== null;
    }

    function isForbidden(parts) {
        return parts[0] === "root" && currentUser !== "admin";
    }

    function pathString(parts) {
        return "/" + parts.join("/");
    }

    function promptText() {
        const isInHome = HOME.every((seg, i) => cwd[i] === seg);
        let dir;
        if (isInHome) {
            const rest = cwd.slice(HOME.length);
            dir = rest.length ? "~/" + rest.join("/") : "~";
        } else {
            dir = pathString(cwd);
        }
        const symbol = currentUser === "admin" ? "#" : "$";
        return `${currentUser}@fakebash:${dir}${symbol}`;
    }

    function updatePrompt() {
        promptEl.textContent = promptText();
    }

    function switchUser(name) {
        currentUser = name;
        HOME = [...HOMES[name]];
        cwd = [...HOME];
        updatePrompt();
    }

    const commands = {
        help: () =>
            "Available commands:\n" +
            "  help           show this message\n" +
            "  ls [dir]       list files\n" +
            "  cd [dir]       change directory\n" +
            "  cat <file>     show a file's contents\n" +
            "  echo <text>    print text\n" +
            "  whoami         show current user\n" +
            "  su <user>      switch user\n" +
            "  exit           log out of the current user\n" +
            "  pwd            print working directory\n" +
            "  date           show the current date and time\n" +
            "  clear          clear the screen",

        ls: (args) => {
            const target = args[0] ? resolvePath(args[0]) : cwd;
            if (isForbidden(target)) return `ls: cannot open directory '${args[0] ?? "."}': Permission denied`;
            const node = getNode(target);
            if (node === undefined) return `ls: cannot access '${args[0]}': No such file or directory`;
            if (!isDir(node)) return args[0];
            const names = Object.keys(node).map((name) => (isDir(node[name]) ? name + "/" : name));
            return names.join("  ");
        },

        cd: (args) => {
            if (args.length === 0) {
                cwd = [...HOME];
                updatePrompt();
                return null;
            }
            const target = resolvePath(args[0]);
            if (isForbidden(target)) return `bash: cd: ${args[0]}: Permission denied`;
            const node = getNode(target);
            if (node === undefined) return `bash: cd: ${args[0]}: No such file or directory`;
            if (!isDir(node)) return `bash: cd: ${args[0]}: Not a directory`;
            cwd = target;
            updatePrompt();
            return null;
        },

        cat: (args) => {
            if (!args[0]) return "cat: missing file name";
            const target = resolvePath(args[0]);
            if (isForbidden(target)) return `cat: ${args[0]}: Permission denied`;
            const node = getNode(target);
            if (node === undefined) return `cat: ${args[0]}: No such file or directory`;
            if (isDir(node)) return `cat: ${args[0]}: Is a directory`;
            return node;
        },

        su: (args) => {
            const name = args[0] ?? "admin";
            if (name === currentUser) return null;
            if (name !== "admin") return `su: user ${name} does not exist`;
            waitingForPassword = true;
            input.type = "password";
            promptEl.textContent = "Password:";
            return null;
        },

        exit: () => {
            if (currentUser === "user") return "exit: you are not logged in as another user";
            switchUser("user");
            return null;
        },

        echo: (args) => args.join(" "),
        whoami: () => currentUser,
        pwd: () => pathString(cwd),
        date: () => new Date().toString(),

        clear: () => {
            output.innerHTML = "";
            return null;
        }
    };

    function print(text) {
        const p = document.createElement("p");
        p.textContent = text;
        output.appendChild(p);
    }

    function run(rawInput) {
        print(`${promptText()} ${rawInput}`);

        const trimmed = rawInput.trim();
        if (trimmed === "") return;

        const [name, ...args] = trimmed.split(/\s+/);
        const command = Object.prototype.hasOwnProperty.call(commands, name) ? commands[name] : null;

        if (command) {
            const result = command(args);
            if (result !== null) print(result);
        } else {
            print(`bash: ${name}: command not found`);
        }
    }

    function submitPassword(attempt) {
        waitingForPassword = false;
        input.type = "text";
        print("Password:");

        if (checkAdminPassword(attempt)) {
            switchUser("admin");
            setStage("crypto");
        } else {
            print("su: Authentication failure");
            updatePrompt();
        }
    }

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const value = input.value;
            input.value = "";

            if (waitingForPassword) {
                submitPassword(value);
            } else {
                run(value);
                if (value.trim() !== "") history.push(value);
                historyIndex = history.length;
            }
            bash.scrollTop = bash.scrollHeight;
        } else if (waitingForPassword) {
            return;
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                input.value = history[historyIndex];
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex < history.length - 1) {
                historyIndex++;
                input.value = history[historyIndex];
            } else {
                historyIndex = history.length;
                input.value = "";
            }
        }
    });

    bash.addEventListener("click", () => input.focus());

    function start() {
        updatePrompt();
        input.focus();
    }

    function stop() {}

    return { start, stop };
})();

STAGES.crypto = (() => {
    const canvas = document.getElementById("matrix");
    const ctx = canvas.getContext("2d");

    const charArray = "ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const fontSize = 16;
    let rainDrops = [];

    const upgradeDefs = [];
    const COST_GROWTH = 1.15;
    const state = { balance: 0, owned: {} };

    const el = {
        balance: document.getElementById("balance"),
        rate: document.getElementById("rate"),
        perClick: document.getElementById("per-click"),
        list: document.getElementById("upgrade-list"),
        empty: document.getElementById("upgrade-empty"),
    };
    const buttons = {};

    const fmt = n => n >= 1e6 ? n.toExponential(2).replace("+", "") : Math.floor(n).toLocaleString();
    const owned = id => state.owned[id] || 0;
    const cost = u => Math.ceil(u.baseCost * Math.pow(COST_GROWTH, owned(u.id)));
    const perClick = () => 1 + upgradeDefs.filter(u => u.type === "click").reduce((s, u) => s + u.gain * owned(u.id), 0);
    const perSecond = () => upgradeDefs.filter(u => u.type === "auto").reduce((s, u) => s + u.gain * owned(u.id), 0);

    let inited = false;
    let rainTimerId = 0;
    let tickTimerId = 0;
    let lastTick = 0;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        rainDrops = Array.from({ length: Math.ceil(canvas.width / fontSize) }, () => Math.random() * -50);
    }

    function drawRain() {
        ctx.shadowBlur = 0;
        ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < rainDrops.length; i++) {
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            const lead = Math.random() > 0.98;
            ctx.fillStyle = lead ? "#d6ffe0" : "#00ff41";
            ctx.shadowBlur = lead ? 10 : 0;
            ctx.shadowColor = "#9dffb0";
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) rainDrops[i] = 0;
            rainDrops[i]++;
        }
    }

    function render() {
        el.balance.textContent = fmt(state.balance);
        el.rate.textContent = fmt(perSecond());
        el.perClick.textContent = fmt(perClick());
        upgradeDefs.forEach(u => {
            const b = buttons[u.id];
            b.querySelector(".name").textContent = u.name;
            b.querySelector(".owned").textContent = owned(u.id);
            b.querySelector(".desc").textContent = u.desc;
            b.querySelector(".cost").textContent = fmt(cost(u)) + " ₿";
            b.disabled = state.balance < cost(u);
        });
    }

    function buy(u) {
        const c = cost(u);
        if (state.balance < c) return;
        state.balance -= c;
        state.owned[u.id] = owned(u.id) + 1;
        render();
    }

    function init() {
        inited = true;

        upgradeDefs.forEach(u => {
            const li = document.createElement("li");
            const b = document.createElement("button");
            b.className = "upgrade";
            b.innerHTML = '<span class="name"></span><span class="owned"></span><span class="desc"></span><span class="cost"></span>';
            b.addEventListener("click", () => buy(u));
            li.appendChild(b);
            el.list.appendChild(li);
            buttons[u.id] = b;
        });
        el.empty.hidden = upgradeDefs.length > 0;

        window.addEventListener("resize", resizeCanvas);
    }

    function start() {
        if (!inited) init();
        resizeCanvas();
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            rainTimerId = setInterval(drawRain, 33);
        }
        lastTick = performance.now();
        tickTimerId = setInterval(() => {
            const now = performance.now();
            state.balance += perSecond() * (now - lastTick) / 1000;
            lastTick = now;
            render();
        }, 100);
        render();
    }

    function stop() {
        clearInterval(rainTimerId);
        clearInterval(tickTimerId);
    }

    return { start, stop };
})();

setStage(localStorage.getItem("stage") || "money");
