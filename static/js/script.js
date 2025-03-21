document.addEventListener("DOMContentLoaded", function () {
    // ✅ FORM VALIDATION - REGISTRATION
    let registrationForm = document.getElementById("registrationForm");
    if (registrationForm) {
        registrationForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Form submitted successfully!");
        });
    }

    // ✅ FORM VALIDATION - CONTACT
    let contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you for contacting us!");
        });
    }

    // ✅ TOGGLE ACTIVE LINKS
    const navLinks = document.querySelectorAll(".category-link a");
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                if (this.getAttribute("href") === "#") {
                    event.preventDefault(); // Prevent only if href="#"
                }

                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove("active"));

                // Add active class to clicked link
                this.classList.add("active");
            });
        });
    }

    // ✅ SLIDE FUNCTION ON ITEMS
    const container = document.querySelector(".product-container");
    const cards = document.querySelectorAll(".product-card");
    let index = 0;
    const visibleCount = 4; // Number of visible cards
    let slideInterval;

    if (container && cards.length > 0) {
        function updateVisibility() {
            cards.forEach((card, i) => {
                card.style.display = i >= index && i < index + visibleCount ? "block" : "none";
            });
        }

        function slideLeft() {
            index = (index + 1) % (cards.length - visibleCount + 1); // Loop back
            updateVisibility();
        }

        function startSlideShow() {
            slideInterval = setInterval(slideLeft, 3000);
        }

        function stopSlideShow() {
            clearInterval(slideInterval);
        }

        updateVisibility();
        startSlideShow();

        // Pause when hovering over a card
        cards.forEach(card => {
            card.addEventListener("mouseenter", stopSlideShow);
            card.addEventListener("mouseleave", startSlideShow);
        });
    }

    // ✅ FIXED COUNTDOWN FUNCTION
    function startCountdown(durationInSeconds) {
        function updateCountdown() {
            let daysEl = document.getElementById("days");
            let hoursEl = document.getElementById("hours");
            let minutesEl = document.getElementById("minutes");
            let secondsEl = document.getElementById("seconds");

            if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
                clearInterval(countdownInterval);
                return;
            }

            let days = Math.floor(durationInSeconds / (3600 * 24));
            let hours = Math.floor((durationInSeconds % (3600 * 24)) / 3600);
            let minutes = Math.floor((durationInSeconds % 3600) / 60);
            let seconds = durationInSeconds % 60;

            daysEl.innerText = days.toString().padStart(2, '0');
            hoursEl.innerText = hours.toString().padStart(2, '0');
            minutesEl.innerText = minutes.toString().padStart(2, '0');
            secondsEl.innerText = seconds.toString().padStart(2, '0');

            durationInSeconds--;
        }

        updateCountdown();
        let countdownInterval = setInterval(updateCountdown, 1000);
    }

    // ✅ Start the countdown (2 days, 10 hours, 34 minutes, 60 seconds)
    startCountdown(2 * 24 * 3600 + 10 * 3600 + 34 * 60 + 60);

    // ✅ MEET OUR TEAM JS SCROLL
    
});
