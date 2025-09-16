// A single object to hold all text translations
const translations = {
    en: {
        siteTitle: 'Cosmic Canvas',
        nav: {
            home: 'Home',
            simulation: 'Simulation',
            about: 'About'
        },
        home: {
            tagline: 'Where the Universe Is Your Palette.',
            launchBtn: 'Launch Simulation',
            feature1Title: 'Explore',
            feature1Desc: 'Journey through breathtaking replicas of real-world star systems, galaxies, and nebulae. Discover the cosmos from a new perspective.',
            feature2Title: 'Create',
            feature2Desc: 'Build your own celestial masterpieces. Arrange planets, stars, and black holes to craft unique solar systems and watch them come to life.',
            feature3Title: 'Learn',
            feature3Desc: 'Dive into a vast database of cosmic knowledge. Learn about the science behind planets, stars, and the fundamental laws that govern the universe.'
        },
        simulation: {
            toggleBtn: 'Toggle Rotation',
            controlText: 'Use your mouse to pan and zoom.'
        },
        about: {
            missionTitle: 'Our Mission',
            missionDesc: 'Cosmic Canvas was created to make the universe accessible and understandable to everyone through an interactive, educational tool. We believe that by providing a platform to explore and create, we can inspire a new generation of astronomers and dreamers.',
            techTitle: 'The Technology',
            techDesc: 'The simulation is built using the **HTML5 Canvas API**, which allows us to render dynamic, interactive graphics directly in your browser. Our custom **JavaScript** engine handles all the physics calculations, orbital mechanics, and user interactions, bringing the simulation to life.',
            scaleTitle: 'A Note on Scale',
            scaleDesc: 'While our simulation strives for accuracy in its principles, please note that the sizes and distances of celestial bodies are not to scale. If they were, the Sun would be a tiny dot, and Earth would be invisible! Our goal is to provide a compelling visual experience that helps you grasp the scale and beauty of the cosmos.'
        },
        planets: [
            { name: 'The Sun', description: 'The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process.', gif: 'https://media.giphy.com/media/xT39Da5W1mR2hJ3K12/giphy.gif' },
            { name: 'Mercury', description: 'Mercury is the smallest planet in the Solar System and the one closest to the Sun. It has a very thin atmosphere, which means it experiences extreme temperature variations.', gif: 'https://media.giphy.com/media/3o7TKr3nzbh5qjBPv2/giphy.gif' },
            { name: 'Venus', description: 'Venus is the second planet from the Sun. It is the hottest planet in our solar system, with a thick, toxic atmosphere that traps heat in a runaway greenhouse effect.', gif: 'https://media.giphy.com/media/xT39Da5W1mR2hJ3K12/giphy.gif' },
            { name: 'Earth', description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. Its atmosphere, rich with oxygen and water, makes it habitable.', gif: 'https://media.giphy.com/media/l4pTsh4FuKxR6YcLD/giphy.gif' },
            { name: 'Mars', description: 'Mars is the fourth planet from the Sun. Known as the "Red Planet" due to iron oxide on its surface, it has polar ice caps and a thin atmosphere.', gif: 'https://media.giphy.com/media/l4pTsh4FuKxR6YcLD/giphy.gif' },
            { name: 'Jupiter', description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a Great Red Spot—a massive, persistent storm larger than Earth.', gif: 'https://media.giphy.com/media/3o7TKr3nzbh5qjBPv2/giphy.gif' },
            { name: 'Saturn', description: 'Saturn is the sixth planet from the Sun, best known for its extensive ring system. It is a gas giant with a composition similar to Jupiter.', gif: 'https://media.giphy.com/media/xT39Da5W1mR2hJ3K12/giphy.gif' },
            { name: 'Uranus', description: 'Uranus is the seventh planet from the Sun. It is an ice giant that rotates on its side, with a faint ring system and numerous moons.', gif: 'https://media.giphy.com/media/l4pTsh4FuKxR6YcLD/giphy.gif' },
            { name: 'Neptune', description: 'Neptune is the eighth and farthest known planet from the Sun. It is an ice giant known for its powerful supersonic winds, the fastest in the Solar System.', gif: 'https://media.giphy.com/media/xT39Da5W1mR2hJ3K12/giphy.gif' }
        ]
    },
    ar: {
        siteTitle: 'اللوحة الكونية',
        nav: {
            home: 'الرئيسية',
            simulation: 'المحاكاة',
            about: 'حول'
        },
        home: {
            tagline: 'حيث الكون هو لوحتك.',
            launchBtn: 'تشغيل المحاكاة',
            feature1Title: 'اكتشف',
            feature1Desc: 'سافر عبر نسخ مذهلة لأنظمة نجمية ومجرات وسدم حقيقية. اكتشف الكون من منظور جديد.',
            feature2Title: 'صمم',
            feature2Desc: 'ابن روائعك السماوية الخاصة. رتب الكواكب والنجوم والثقوب السوداء لإنشاء أنظمة شمسية فريدة وشاهدها وهي تنبض بالحياة.',
            feature3Title: 'تعلم',
            feature3Desc: 'اغوص في قاعدة بيانات واسعة من المعرفة الكونية. تعلم عن العلم وراء الكواكب والنجوم والقوانين الأساسية التي تحكم الكون.'
        },
        simulation: {
            toggleBtn: 'تبديل الدوران',
            controlText: 'استخدم الماوس للتحريك والتكبير.'
        },
        about: {
            missionTitle: 'مهمتنا',
            missionDesc: 'تم إنشاء "اللوحة الكونية" لجعل الكون متاحًا ومفهومًا للجميع من خلال أداة تفاعلية وتعليمية. نحن نؤمن بأنه من خلال توفير منصة للاستكشاف والإنشاء، يمكننا إلهام جيل جديد من الفلكيين والحالمين.',
            techTitle: 'التقنية',
            techDesc: 'تم بناء المحاكاة باستخدام **HTML5 Canvas API**، مما يتيح لنا عرض رسومات ديناميكية وتفاعلية مباشرة في متصفحك. يدير محرك **JavaScript** المخصص لدينا جميع حسابات الفيزياء وميكانيكا المدارات وتفاعلات المستخدم، مما يجعل المحاكاة تنبض بالحياة.',
            scaleTitle: 'ملاحظة حول المقياس',
            scaleDesc: 'بينما تسعى محاكاتنا إلى الدقة في مبادئها، يرجى ملاحظة أن أحجام ومسافات الأجرام السماوية ليست على مقياس حقيقي. إذا كانت كذلك، فستكون الشمس نقطة صغيرة، والأرض غير مرئية! هدفنا هو توفير تجربة بصرية مقنعة تساعدك على فهم مقياس الكون وجماله.'
        },
        planets: [
            { name: 'الشمس', description: 'الشمس هي النجم في مركز النظام الشمسي. وهي عبارة عن كرة شبه مثالية من البلازما الساخنة، مع حركة الحمل الحراري الداخلية التي تولد مجالًا مغناطيسيًا عبر عملية دينامو.', gif: 'https://media.giphy.com/media/xT39Da5W1mR2hJ3K12/giphy.gif' },
            { name: 'عطارد', description: 'عطارد هو أصغر كوكب في النظام الشمسي والأقرب إلى الشمس. له غلاف جوي رقيق جداً، مما يعني أنه يعاني من تقلبات حرارية شديدة.', gif: 'https://media.giphy.com/media/3o7TKr3nzbh5qjBPv2/giphy.gif' },
            { name: 'الزهرة', description: 'الزهرة هو ثاني كوكب من الشمس. وهو أكثر الكواكب حرارة في نظامنا الشمسي، وله غلاف جوي سميك وسام يحتفظ بالحرارة في تأثير الاحتباس الحراري الجامح.', gif: 'https://media.giphy.com/media/xT39Da5W1mR2hJ3K12/giphy.gif' },
            { name: 'الأرض', description: 'الأرض هي ثالث كوكب من الشمس والوحيد المعروف بإيواء الحياة. غلافها الجوي الغني بالأكسجين والماء يجعلها صالحة للعيش.', gif: 'https://media.giphy.com/media/l4pTsh4FuKxR6YcLD/giphy.gif' },
            { name: 'المريخ', description: 'المريخ هو رابع كوكب من الشمس. يُعرف باسم "الكوكب الأحمر" بسبب أكسيد الحديد على سطحه، وله قبعات جليدية قطبية وغلاف جوي رقيق.', gif: 'https://media.giphy.com/media/l4pTsh4FuKxR6YcLD/giphy.gif' },
            { name: 'المشتري', description: 'المشتري هو خامس كوكب من الشمس والأكبر في النظام الشمسي. وهو عملاق غازي ذو بقعة حمراء كبيرة—عاصفة هائلة ومستمرة أكبر من الأرض.', gif: 'https://media.giphy.com/media/3o7TKr3nzbh5qjBPv2/giphy.gif' },
            { name: 'زحل', description: 'زحل هو سادس كوكب من الشمس، ويُعرف بنظامه الحلقي الواسع. وهو عملاق غازي ذو تركيبة مماثلة للمشتري.', gif: 'https://media.giphy.com/media/xT39Da5W1mR2hJ3K12/giphy.gif' },
            { name: 'أورانوس', description: 'أورانوس هو سابع كوكب من الشمس. وهو عملاق جليدي يدور على جانبه، وله نظام حلقي خافت والعديد من الأقمار.', gif: 'https://media.giphy.com/media/l4pTsh4FuKxR6YcLD/giphy.gif' },
            { name: 'نبتون', description: 'نبتون هو ثامن وأبعد كوكب معروف عن الشمس. وهو عملاق جليدي يُعرف برياحه الأسرع من الصوت، وهي الأسرع في النظام الشمسي.', gif: 'https://media.giphy.com/media/xT39Da5W1mR2hJ3K12/giphy.gif' }
        ]
    }
};

let currentLanguage = 'en';

function updateContent() {
    const lang = translations[currentLanguage];
    if (!lang) return;

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = (currentLanguage === 'ar') ? 'rtl' : 'ltr';

    document.getElementById('site-title').textContent = lang.siteTitle;
    document.getElementById('nav-home').textContent = lang.nav.home;
    document.getElementById('nav-sim').textContent = lang.nav.simulation;
    document.getElementById('nav-about').textContent = lang.nav.about;

    if (document.querySelector('.home-content')) {
        document.getElementById('hero-tagline').textContent = lang.home.tagline;
        document.getElementById('launch-btn').textContent = lang.home.launchBtn;
        document.getElementById('feature-1-title').textContent = lang.home.feature1Title;
        document.getElementById('feature-1-desc').textContent = lang.home.feature1Desc;
        document.getElementById('feature-2-title').textContent = lang.home.feature2Title;
        document.getElementById('feature-2-desc').textContent = lang.home.feature2Desc;
        document.getElementById('feature-3-title').textContent = lang.home.feature3Title;
        document.getElementById('feature-3-desc').textContent = lang.home.feature3Desc;
    } else if (document.getElementById('simulation-container')) {
        document.getElementById('toggle-rotation').textContent = lang.simulation.toggleBtn;
        document.getElementById('control-text').textContent = lang.simulation.controlText;
    } else if (document.querySelector('.about-content')) {
        document.getElementById('mission-title').textContent = lang.about.missionTitle;
        document.getElementById('mission-desc').innerHTML = lang.about.missionDesc;
        document.getElementById('tech-title').textContent = lang.about.techTitle;
        document.getElementById('tech-desc').innerHTML = lang.about.techDesc;
        document.getElementById('scale-title').textContent = lang.about.scaleTitle;
        document.getElementById('scale-desc').textContent = lang.about.scaleDesc;
    }
}

window.changeLanguage = function(lang) {
    currentLanguage = lang;
    updateContent();
};

function setupParallax() {
    const parallaxLayers = document.querySelectorAll('.parallax-bg');
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        parallaxLayers.forEach((layer, index) => {
            let speed = (index + 1) * 0.1;
            const yPos = -(scrollTop * speed);
            layer.style.transform = `translateY(${yPos}px)`;
        });
    });
}

function setupSimulation() {
    const container = document.getElementById('simulation-container');
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let rotationEnabled = true;

    const solarSystemData = {
        sun: {
            x: canvas.width / 2,
            y: canvas.height / 2,
            radius: 30,
            color: '#FFD700'
        },
        planets: [
            { distance: 60, radius: 4, color: '#A9A9A9', speed: 0.03, angle: 0 },
            { distance: 90, radius: 6, color: '#DAA520', speed: 0.015, angle: 0 },
            { distance: 130, radius: 8, color: '#4169E1', speed: 0.01, angle: 0 },
            { distance: 180, radius: 6.5, color: '#FF4500', speed: 0.008, angle: 0 },
            { distance: 250, radius: 20, color: '#A0522D', speed: 0.004, angle: 0 },
            { distance: 350, radius: 18, color: '#E5C088', speed: 0.003, angle: 0 },
            { distance: 420, radius: 14, color: '#87CEEB', speed: 0.002, angle: 0 },
            { distance: 480, radius: 14, color: '#4682B4', speed: 0.0015, angle: 0 }
        ]
    };

    let scale = 1.0;
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;

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

        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        stars.forEach(star => {
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

        ctx.save();
        ctx.translate(canvas.width / 2 + offsetX, canvas.height / 2 + offsetY);
        ctx.scale(scale, scale);

        ctx.beginPath();
        ctx.arc(0, 0, solarSystemData.sun.radius, 0, Math.PI * 2);
        ctx.fillStyle = solarSystemData.sun.color;
        ctx.shadowBlur = 50;
        ctx.shadowColor = solarSystemData.sun.color;
        ctx.fill();
        ctx.closePath();
        ctx.shadowBlur = 0;

        solarSystemData.planets.forEach((planet, index) => {
            if (rotationEnabled) {
                planet.angle += planet.speed;
            }

            const planetX = Math.cos(planet.angle) * planet.distance;
            const planetY = Math.sin(planet.angle) * planet.distance;

            ctx.beginPath();
            ctx.arc(0, 0, planet.distance, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(planetX, planetY, planet.radius, 0, Math.PI * 2);
            ctx.fillStyle = planet.color;
            ctx.fill();
            ctx.closePath();
            
            if (index === 5) { // Saturn
                ctx.beginPath();
                ctx.ellipse(planetX, planetY, planet.radius * 2, planet.radius * 0.7, Math.PI / 4, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
                ctx.stroke();
                ctx.closePath();
            }
        });
        ctx.restore();
    }

    canvas.addEventListener('click', (e) => {
        const clickX = e.clientX - canvas.getBoundingClientRect().left;
        const clickY = e.clientY - canvas.getBoundingClientRect().top;
        
        const transformedX = (clickX - (canvas.width / 2 + offsetX)) / scale;
        const transformedY = (clickY - (canvas.height / 2 + offsetY)) / scale;
        
        let foundPlanet = false;

        solarSystemData.planets.forEach((planet, index) => {
            const planetX = Math.cos(planet.angle) * planet.distance;
            const planetY = Math.sin(planet.angle) * planet.distance;

            const distance = Math.sqrt((transformedX - planetX) ** 2 + (transformedY - planetY) ** 2);
            
            if (distance < planet.radius) {
                foundPlanet = true;
                const planetData = translations[currentLanguage].planets[index + 1];
                planetInfoBox.classList.remove('hidden');
                planetName.textContent = planetData.name;
                planetDescription.textContent = planetData.description;
                planetGif.src = planetData.gif;
                return;
            }
        });
        
        const sunDistance = Math.sqrt((transformedX - 0) ** 2 + (transformedY - 0) ** 2);
        if (sunDistance < solarSystemData.sun.radius) {
            foundPlanet = true;
            const sunData = translations[currentLanguage].planets[0];
            planetInfoBox.classList.remove('hidden');
            planetName.textContent = sunData.name;
            planetDescription.textContent = sunData.description;
            planetGif.src = sunData.gif;
        }

        if (!foundPlanet) {
            planetInfoBox.classList.add('hidden');
        }
    });

    document.getElementById('toggle-rotation').addEventListener('click', () => { rotationEnabled = !rotationEnabled; });
    document.addEventListener('mousedown', (e) => { isDragging = true; lastX = e.clientX; lastY = e.clientY; });
    document.addEventListener('mousemove', (e) => { if (isDragging) { const deltaX = e.clientX - lastX; const deltaY = e.clientY - lastY; offsetX += deltaX; offsetY += deltaY; lastX = e.clientX; lastY = e.clientY; }});
    document.addEventListener('mouseup', () => { isDragging = false; });
    document.addEventListener('wheel', (e) => { e.preventDefault(); const zoomSpeed = 0.001; scale -= e.deltaY * zoomSpeed; if (scale < 0.1) scale = 0.1; if (scale > 5.0) scale = 5.0; });
    window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });

    generateStars();
    animate();
}

if (document.querySelector('.home-content')) {
    setupParallax();
} else if (document.getElementById('simulation-container')) {
    setupSimulation();
}

document.addEventListener('DOMContentLoaded', () => {
    updateContent();
});
