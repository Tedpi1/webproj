document.addEventListener("DOMContentLoaded", function () {
    const aboutContent = document.querySelector(".about-content");
    aboutContent.style.opacity = "0";
    aboutContent.style.transform = "translateY(30px)";
    setTimeout(() => {
        aboutContent.style.transition = "opacity 1.5s ease-out, transform 1.5s ease-out";
        aboutContent.style.opacity = "1";
        aboutContent.style.transform = "translateY(0)";
    }, 500);
});
document.getElementById("appointment-btn").addEventListener("click", function() {
    alert("Appointment booking feature coming soon!");
});
document.querySelectorAll(".team-member").forEach(member => {
    member.addEventListener("mouseover", () => {
        member.style.transform = "scale(1.05)";
        member.style.transition = "0.3s ease-in-out";
    });

    member.addEventListener("mouseout", () => {
        member.style.transform = "scale(1)";
    });
});
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.1)';
        icon.style.transition = '0.3s';
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});

