const marqueeText = "HINK"; // The text to animate
const marqueeContainer = document.querySelector('.marquee');

// Function to create spans for each letter
function createMarquee() {
    marqueeContainer.innerHTML = ''; // Clear existing content
    for (let letter of marqueeText) {
        const span = document.createElement('span');
        span.className = 'letter'; // Add class for styling
        span.textContent = letter;
        marqueeContainer.appendChild(span);
    }
}

// Function to animate letters
function animateLetters() {
    const letters = marqueeContainer.querySelectorAll('.letter');
    let delay = 0;

    // Animate each letter appearing
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.opacity = 1; // Fade in the letter
            letter.style.transform = `translateX(0)`; // Move to the center
        }, delay);
        delay += 500; // Increase delay for the next letter
    });

    // Reset after all letters have been animated
    setTimeout(() => {
        delay = 0; // Reset delay for disappearing letters
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.opacity = 0; // Hide letters again
                letter.style.transform = `translateX(-100vw)`; // Move to the left
            }, delay);
            delay += 500; // Increase delay for the next letter
        });
        
        // Restart animation after a delay
        setTimeout(() => {
            // Move letters back to the right for the next cycle
            letters.forEach((letter) => {
                letter.style.opacity = 0; // Reset opacity
                letter.style.transform = `translateX(100vw)`; // Move off-screen to the right
            });
            animateLetters(); // Restart the animation
        }, letters.length * 500 + 1000); // Wait for all letters to disappear
    }, letters.length * 500 + 1000); // Wait for all letters to appear
}

window.onload = () => {
    createMarquee();
    animateLetters();
};
