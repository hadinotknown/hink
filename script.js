const marqueeText = "HINK"; // Repeat the text for continuous effect
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
function animateMarquee() {
    const letters = marqueeContainer.querySelectorAll('.letter');
    const totalWidth = marqueeContainer.scrollWidth; // Get the total width of the marquee
    marqueeContainer.style.width = `${totalWidth}px`; // Set the width of the container

    // Start the animation
    marqueeContainer.animate([
        { transform: 'translateX(100%)' }, // Start from the right
        { transform: 'translateX(-100%)' } // End at the left
    ], {
        duration: 10000, // Adjust duration for speed
        iterations: Infinity // Loop indefinitely
    });
}

window.onload = () => {
    createMarquee();
    animateMarquee();
};
