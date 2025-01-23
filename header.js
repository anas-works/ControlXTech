

// Custom Cursor
// Create the custom cursor container
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor-circle");

// Create the inner dot and append it to the cursor
const innerDot = document.createElement("div");
innerDot.classList.add("inner-dot");
cursor.appendChild(innerDot);

// Append the custom cursor to the body
document.body.appendChild(cursor);

// Variables to track cursor position
let mouseX = 0;
let mouseY = 0;
let outerX = 0;
let outerY = 0;

// Track the actual mouse movement for the dot
document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;

  // Move the inner dot immediately
  // innerDot.style.left = `${mouseX}px`;
  // innerDot.style.top = `${mouseY}px`;
});

// Update the outer circle position with a slight delay
function animateOuterCircle() {
  // Gradually move the outer circle towards the mouse position
  outerX += (mouseX - outerX) * 0.5; // Adjust "0.1" for more or less delay
  outerY += (mouseY - outerY) * 0.5;

  // Apply the updated position to the outer circle
  cursor.style.left = `${outerX}px`;
  cursor.style.top = `${outerY}px`;

  // Continue the animation loop
  requestAnimationFrame(animateOuterCircle);
}

// Start the animation loop
animateOuterCircle();