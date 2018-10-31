let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

let WIDTH = 400;
let HEIGHT = 300;

let player = {
  x: 0,
  y: 0,
  w: 50,
  h: 50,
  color: 'white',
};

let W_DOWN = false;
let S_DOWN = false;
let A_DOWN = false;
let D_DOWN = false;

document.addEventListener('keydown', function(e) {
  switch (e.key) {
    case 'w':
      W_DOWN = true;
      break;
    case 's':
      S_DOWN = true;
      break;
    case 'a':
      A_DOWN = true;
      break;
    case 'd':
      D_DOWN = true;
      break;
  }
});

document.addEventListener('keyup', function(e) {
  switch (e.key) {
    case 'w':
      W_DOWN = false;
      break;
    case 's':
      S_DOWN = false;
      break;
    case 'a':
      A_DOWN = false;
      break;
    case 'd':
      D_DOWN = false;
      break;
  }
});

function paintScene() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

function paintPlayer() {
  ctx.fillStyle = 'white';
  const {x, y, w, h} = player;
  ctx.fillRect(x, y, w, h);
}

function respondToKeys() {
  if (W_DOWN) {
    player.y -= 10;
  }
  if (S_DOWN) {
    player.y += 10;
  }
  if (A_DOWN) {
    player.x -= 10;
  }
  if (D_DOWN) {
    player.x += 10;
  }

  if (player.y > HEIGHT - player.h) {
    player.y = HEIGHT - player.h;
  }

  if (player.x > WIDTH - player.w) {
    player.x = WIDTH - player.w;
  }

  if (player.x < 0) {
    player.x = 0;
  }

  if (player.y < 0) {
    player.y = 0;
  }
}

function loop() {
  paintScene();
  paintPlayer();
  respondToKeys();
  requestAnimationFrame(loop);
}

loop();