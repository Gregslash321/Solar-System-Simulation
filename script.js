// Function to handle the parallax animation
function setupParallax() {
    const parallaxLayers = document.querySelectorAll('.parallax-bg');
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        parallaxLayers.forEach((layer, index) => {
            let speed = (index + 1) * 0.1; // Speed increases for each layer
            const yPos = -(scrollTop * speed);
            layer.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Function to handle the 2D simulation
function setupSimulation() {
    const container = document.getElementById('simulation-container');
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let rotationEnabled = true;

    // Define celestial bodies with descriptions and GIF URLs
    const sun = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 30,
        color: '#FFD700',
        name: 'The Sun',
        description: 'The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process.',
        gif: 'https://media.giphy.com/media/xT39Da5W1mR2hJ3K12/giphy.gif'
    };

    const planets = [
        { name: 'Mercury', distance: 60, radius: 4, color: '#A9A9A9', speed: 0.03, angle: 0, description: 'Mercury is the smallest planet in the Solar System and the one closest to the Sun. It has a very thin atmosphere, which means it experiences extreme temperature variations.', gif: 'https://media.giphy.com/media/3o7TKr3nzbh5qjBPv2/giphy.gif' },
        { name: 'Venus', distance: 90, radius: 6, color: '#DAA520', speed: 0.015, angle: 0, description: 'Venus is the second planet from the Sun. It is the hottest planet in our solar system, with a thick, toxic atmosphere that traps heat in a runaway greenhouse effect.', gif: 'https://media.giphy.com/media/xT39Da5W1mR2hJ3K12/giphy.gif' },
        { name: 'Earth', distance: 130, radius: 8, color: '#4169E1', speed: 0.01, angle: 0, description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. Its atmosphere, rich with oxygen and water, makes it habitable.', gif: 'https://media.giphy.com/media/l4pTsh4FuKxR6YcLD/giphy.gif' },
        { name: 'Mars', distance: 180, radius: 6.5, color: '#FF4500', speed: 0.008, angle: 0, description: 'Mars is the fourth planet from the Sun. Known as the "Red Planet" due to iron oxide on its surface, it has polar ice caps and a thin atmosphere.', gif: 'https://media.giphy.com/media/l4pTsh4FuKxR6YcLD/giphy.gif' },
        { name: 'Jupiter', distance: 250, radius: 20, color: '#A0522D', speed: 0.004, angle: 0, description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a Great Red Spot—a massive, persistent storm larger than Earth.', gif: 'https://media.giphy.com/media/3o7TKr3nzbh5qjBPv2/giphy.gif' },
        { name: 'Saturn', distance: 350, radius: 18, color: '#E5C088', speed: 0.003, angle: 0, description: 'Saturn is the sixth planet from the Sun, best known for its extensive ring system. It is a gas giant with a composition similar to Jupiter.', gif: 'https://media.giphy.com/media/xT39Da5W1mR2hJ3K12/giphy.gif' },
        { name: 'Uranus', distance: 420, radius: 14, color: '#87CEEB', speed: 0.002, angle: 0, description: 'Uranus is the seventh planet from the Sun. It is an ice giant that rotates on its side, with a faint ring system and numerous moons.', gif: 'https://media.giphy.com/media/l4pTsh4FuKxR6YcLD/giphy.gif' },
        { name: 'Neptune', distance: 480, radius: 14, color: '#4682B4', speed: 0.0015, angle: 0, description: 'Neptune is the eighth and farthest known planet from the Sun. It is an ice giant known for its powerful supersonic winds, the fastest in the Solar System.', gif: 'https://media.giphy.com/media/xT39Da5W1mR2hJ3K12/giphy.gif' }
    ];

    // Variables for camera controls
    let scale = 1.0;
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;

    // Variables for the star field
    const stars = [];
    const numStars = 1000;
    const starSpeed = 0.5;

    function generateStars() {
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width - canvas.width / 2,
                y: Math.random() * canvas.height - canvas.height / 2,
                z: Math.random() * canvas.width,
            });
        }
    }

    const planetInfoBox = document.getElementById('planet-info');
    const planetName = document.getElementById('planet-name');
    const planetDescription = document.getElementById('planet-description');
    const planetGif = document.getElementById('planet-gif');

    function animate() {
        requestAnimationFrame(animate);

        ctx.fillStyle = '#0d0d1a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // --- Draw the moving star field ---
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        stars.forEach(star => {
            // Move the star towards the center (simulating flying through space)
            star.z -= starSpeed;
            if (star.z <= 0) {
                star.z = canvas.width;
                star.x = Math.random() * canvas.width - canvas.width / 2;
                star.y = Math.random() * canvas.height - canvas.height / 2;
            }

            const starX = star.x / star.z * canvas.width;
            const starY = star.y / star.z * canvas.height;
            const starRadius = (1 - star.z / canvas.width) * 2;

            ctx.beginPath();
            ctx.arc(starX, starY, starRadius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fill();
        });
        ctx.restore();

        // --- Draw the solar system objects (planets and sun) ---
        ctx.save();
        ctx.translate(canvas.width / 2 + offsetX, canvas.height / 2 + offsetY);
        ctx.scale(scale, scale);

        // Draw sun
        ctx.beginPath();
        ctx.arc(0, 0, sun.radius, 0, Math.PI * 2);
        ctx.fillStyle = sun.color;
        ctx.shadowBlur = 50;
        ctx.shadowColor = sun.color;
        ctx.fill();
        ctx.closePath();
        ctx.shadowBlur = 0;

        planets.forEach(planet => {
            if (rotationEnabled) {
                planet.angle += planet.speed;
            }

            const planetX = Math.cos(planet.angle) * planet.distance;
            const planetY = Math.sin(planet.angle) * planet.distance;

            // Draw orbit
            ctx.beginPath();
            ctx.arc(0, 0, planet.distance, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.stroke();

            // Draw planet
            ctx.beginPath();
            ctx.arc(planetX, planetY, planet.radius, 0, Math.PI * 2);
            ctx.fillStyle = planet.color;
            ctx.fill();
            ctx.closePath();
            
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

    // New event listener for clicking on planets
    canvas.addEventListener('click', (e) => {
        const clickX = e.clientX - canvas.getBoundingClientRect().left;
        const clickY = e.clientY - canvas.getBoundingClientRect().top;
        
        const transformedX = (clickX - (canvas.width / 2 + offsetX)) / scale;
        const transformedY = (clickY - (canvas.height / 2 + offsetY)) / scale;
        
        let foundPlanet = false;

        planets.forEach(planet => {
            const planetX = Math.cos(planet.angle) * planet.distance;
            const planetY = Math.sin(planet.angle) * planet.distance;

            const distance = Math.sqrt((transformedX - planetX) ** 2 + (transformedY - planetY) ** 2);
            
            if (distance < planet.radius) {
                foundPlanet = true;
                planetInfoBox.classList.remove('hidden');
                planetName.textContent = planet.name;
                planetDescription.textContent = planet.description;
                planetGif.src = planet.gif;
                return;
            }
        });
        
        const sunDistance = Math.sqrt((transformedX - 0) ** 2 + (transformedY - 0) ** 2);
        if (sunDistance < sun.radius) {
            foundPlanet = true;
            planetInfoBox.classList.remove('hidden');
            planetName.textContent = sun.name;
            planetDescription.textContent = sun.description;
            planetGif.src = sun.gif;
        }

        if (!foundPlanet) {
            planetInfoBox.classList.add('hidden');
        }
    });

    // Add event listeners for pan and zoom
    document.getElementById('toggle-rotation').addEventListener('click', () => { rotationEnabled = !rotationEnabled; });
    document.addEventListener('mousedown', (e) => { isDragging = true; lastX = e.clientX; lastY = e.clientY; });
    document.addEventListener('mousemove', (e) => { if (isDragging) { const deltaX = e.clientX - lastX; const deltaY = e.clientY - lastY; offsetX += deltaX; offsetY += deltaY; lastX = e.clientX; lastY = e.clientY; }});
    document.addEventListener('mouseup', () => { isDragging = false; });
    document.addEventListener('wheel', (e) => { e.preventDefault(); const zoomSpeed = 0.001; scale -= e.deltaY * zoomSpeed; if (scale < 0.1) scale = 0.1; if (scale > 5.0) scale = 5.0; });
    window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });

    // Generate stars and start animation
    generateStars();
    animate();
}

// Check which page is loaded and run the correct function
if (document.querySelector('.home-content')) {
    setupParallax();
} else if (document.getElementById('simulation-container')) {
    setupSimulation();
}
