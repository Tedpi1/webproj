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
    if (navLinks.length > 0) { // Ensure at least one link exists
        navLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent page reload
                

                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove("active"));

                // Add active class to clicked link
                this.classList.add("active");
            });
        });
    }
});
