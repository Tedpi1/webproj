document.addEventListener("DOMContentLoaded", function () {
    // FORM VALIDATION - REGISTRATION
    let registrationForm = document.getElementById("registrationForm");
    if (registrationForm) {
        registrationForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Form submitted successfully!");
        });
    }

    // FORM VALIDATION - CONTACT
    let contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Thank you for contacting us!");
        });
    }

    // TOGGLE ACTIVE LINKS
    const navLinks = document.querySelectorAll(".category-link a");
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove("active"));

                // Add active class to clicked link
                this.classList.add("active");
            });
        });
    }

    // SLIDE FUNCTION ON ITEMS
    const container = document.querySelector(".product-container");
    const cards = document.querySelectorAll(".product-card");
    let index = 0;
    const visibleCount = 4; // Number of visible cards
    let slideInterval; // Variable to store interval reference

    if (container && cards.length > 0) {
        function updateVisibility() {
            cards.forEach((card, i) => {
                if (i >= index && i < index + visibleCount) {
                    card.style.display = "block"; // Show the card
                } else {
                    card.style.display = "none"; // Hide the card
                }
            });
        }

        function slideLeft() {
            index++;
            if (index > cards.length - visibleCount) {
                index = 0; // Reset to start when reaching the end
            }
            updateVisibility();
        }

        function startSlideShow() {
            slideInterval = setInterval(slideLeft, 3000); // Start automatic sliding
        }

        function stopSlideShow() {
            clearInterval(slideInterval); // Stop sliding
        }

        updateVisibility(); // Initialize the first view
        startSlideShow(); // Start sliding initially

        // Pause the slide when hovering over any card
        cards.forEach(card => {
            card.addEventListener("mouseenter", stopSlideShow);
            card.addEventListener("mouseleave", startSlideShow);
        });
    }

    // ✅ FIXED COUNTDOWN FUNCTION
    function startCountdown(durationInSeconds) {
        function updateCountdown() {
            if (durationInSeconds <= 0) {
                clearInterval(countdownInterval);
                return; // Stop when countdown reaches 0
            }

            let days = Math.floor(durationInSeconds / (3600 * 24));
            let hours = Math.floor((durationInSeconds % (3600 * 24)) / 3600);
            let minutes = Math.floor((durationInSeconds % 3600) / 60);
            let seconds = durationInSeconds % 60;

            document.getElementById("days").innerText = days.toString().padStart(2, '0');
            document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
            document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

            durationInSeconds--; // Decrease time by 1 second
        }

        // Run every second
        updateCountdown(); // Run immediately so the UI updates instantly
        let countdownInterval = setInterval(updateCountdown, 1000);
    }

    // ✅ Start the countdown: 2 days, 10 hours, 34 minutes, 60 seconds
    startCountdown(10 * 24 * 3600);
});
