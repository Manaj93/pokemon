// Sprite class handles animated characters and objects
class Sprite {
  constructor({
    position,       // Initial position on canvas
    velocity,       // Optional velocity (not used here but useful for future physics)
    image,          // Image source for the sprite
    frames = { max: 1 }, // Frame data for animation (default: single frame)
    sprites = [],   // Optional directional sprite set (up/down/left/right)
  }) {
    this.position = position;
    this.image = image;
    this.frames = { ...frames, val: 0, elapsed: 0 }; // Track current frame and timing
    this.sprites = sprites;

    // Calculate sprite dimensions once image is loaded
    this.image.onload = () => {
      this.width = this.image.width / this.frames.max;
      this.height = this.image.height;
    };

    this.moving = false; // Controls whether animation should play
  }

  // Draw sprite on canvas and handle animation frames
  draw() {
    c.drawImage(
      this.image,
      this.frames.val * this.width, // Source X: current frame
      0,                            // Source Y: top of image
      this.image.width / this.frames.max, // Source width: one frame
      this.image.height,           // Source height: full image
      this.position.x,             // Destination X
      this.position.y,             // Destination Y
      this.image.width / this.frames.max, // Destination width
      this.image.height            // Destination height
    );

    // Skip animation if not moving
    if (!this.moving) return;

    // Advance frame timing
    if (this.frames.max > 1) {
      this.frames.elapsed++;
    }

    // Change frame every 10 ticks
    if (this.frames.elapsed % 10 === 0) {
      if (this.frames.val < this.frames.max - 1) {
        this.frames.val++;
      } else {
        this.frames.val = 0; // Loop back to first frame
      }
    }
  }
}

// Boundary class defines invisible collision zones
class Boundary {
  static width = 48;  // Standard tile width
  static height = 48; // Standard tile height

  constructor({ position }) {
    this.position = position;
    this.width = 48;
    this.height = 48;
  }

  // Draw boundary as transparent rectangle (for debugging)
  draw() {
    c.fillStyle = 'rgb(255, 0, 0, 0.0)'; // Fully transparent red
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
