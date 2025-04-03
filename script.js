const marqueeText = "HINK"; // The text to animate
const spaceBetween = "\u00A0\u00A0\u00A0"; // Non-breaking spaces for separation
const marqueeContainer = document.querySelector('.marquee');

// Function to create spans for each letter and spaces
function createMarquee() {
    marqueeContainer.innerHTML = ''; // Clear existing content
    const repetitions = 5; // Number of times to repeat the text
    let fullText = '';

    // Build the full text with spaces
    for (let i = 0; i < repetitions; i++) {
        fullText += marqueeText + spaceBetween; // Add "HINK" and space
    }

    // Duplicate the full text for seamless scrolling
    const textToDisplay = fullText + fullText; // Duplicate for seamless scrolling

    for (let i = 0; i < textToDisplay.length; i++) {
        const span = document.createElement('span');
        span.className = 'letter'; // Add class for styling
        span.textContent = textToDisplay[i]; // Set the text content to the letter or space
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
