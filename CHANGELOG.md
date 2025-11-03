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


