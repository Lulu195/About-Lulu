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

// Generic showing/hiding navbar on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    navbar.classList.add('hide-navbar'); // Scroll down, hide navbar
  } else {
    navbar.classList.remove('hide-navbar'); // Scroll up, show navbar
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);


// Hobbies script for the Interactive Graph
var ctx = document.getElementById('hobbyChart').getContext('2d');
var hobbyChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Photography', 'Videography', 'Cycling', 'Development/Coding', 'Data Analysis', 'Process Optimization', 'Tech'],
    datasets: [{
      label: 'Hobbies',
      data: [4, 2, 3, 1, 4, 5, 5],
      backgroundColor: ['#ff5733', '#33c4ff', '#9e33ff', '#ff9933', '#33ff66', '#ff3366', '#33cc99'],
      borderColor: ['#ff5733', '#33c4ff', '#9e33ff', '#ff9933', '#33ff66', '#ff3366', '#33cc99'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
