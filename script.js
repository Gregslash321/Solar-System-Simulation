// A simple example using a 2D canvas, but a real simulation would use a 3D library like Three.js.
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
    color: '#FFD700' // Gold
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
    // Note: The distances are scaled for visual clarity, not to scale with actual astronomical units.
];

// Main animation loop
function animate() {
    requestAnimationFrame(animate);

    ctx.fillStyle = '#0d0d1a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the Sun
    ctx.beginPath();
    ctx.arc(sun.x, sun.y, sun.radius, 0, Math.PI * 2);
    ctx.fillStyle = sun.color;
    ctx.shadowBlur = 50;
    ctx.shadowColor = sun.color;
    ctx.fill();
    ctx.closePath();
    ctx.shadowBlur = 0; // Reset shadow for other objects

    // Update and draw planets
    planets.forEach(planet => {
        if (rotationEnabled) {
            planet.angle += planet.speed;
        }

        // Calculate planet position
        const planetX = sun.x + Math.cos(planet.angle) * planet.distance;
        const planetY = sun.y + Math.sin(planet.angle) * planet.distance;

        // Draw the planet's orbit path (optional)
        ctx.beginPath();
        ctx.arc(sun.x, sun.y, planet.distance, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.stroke();

        // Draw the planet itself
        ctx.beginPath();
        ctx.arc(planetX, planetY, planet.radius, 0, Math.PI * 2);
        ctx.fillStyle = planet.color;
        ctx.fill();
        ctx.closePath();
        
        // Add a special detail for Saturn's rings
        if (planet.name === 'Saturn') {
            ctx.beginPath();
            ctx.ellipse(planetX, planetY, planet.radius * 2, planet.radius * 0.7, Math.PI / 4, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.stroke();
            ctx.closePath();
        }
    });
}

// Event listener for the rotation button
document.getElementById('toggle-rotation').addEventListener('click', () => {
    rotationEnabled = !rotationEnabled;
});

// Start the animation
animate();

// Handle window resizing
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    sun.x = canvas.width / 2;
    sun.y = canvas.height / 2;
});
