
<script>
    const marqueeText = "HINK"; // The text to animate
    const marqueeContainer = document.querySelector('.marquee');

    // Function to create spans for each letter
    function createMarquee() {
        marqueeContainer.innerHTML = ''; // Clear existing content
        for (let letter of marqueeText) {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.display = 'inline-block'; // Ensure letters are inline
            span.style.opacity = 0; // Start with letters hidden
            marqueeContainer.appendChild(span);
        }
    }

    // Function to animate letters
    function animateLetters() {
        const letters = marqueeContainer.querySelectorAll('span');
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.opacity = 1; // Fade in the letter
                letter.style.transform = `translateX(100vw)`; // Move to the right
                letter.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; // Transition effect
            }, index * 500); // Delay based on index
        });

        // Reset after all letters have been animated
        setTimeout(() => {
            letters.forEach(letter => {
                letter.style.opacity = 0; // Hide letters again
                letter.style.transform = `translateX(-100vw)`; // Move to the left
            });
            setTimeout(animateLetters, 1000); // Restart animation after a delay
        }, letters.length * 500 + 1000); // Wait for all letters to animate
    }

    createMarquee();
    animateLetters();
</script>
