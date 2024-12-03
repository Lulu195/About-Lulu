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
document.addEventListener("DOMContentLoaded", function () {
    // Get the context of the canvas
    const ctx = document.getElementById('hobbyChart').getContext('2d');

    // Define the hobby data
    const hobbyData = {
        labels: ['Photography', 'Videography', 'Cycling', 'Development / Coding', 'Data Analysis', 'Process Optimisation', 'Tech Research'],
        datasets: [{
            label: 'Hobbies',
            data: [4, 2, 3, 1, 4, 5, 5], // The points for each hobby
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(0, 255, 255, 0.2)' // Add a different color for each hobby
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(0, 255, 255, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Create the chart
    const hobbyChart = new Chart(ctx, {
        type: 'bar', // This defines the type of chart (Bar chart)
        data: hobbyData,
        options: {
            scales: {
                y: {
                    beginAtZero: true, // Starts the y-axis at 0
                    max: 6 // Set max value for better visual scaling
                }
            },
            plugins: {
                legend: {
                    position: 'top', // Adjust the legend position if needed
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.raw + " points"; // Custom tooltip format
                        }
                    }
                }
            }
        } 
    }); 
});

// Skills Chart for the Interactive Chart
document.addEventListener("DOMContentLoaded", function () {
    // Get the context of the canvas
    const ctx = document.getElementById('skillsChart').getContext('2d');

    // Define the skills data
    const skillsData = {
        labels: ['Continuous Process Improvement', 'Cross-Functional Team Management', 'Strategic Data Analysis', 'Microsoft Office Pack', 'Scheduling', 'PowerBI', 'Vendor Management'],
        datasets: [{
            label: 'Skills',
            data: [4, 5, 4, 3, 3, 4, 2], // The points for each skill
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(0, 255, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(0, 255, 255, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Create the chart
    const skillsChart = new Chart(ctx, {
        type: 'bar', // This defines the type of chart (Bar chart)
        data: skillsData,
        options: {
            scales: {
                y: {
                    beginAtZero: true, // Starts the y-axis at 0
                    max: 6 // Set max value for better visual scaling
                }
            },
            plugins: {
                legend: {
                    position: 'top', // Adjust the legend position if needed
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.raw + " points"; // Custom tooltip format
                        }
                    }
                }
            }
        }
    });
});

// Alert Box
function dismissAlert() {
    const alertBox = document.getElementById('alertBox');
    alertBox.classList.add('fade-out');
    alertBox.addEventListener('animationend', () => {
        alertBox.style.display = 'none';
    });
}
