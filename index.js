// Get canvas and context for drawing
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
console.log(gsap);

// Set canvas dimensions
canvas.width = 1024;
canvas.height = 576;

// Convert flat collision data into 2D map
const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, 70 + i));
}

// Convert flat battle zone data into 2D map
const battleZonesMap = [];
for (let i = 0; i < battleZonesData.length; i += 70) {
  battleZonesMap.push(battleZonesData.slice(i, 70 + i));
}
console.log(battleZonesMap);

// Define map offset to align with canvas
const boundaries = [];
const offset = {
  x: -737,
  y: -650,
};

// Create boundary objects from collision map
collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
        })
      );
  });
});

// Create battle zone objects from battle zone map
const battleZones = [];
battleZonesMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      battleZones.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
        })
      );
  });
});

// Fill canvas background
c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);

// Load map and player sprite images
const image = new Image();
image.src = './img/Pellet Town.png';

const forgroundImage = new Image();
forgroundImage.src = './img/foregroundObjects.png';

const playerUpImage = new Image();
playerUpImage.src = './img/playerUp.png';

const playerDownImage = new Image();
playerDownImage.src = './img/playerDown.png';

const playerLeftImage = new Image();
playerLeftImage.src = './img/playerLeft.png';

const playerRightImage = new Image();
playerRightImage.src = './img/playerRight.png';

// Initialize player sprite
const player = new Sprite({
  position: {
    x: canvas.width / 2 - (192 / 4) / 2,
    y: canvas.height / 2 - 68 / 2,
  },
  image: playerDownImage,
  frames: {
    max: 4,
	hold: 10,
  },
  sprites: {
    up: playerUpImage,
    down: playerDownImage,
    left: playerLeftImage,
    right: playerRightImage,
  },
});

// Initialize background and foreground sprites
const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: image,
});

const foreground = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: forgroundImage,
});

// Track key states for movement
const keys = {
  w: { pressed: false },
  a: { pressed: false },
  s: { pressed: false },
  d: { pressed: false },
};

// List of all movable objects
const movables = [background, ...boundaries, foreground, ...battleZones];

// Check for rectangle collision
function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height
  );
}

// Track battle state
const battle = {
  initiated: false,
};

// Main animation loop
function animate() {
  const animationId = window.requestAnimationFrame(animate);
  background.draw();
  boundaries.forEach((boundary) => boundary.draw());
  battleZones.forEach((battleZone) => battleZone.draw());
  player.draw();
  foreground.draw();

  let moving = true;
  player.animate = false;

  // Stop movement if battle is active
  if (battle.initiated) return;

  // Check for battle zone collision and trigger battle
  if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
    for (let i = 0; i < battleZones.length; i++) {
      const battleZone = battleZones[i];
      const overlappingArea =
        (Math.min(
          player.position.x + player.width,
          battleZone.position.x + battleZone.width
        ) -
          Math.max(player.position.x, battleZone.position.x)) *
        (Math.min(
          player.position.y + player.height,
          battleZone.position.y + battleZone.height
        ) -
          Math.max(player.position.y, battleZone.position.y));

      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: battleZone,
        }) &&
        overlappingArea > (player.width * player.height) / 2 &&
        Math.random() < 0.01
      ) {
        console.log('battle');

        // Stop map animation
        window.cancelAnimationFrame(animationId);
        battle.initiated = true;

    // Animate transition to battle
		gsap.to('#overlappingDiv', {
		opacity: 1,
		duration: 0.4,
		repeat: 3,
		yoyo: true,
		onComplete: () => {
			gsap.to('#overlappingDiv', {
			opacity: 1,
			duration: 0.4,
			onComplete: () => {
				animateBattle();  // Start battle animation loop
				gsap.to('#overlappingDiv', {
				opacity: 0,
				duration: 0.4
				});
			}
			});
		}
		});

        break;
      }
    }
  }

  // Movement logic with collision detection
  if (keys.w.pressed && lastKey === 'w') {
    player.animate = true;
    player.image = player.sprites.up;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 3,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }
    if (moving) movables.forEach((movable) => (movable.position.y += 3));
  } else if (keys.s.pressed && lastKey === 's') {
    player.animate = true;
    player.image = player.sprites.down;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 3,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }
    if (moving) movables.forEach((movable) => (movable.position.y -= 3));
  } else if (keys.a.pressed && lastKey === 'a') {
    player.animate = true;
    player.image = player.sprites.left;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x + 3,
              y: boundary.position.y,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }
    if (moving) movables.forEach((movable) => (movable.position.x += 3));
  } else if (keys.d.pressed && lastKey === 'd') {
    player.animate = true;
    player.image = player.sprites.right;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x - 3,
              y: boundary.position.y,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }
    if (moving) movables.forEach((movable) => (movable.position.x -= 3));
  }
}

//animate();

// Load battle background image
const battleBackgroundImage = new Image();
battleBackgroundImage.src = './img/battleBackground.png';

const battleBackground = new Sprite({
	  position: {
			x: 0,
			y: 0,	
	  },
	  image: battleBackgroundImage,
})
// Load enemy sprite (Draggle)
const draggleImage = new Image();
draggleImage.src = './img/draggleSprite.png';
const draggle = new Sprite({
	  position: {
			x: 800,
			y: 100,	
	  },
	  image: draggleImage,
	  frames: {
		max: 4,
		hold: 30,
	  },
	  animate: true,
})
// Load player sprite (Emby)
const embyImage = new Image();
embyImage.src = './img/embySprite.png';
const emby = new Sprite({
	  position: {
			x: 280,
			y: 325,	
	  },
	  image: embyImage,
	  frames: {
		max: 4,
		hold: 30,
	  },
	  animate: true,
})

// Battle animation loop: draws battle background and both sprites
function animateBattle() {
  window.requestAnimationFrame(animateBattle);
  battleBackground.draw();
  draggle.draw();
  emby.draw();
}
// Start battle animation loop (comment out if not in battle mode)
//animate()
animateBattle()


// Track last key pressed for movement direction
let lastKey = '';

// Handle key press events
window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = true;
      lastKey = 'w';
      break;
    case 's':
      keys.s.pressed = true;
      lastKey = 's';
      break;
    case 'a':
      keys.a.pressed = true;
      lastKey = 'a';
      break;
    case 'd':
      keys.d.pressed = true;
      lastKey = 'd';
      break;
  }
});
window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = false;
      lastKey = 'w';
      break;
    case 's':
      keys.s.pressed = false;
      lastKey = 's';
      break;
    case 'a':
      keys.a.pressed = false;
      lastKey = 'a';
      break;
    case 'd':
      keys.d.pressed = false;
      lastKey = 'd';
      break;
  }
});

