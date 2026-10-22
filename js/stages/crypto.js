"use strict";

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
