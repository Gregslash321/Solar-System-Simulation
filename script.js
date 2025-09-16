// A simple example using a 2D canvas with basic pan and zoom functionality.
const container = document.getElementById('simulation-container');
const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
container.appendChild(canvas);

const ctx = canvas.getContext('2d');
let rotationEnabled = true;

// Define celestial bodies with their properties
const sun = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 30,
    color: '#FFD700'
};

const planets = [
    { name: 'Mercury', distance: 60, radius: 4, color: '#A9A9A9', speed: 0.03, angle: 0 },
    { name: 'Venus', distance: 90, radius: 6, color: '#DAA520', speed: 0.015, angle: 0 },
    { name: 'Earth', distance: 130, radius: 8, color: '#4169E1', speed: 0.01, angle: 0 },
    { name: 'Mars', distance: 180, radius: 6.5, color: '#FF4500', speed: 0.008, angle: 0 },
    { name: 'Jupiter', distance: 250, radius: 20, color: '#A0522D', speed: 0.004, angle: 0 },
    { name: 'Saturn', distance: 350, radius: 18, color: '#E5C088', speed: 0.003, angle: 0 },
    { name: 'Uranus', distance: 420, radius: 14, color: '#87CEEB', speed: 0.002, angle: 0 },
    { name: 'Neptune', distance: 480, radius: 14, color: '#4682B4', speed: 0.0015, angle: 0 }
];

// Variables for camera controls
let scale = 1.0;
let offsetX = 0;
let offsetY = 0;
let isDragging = false;
let lastX = 0;
let lastY = 0;

// Main animation loop
function animate() {
    requestAnimationFrame(animate);

    ctx.fillStyle = '#0d0d1a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(canvas.width / 2 + offsetX, canvas.height / 2 + offsetY);
    ctx.scale(scale, scale);

    // Draw the Sun
    ctx.beginPath();
    ctx.arc(0, 0, sun.radius, 0, Math.PI * 2);
    ctx.fillStyle = sun.color;
    ctx.shadowBlur = 50;
    ctx.shadowColor = sun.color;
    ctx.fill();
    ctx.closePath();
    ctx.shadowBlur = 0;

    // Update and draw planets
    planets.forEach(planet => {
        if (rotationEnabled) {
            planet.angle += planet.speed;
        }

        const planetX = Math.cos(planet.angle) * planet.distance;
        const planetY = Math.sin(planet.angle) * planet.distance;

        // Draw the planet's orbit path
        ctx.beginPath();
        ctx.arc(0, 0, planet.distance, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.stroke();

        // Draw the planet itself
        ctx.beginPath();
        ctx.arc(planetX, planetY, planet.radius, 0, Math.PI * 2);
        ctx.fillStyle = planet.color;
        ctx.fill();
        ctx.closePath();
        
        // Add Saturn's rings
        if (planet.name === 'Saturn') {
            ctx.beginPath();
            ctx.ellipse(planetX, planetY, planet.radius * 2, planet.radius * 0.7, Math.PI / 4, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.stroke();
            ctx.closePath();
        }
    });

    ctx.restore();
}

// Event listener for the rotation button
document.getElementById('toggle-rotation').addEventListener('click', () => {
    rotationEnabled = !rotationEnabled;
});

// Event listeners for camera controls (FIXED: Moved to 'document' instead of 'canvas')
document.addEventListener('mousedown', (e) => {
    isDragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaX = e.clientX - lastX;
        const deltaY = e.clientY - lastY;
        offsetX += deltaX;
        offsetY += deltaY;
        lastX = e.clientX;
        lastY = e.clientY;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomSpeed = 0.001;
    scale -= e.deltaY * zoomSpeed;
    if (scale < 0.1) scale = 0.1;
    if (scale > 5.0) scale = 5.0;
});

// Start the animation
animate();

// Handle window resizing
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
