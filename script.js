const marqueeText = "HINK"; // The text to animate
const spaceBetween = "   "; // Define the space between repetitions
const marqueeContainer = document.querySelector('.marquee');

// Function to create spans for each letter
function createMarquee() {
    marqueeContainer.innerHTML = ''; // Clear existing content
    const fullText = marqueeText + spaceBetween; // Add space for separation
    const textToDisplay = fullText + fullText; // Duplicate the text for seamless scrolling

    for (let letter of textToDisplay) {
        const span = document.createElement('span');
        span.className = 'letter'; // Add class for styling
        span.textContent = letter;
        marqueeContainer.appendChild(span);
    }
}

// Function to animate the marquee
function animateMarquee() {
    const totalWidth = marqueeContainer.scrollWidth; // Get the total width of the marquee
    const containerWidth = marqueeContainer.clientWidth; // Get the width of the visible area

    // Set the initial position
    marqueeContainer.style.transform = `translateX(${containerWidth}px)`;

    // Start the animation
    let startTime = null;
    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

        // Calculate the new position
        const position = (containerWidth + elapsed / 10) % (totalWidth / 2); // Adjust speed by changing the divisor
        marqueeContainer.style.transform = `translateX(${-position}px)`;

        requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

window.onload = () => {
    createMarquee();
    animateMarquee();
};
