# 🎮 Pokémon

A fully playable 2D Pokémon-style browser game built with **HTML5 Canvas**, **JavaScript**, **GSAP**, and **Tiled**. Explore a tile-based world, interact with NPCs, and engage in animated turn-based battles — all in a nostalgic retro aesthetic.

---

## ✨ Game Features

### 🌍 Overworld Exploration
- Smooth player movement with directional sprites
- Collision detection with map boundaries and objects
- Foreground layering for immersive depth
- Interactive NPCs with dialogue sequences

### ⚔️ Battle System
- Randomized battle zone triggers
- Turn-based combat with animated attacks
- Health bar UI for both player and enemy
- Attack selection with type indicators
- Victory and fainting transitions with sound and animation

### 🔊 Audio Integration
- Background music for map and battle scenes
- Sound effects for attacks, hits, and victory
- Audio transitions based on game state

### 🧠 Game Architecture
- Modular class system (`Sprite`, `Monster`, `Character`, `Boundary`)
- Frame-controlled sprite animation
- Scene transitions using GSAP
- Dialogue and interaction logic
- Reusable utility functions for collision detection

---

## 🧰 Technologies Used

- **HTML5 Canvas** — for rendering the game world and sprites
- **Vanilla JavaScript** — for game logic and interactivity
- **GSAP** — for smooth animations and transitions
- **Howler.js** — for audio playback
- **Tiled** — for map design and layout

---

## 📁 Project Structure

```
pokemon/
├── index.html
├── index.js
├── battleScene.js
├── classes.js
├── js/
│   └── utils.js
├── data/
│   ├── audio.js
│   ├── attacks.js
│   ├── battleZones.js
│   ├── collisions.js
│   ├── monsters.js
│   ├── characters.js
├── img/
│   ├── Pellet Town.png
│   ├── foregroundObjects.png
│   ├── playerDown.png
│   ├── playerUp.png
│   ├── playerLeft.png
│   ├── playerRight.png
│   ├── battleBackground.png
│   ├── fireball.png
│   ├── villager/
│   └── oldMan/
```

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/ManaJBin/pokemon.git
   cd pokemon
   ```

2. Open `index.html` in your browser.

3. Click anywhere to start the background music and begin exploring!

---

## 📝 Future Improvements

- 🔧 Refactor collision logic into reusable helpers (already started in `utils.js`)
- 🎵 Add more sound effects and ambient music
- 🧠 Expand battle mechanics with more attacks and status effects
- 🗺️ Add additional maps and NPCs
- 💬 Improve dialogue system with branching conversations

---

## 📸 Credits

- Map designed in **Tiled** and exported as PNG
- Sprites inspired by classic **Pokémon** assets
- Audio powered by **Howler.js**
- Animation powered by **GSAP**
