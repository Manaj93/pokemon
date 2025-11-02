# Pokemon

A 2D Pokémon-style game built with HTML, CSS, JavaScript, and Tiled.

## 🎮 Overview

Pokemon is a browser-based RPG-style game inspired by classic Pokémon maps. It features:
- A tile-based world 
- Player movement and collision detection
- Dynamic rendering using HTML5 Canvas

## 🧰 Technologies Used

- HTML5 Canvas
- Vanilla JavaScript
- CSS
- Tiled (for map design)

## 📁 Project Structure

```
pokemon/
├── index.html
├── style.css
├── index.js
├── data/
│   └── collisions.js
├── img/
│   ├── Pellet Town.png
│   ├── playerDown.png
│   ├── playerLeft.png
│   ├── playerRight.png
│   ├── playerUp.png
```

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/ManaJahanbin/pokemon.git
   cd pokemon
   ```

2. Open `index.html` in your browser.

## 📝 To-Dos

- Make boundary blocks visible by adjusting `fillStyle` alpha
- Ensure player dimensions are set before collision detection
- Wait for image assets to load before calling `animate()`
- Refactor repetitive collision logic into a helper function
- Add player animation frames for walking
- Add NPCs or interactive objects
- Implement map transitions (e.g., entering buildings or changing zones)
- Add sound effects and background music
- Create a loading screen or splash intro
- Optimize performance for larger maps

## 📸 Credits

- Map created in Tiled and exported as PNG
- Sprites inspired by classic Pokémon assets

