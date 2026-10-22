const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

const matrixChars = "ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charArray = matrixChars.split("");
const fontSize = 16;
const rainDrops = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initializeDrops();
}

function initializeDrops() {
  const columns = canvas.width / fontSize;
  rainDrops.length = 0;
  for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
  }
}

function clearScreen() {
  // Reset the glow so the fade rectangle doesn't flash the whole screen
  ctx.shadowBlur = 0;
  ctx.shadowColor = 'transparent';
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function setTextStyle(isLeadingEdge) {
  ctx.font = fontSize + 'px monospace';
  if (isLeadingEdge) {
    ctx.fillStyle = '#fff';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#fff';
  } else {
    ctx.fillStyle = '#0F0';
    ctx.shadowBlur = 0;
  }
}

function updateDropPosition(index) {
  if (rainDrops[index] * fontSize > canvas.height && Math.random() > 0.975) {
    rainDrops[index] = 0;
  }
  rainDrops[index]++;
}

function renderMatrixRain() {
  for (let i = 0; i < rainDrops.length; i++) {
    const text = charArray[Math.floor(Math.random() * charArray.length)];
    const isLeadingEdge = Math.random() > 0.98;

    setTextStyle(isLeadingEdge);
    ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
    updateDropPosition(i);
  }
}

function draw() {
  clearScreen();
  renderMatrixRain();
}

function initApplication() {
  resizeCanvas();
  self.addEventListener('resize', resizeCanvas);
  setInterval(draw, 33);
}

initApplication();
