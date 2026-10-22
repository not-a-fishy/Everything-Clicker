const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

const charArray = "ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const fontSize = 16;
let rainDrops = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  rainDrops = Array.from({ length: Math.ceil(canvas.width / fontSize) }, () => Math.random() * -50);
}

function drawRain() {
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < rainDrops.length; i++) {
    const text = charArray[Math.floor(Math.random() * charArray.length)];
    const lead = Math.random() > 0.98;
    ctx.fillStyle = lead ? '#d6ffe0' : '#00ff41';
    ctx.shadowBlur = lead ? 10 : 0;
    ctx.shadowColor = '#9dffb0';
    ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) rainDrops[i] = 0;
    rainDrops[i]++;
  }
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setInterval(drawRain, 33);
}

const upgradeDefs = [];

const COST_GROWTH = 1.15;

let state = { balance: 0, owned: {} };

const el = {
  balance: document.getElementById('balance'),
  rate: document.getElementById('rate'),
  perClick: document.getElementById('per-click'),
  list: document.getElementById('upgrade-list'),
  empty: document.getElementById('upgrade-empty'),
};

const fmt = n => n >= 1e6 ? n.toExponential(2).replace('+', '') : Math.floor(n).toLocaleString();

