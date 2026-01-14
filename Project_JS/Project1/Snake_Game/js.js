const board = document.querySelector('.board');
const scoreEl = document.getElementById('score');
const highScoreEl = document.getElementById('high-score');
const timeEl = document.getElementById('time');
const pauseBtn = document.getElementById('pause');
const restartBtn = document.getElementById('restart');

const ROWS = 12;
const COLS = 16;

let blocks = {};
let snake;
let food;
let direction;
let gameLoop;
let speed;
let score;
let seconds = 0;
let paused = false;

// ================= INIT =================
function init() {
  board.innerHTML = '';
  blocks = {};
  snake = [
    { x: 5, y: 7 },
    { x: 5, y: 8 },
    { x: 5, y: 9 }
  ];
  direction = 'left';
  score = 0;
  speed = 400;
  seconds = 0;
  paused = false;
  scoreEl.textContent = score;

  createGrid();
  spawnFood();
  render();
  startGame();
}

// ================= GRID =================
function createGrid() {
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const div = document.createElement('div');
      div.classList.add('block');
      board.appendChild(div);
      blocks[`${r}-${c}`] = div;
    }
  }
}

// ================= RENDER =================
function render() {
  Object.values(blocks).forEach(b =>
    b.classList.remove('snake-head', 'snake-body', 'food')
  );

  snake.forEach((s, i) => {
    blocks[`${s.x}-${s.y}`]?.classList.add(
      i === 0 ? 'snake-head' : 'snake-body'
    );
  });

  blocks[`${food.x}-${food.y}`]?.classList.add('food');
}

// ================= FOOD =================
function spawnFood() {
  let pos;
  do {
    pos = {
      x: Math.floor(Math.random() * ROWS),
      y: Math.floor(Math.random() * COLS)
    };
  } while (snake.some(s => s.x === pos.x && s.y === pos.y));
  food = pos;
}

// ================= MOVE =================
function moveSnake() {
  if (paused) return;

  const head = snake[0];
  let newHead = { ...head };

  if (direction === 'left') newHead.y--;
  if (direction === 'right') newHead.y++;
  if (direction === 'up') newHead.x--;
  if (direction === 'down') newHead.x++;

  if (
    newHead.x < 0 ||
    newHead.y < 0 ||
    newHead.x >= ROWS ||
    newHead.y >= COLS ||
    snake.some(s => s.x === newHead.x && s.y === newHead.y)
  ) {
    endGame();
    return;
  }

  snake.unshift(newHead);

  if (newHead.x === food.x && newHead.y === food.y) {
    score++;
    scoreEl.textContent = score;
    speed = Math.max(100, speed - 20);
    restartLoop();
    spawnFood();
    saveHighScore();
  } else {
    snake.pop();
  }

  render();
}

// ================= GAME LOOP =================
function startGame() {
  gameLoop = setInterval(moveSnake, speed);
  setInterval(() => {
    if (!paused) {
      seconds++;
      const m = String(Math.floor(seconds / 60)).padStart(2, '0');
      const s = String(seconds % 60).padStart(2, '0');
      timeEl.textContent = `${m}:${s}`;
    }
  }, 1000);
}

function restartLoop() {
  clearInterval(gameLoop);
  gameLoop = setInterval(moveSnake, speed);
}

// ================= CONTROLS =================
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft' && direction !== 'right') direction = 'left';
  if (e.key === 'ArrowRight' && direction !== 'left') direction = 'right';
  if (e.key === 'ArrowUp' && direction !== 'down') direction = 'up';
  if (e.key === 'ArrowDown' && direction !== 'up') direction = 'down';
  if (e.key === ' ') paused = !paused;
});

pauseBtn.onclick = () => (paused = !paused);
restartBtn.onclick = init;

// ================= SCORE =================
function saveHighScore() {
  const high = Math.max(
    score,
    Number(localStorage.getItem('snake-high') || 0)
  );
  localStorage.setItem('snake-high', high);
  highScoreEl.textContent = high;
}

highScoreEl.textContent =
  localStorage.getItem('snake-high') || 0;

// ================= END =================
function endGame() {
  clearInterval(gameLoop);
  alert('Game Over');
}

// ================= START =================
init();
