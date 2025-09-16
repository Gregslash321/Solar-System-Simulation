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
        name: 'الشمس',
        description: 'الشمس هي النجم في مركز النظام الشمسي. وهي عبارة عن كرة شبه مثالية من البلازما الساخنة، مع حركة الحمل الحراري الداخلية التي تولد مجالًا مغناطيسيًا عبر عملية دينامو.',
        gif: 'https://media.giphy.com/media/xT39Da5W1mR2hJ3K12/giphy.gif'
    };

    const planets = [
        { name: 'عطارد', distance: 60, radius: 4, color: '#A9A9A9', speed: 0.03, angle: 0, description: 'عطارد هو أصغر كوكب في النظام الشمسي والأقرب إلى الشمس. له غلاف جوي رقيق جداً، مما يعني أنه يعاني من تقلبات حرارية شديدة.', gif: 'https://media.giphy.com/media/3o7TKr3nzbh5qjBPv2/giphy.gif' },
        { name: 'الزهرة', distance: 90, radius: 6, color: '#DAA520', speed: 0.015, angle: 0, description: 'الزهرة هو ثاني كوكب من الشمس. وهو أكثر الكواكب حرارة في نظامنا الشمسي، وله غلاف جوي سميك وسام يحتفظ بالحرارة في تأثير الاحتباس الحراري الجامح.', gif: 'https://media.giphy.com/media/xT39Da5W1mR2hJ3K12/giphy.gif' },
        { name: 'الأرض', distance: 130, radius: 8, color: '#4169E1', speed: 0.01, angle: 0, description: 'الأرض هي ثالث كوكب من الشمس والوحيد المعروف بإيواء الحياة. غلافها الجوي الغني بالأكسجين والماء يجعلها صالحة للعيش.', gif: 'https://media.giphy.com/media/l4pTsh4FuKxR6YcLD/giphy.gif' },
        { name: 'المريخ', distance: 180, radius: 6.5, color: '#FF4500', speed: 0.008, angle: 0, description: 'المريخ هو رابع كوكب من الشمس. يُعرف باسم "الكوكب الأحمر" بسبب أكسيد الحديد على سطحه، وله قبعات جليدية قطبية وغلاف جوي رقيق.', gif: 'https://media.giphy.com/media/l4pTsh4FuKxR6YcLD/giphy.gif' },
        { name: 'المشتري', distance: 250, radius: 20, color: '#A0522D', speed: 0.004, angle: 0, description: 'المشتري هو خامس كوكب من الشمس والأكبر في النظام الشمسي. وهو عملاق غازي ذو بقعة حمراء كبيرة—عاصفة هائلة ومستمرة أكبر من الأرض.', gif: 'https://media.giphy.com/media/3o7TKr3nzbh5qjBPv2/giphy.gif' },
        { name: 'زحل', distance: 350, radius: 18, color: '#E5C088', speed: 0.003, angle: 0, description: 'زحل هو سادس كوكب من الشمس، ويُعرف بنظامه الحلقي الواسع. وهو عملاق غازي ذو تركيبة مماثلة للمشتري.', gif: 'https://media.giphy.com/media/xT39Da5W1mR2hJ3K12/giphy.gif' },
        { name: 'أورانوس', distance: 420, radius: 14, color: '#87CEEB', speed: 0.002, angle: 0, description: 'أورانوس هو سابع كوكب من الشمس. وهو عملاق جليدي يدور على جانبه، وله نظام حلقي خافت والعديد من الأقمار.', gif: 'https://media.giphy.com/media/l4pTsh4FuKxR6YcLD/giphy.gif' },
        { name: 'نبتون', distance: 480, radius: 14, color: '#4682B4', speed: 0.0015, angle: 0, description: 'نبتون هو ثامن وأبعد كوكب معروف عن الشمس. وهو عملاق جليدي يُعرف برياحه الأسرع من الصوت، وهي الأسرع في النظام الشمسي.', gif: 'https://media.giphy.com/media/xT39Da5W1mR2hJ3K12/giphy.gif' }
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
            
            if (planet.name === 'زحل') {
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
