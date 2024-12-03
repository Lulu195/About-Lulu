// Smooth scroll for all internal navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        // Smooth scroll to the section
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// Generic Fade-in effect for all elements with the class 'fade-in' when they appear in the viewport
window.addEventListener("load", () => {
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach(element => {
        element.classList.add("fade-in-active");
    });
});

// Generic hover effect for all 'a' and 'button' elements
const clickableElements = document.querySelectorAll("a, button");
clickableElements.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.transform = "scale(1.1)";
        element.style.transition = "transform 0.3s ease";
    });
    element.addEventListener("mouseout", () => {
        element.style.transform = "scale(1)";
    });
});
