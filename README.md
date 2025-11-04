# Pokémon

A 2D Pokémon-style browser game built with HTML, CSS, JavaScript, and Tiled.

## 🎮 Overview

This project recreates a classic Pokémon-style environment using a single map and a single player character. It features:
- A tile-based world rendered with HTML5 Canvas
- Smooth player movement and collision detection
- Foreground and background layers for visual depth
- Modular class structure for sprites and boundaries
- Battle zone detection and animated transition into battle mode

## 🧰 Technologies Used

- HTML5 Canvas
- Vanilla JavaScript
- CSS
- GSAP (for battle transition animations)
- Tiled (for map design)

## 📁 Project Structure

```
pokemon/
├── index.html
├── style.css
├── index.js
├── classes.js
├── data/
│   ├── collisions.js
│   └── battleZones.js
├── img/
│   ├── Pellet Town.png
│   ├── foregroundObjects.png
│   ├── playerDown.png
│   ├── playerLeft.png
│   ├── playerRight.png
│   ├── playerUp.png
```

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Manaj93/pokemon.git
   cd pokemon
   ```

2. Open `index.html` in your browser.

## 📝 To-Dos

- Fix player sprite spacing: remove extra transparent padding around player image
- Ensure all image assets are fully loaded before calling `animate()`
- Refactor repetitive collision logic into a reusable helper function
- Add walking animation frames for player movement
- Add NPCs or interactive objects with basic collision and dialogue triggers
- Implement map transitions (e.g., entering buildings or changing zones)
- Add sound effects and background music for immersion
- Create a loading screen or splash intro before gameplay starts
- Optimize performance for larger maps and multiple layers
- Add support for multiple player directions (left, right, up) with corresponding sprites
- Build out battle UI and enemy logic after transition
- Add health bars, turn-based actions, and win/loss conditions

## 📸 Credits

- Map created in Tiled and exported as PNG
- Sprites inspired by classic Pokémon assets

