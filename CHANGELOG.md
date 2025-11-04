## [v0.2.1] – 2025-11-03  
🎮 Game On – Player movement and collision system added

**Added**
- Player sprite system with directional animations (up, down, left, right)
- Background and foreground rendering using layered `Sprite` objects
- Collision detection system using `Boundary` class and `rectangularCollision()` logic
- Movement controls via WASD keys with smooth camera scrolling
- Map parsing from `collisions` array into a 2D grid (`collisionsMap`)
- Dynamic boundary generation based on map symbols

**Changed**
- Canvas setup with fixed dimensions and white background fill
- Sprite animation logic with frame cycling based on movement state

**Fixed**
- Placeholder for image spacing issue noted in TODO comment

**Notes**
- This version introduces core gameplay mechanics and sets the foundation for interactive map navigation

## [v0.3.0-alpha] – 2025-11-03  
⚔️ First Encounter – Battle activation logic introduced

**Added**
- Battle zone parsing from `battleZonesData` into a 2D grid (`battleZonesMap`)
- Dynamic battle zone generation using `Boundary` objects based on map symbols
- Collision detection between player and battle zones
- Battle trigger logic based on overlapping area threshold

## [v0.3.0-beta] – 2025-11-04  
⚔️ Battle Begins – Transition system from map to battle sequence implemented

**Added**
- Battle zone detection using `battleZonesMap` and randomized encounter trigger
- Animated transition overlay with GSAP (`#overlappingDiv`) for battle entry effect
- `battle.initiated` flag to control animation flow and prevent movement during transition
`animateBattle()` placeholder for future battle loop logic
- Inline code comments for improved readability and maintainability

README updated to reflect new battle transition feature

**Changed**
Refactored animation loop to support battle handoff and cancel frame logic

Movement logic gated by battle state to prevent unintended input during transition

**Fixed**
Character freeze issue after triggering battle due to premature animation loop exit

**Notes**
This version introduces the first step toward a full battle system, laying groundwork for enemy logic and UI elements

