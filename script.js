const container = document.querySelector('.streak-container');

function createStreak() {
    const streak = document.createElement('div');
    streak.classList.add('streak');
    
    // Randomize size, position, and speed
    const size = Math.random() * 200 + 50; // Random height between 50px and 250px
    const top = Math.random() * window.innerHeight;
    const left = Math.random() * window.innerWidth;
    const duration = Math.random() * 0.5 + 3; // Random duration between 5s and 10s

    streak.style.height = `${size}px`;
    streak.style.top = `${top}px`;
    streak.style.left = `${left}px`;
    streak.style.animationDuration = `${duration}s`;

    container.appendChild(streak);

    // Remove streak after animation ends
    setTimeout(() => {
        streak.remove();
    }, duration * 1000);
}

// Create multiple streaks at intervals
setInterval(createStreak, 500);
