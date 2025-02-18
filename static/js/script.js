document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Reset previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";

    // Name Validation
    if (name.length < 3) {
        document.getElementById("nameError").innerText = "Name must be at least 3 characters.";
        isValid = false;
    }

    // Email Validation
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email address.";
        isValid = false;
    }

    // Password Validation
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
        isValid = false;
    }

    // Confirm Password Validation
    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        isValid = false;
    }

    // If all fields are valid, submit the form (simulated)
    if (isValid) {
        alert("Form submitted successfully!");
        // Uncomment the line below to actually submit the form
        // document.getElementById("registrationForm").submit();
    }
});



document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been sent.");
    document.getElementById("contactForm").reset();
});


document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll('img.lazy');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.src = image.dataset.src;
                image.classList.remove('lazy');
                observer.unobserve(image);
            }
        });
    });
    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });
});



document.addEventListener("DOMContentLoaded", function () {
    var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.radio');
    let currentSlide = 1;

    // JavaScript for image slider manual navigation
    var manualNav = function (manual) {
        slides.forEach((slide) => {
            slide.classList.remove('active');
            btns.forEach((btn) => {
                btn.classList.remove('active');
            });
        });
        slides[manual].classList.add('active');
        btns[manual].classList.add('active');
    };

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            manualNav(i);
            currentSlide = i;
        });
    });

    // Image autoplay
    var repeat = function () {
        let active = document.getElementsByClassName('active');
        let i = 1;
        var repeater = () => {
            setTimeout(function () {
                [...active].forEach((activeSlide) => {
                    activeSlide.classList.remove('active');
                });
                slides[i].classList.add('active');
                btns[i].classList.add('active');
                i++;
                if (slides.length === i) {
                    i = 0;
                }
                if (i >= slides.length) {
                    return;
                }
                repeater();
            }, 10000); // 10 seconds interval
        };
        repeater();
    };

    repeat();
});


var repeat = function () {
    let active = document.getElementsByClassName('active');
    var repeater = () => {
        setTimeout(function () {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });
            slides[currentSlide].classList.add('active');
            btns[currentSlide].classList.add('active');
            currentSlide++;
            if (slides.length === currentSlide) {
                currentSlide = 0;
            }
            repeater();
        }, 10000); // 10 seconds interval
    };
    repeater();
};

