document.addEventListener("DOMContentLoaded", () => {

    // 1. Reveal on Scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.15 // Trigger when 15% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, observerOptions);

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => observer.observe(el));

    // 2. Parallax Effect
    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        const parallaxElements = document.querySelectorAll(".parallax");

        parallaxElements.forEach(el => {
            const speed = el.getAttribute("data-speed");
            // Multiply scroll by speed to move images at different rates
            const yPos = -(scrolled * speed / 10);
            el.style.transform = `translateY(${yPos}px)`;
        });
    });
});