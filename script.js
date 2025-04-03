const marqueeText = "HINK   HINK   HINK   HINK   HINK   "; // The text to animate
const marqueeContainer = document.querySelector('.marquee');

// Function to create the marquee text
function createMarquee() {
    marqueeContainer.textContent = marqueeText; // Set the text content
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
