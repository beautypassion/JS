document.addEventListener('click', function(e) {
    const starsContainer = document.getElementById('stars-container');

    for(let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        const size = Math.random() * 6 + 4;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 150 +50;

        const finalX = e.clientX + Math.cos(angle) * distance;
        const finalY = e.clientY + Math.sin(angle) * distance;

        star.style.setProperty('--final-left', `${finalX}px`);
        star.style.setProperty('--final-top', `${finalY}px`);

        star.style.left = `${e.clientX}px`;
        star.style.top = `${e.clientY}px`;

        starsContainer.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 1000);


    }
});