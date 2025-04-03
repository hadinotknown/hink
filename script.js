const marqueeText = "HINK"; // The text to animate
const spaceBetween = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"; // Non-breaking spaces for separation
const marqueeContainer = document.querySelector('.marquee');

// Function to create the marquee text
function createMarquee() {
    marqueeContainer.innerHTML = ''; // Clear existing content
    const repetitions = 10; // Number of times to repeat the text
    let fullText = '';

    // Build the full text with spaces
    for (let i = 0; i < repetitions; i++) {
        fullText += marqueeText + spaceBetween; // Add "HINK" and space
    }

    // Set the text content twice for seamless scrolling
    marqueeContainer.innerHTML = fullText.trim() + spaceBetween + fullText.trim(); // Duplicate for seamless scrolling
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
