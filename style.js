document.addEventListener("DOMContentLoaded", function() {
    // Animate Skill Bars
    const skillBars = document.querySelectorAll(".skill-bar .skill-progress");
    skillBars.forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = "0"; // Start with 0 width
        setTimeout(() => {
            bar.style.transition = "width 2s ease-in-out";
            bar.style.width = width; // Animate to the defined width
        }, 100); // Small delay to ensure animation is visible
    });

    // Get the menu icon and nav links
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    // Add event listener for the menu icon
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active'); // Toggle animation on icon
        navLinks.classList.toggle('active'); // Show/hide nav links
    });


    // Animate Circular Skills
    const circularSkills = document.querySelectorAll(".circle-skill svg circle:nth-child(2)");
    circularSkills.forEach((circle) => {
        const offset = circle.style.strokeDashoffset;
        circle.style.strokeDashoffset = "339.292"; // Full circle offset
        setTimeout(() => {
            circle.style.transition = "stroke-dashoffset 2s ease-in-out";
            circle.style.strokeDashoffset = offset; // Animate to the correct offset
        }, 100);
    });

    skillBars.forEach((bar) => {
        const targetWidth = parseInt(bar.style.width); // Get target percentage from style.width
        let currentWidth = 0; // Start animation from 0%

        // Set initial width
        bar.style.width = "0";
        bar.style.transition = "width 2s ease-in-out"; // Animation transition

        // Animate the width
        const animationInterval = setInterval(() => {
            if (currentWidth >= targetWidth) {
                clearInterval(animationInterval); // Stop animation when target is reached
                currentWidth = targetWidth; // Ensure it matches exactly
            } else {
                currentWidth += 1; // Increment width
            }

            bar.style.width = `${currentWidth}%`; // Update bar width dynamically
        }, 10); // Adjust interval speed (10ms)
    });

    // Animate Skill Percentages
    const skillPercentages = document.querySelectorAll(".skill-percentage, .circle-percentage");
    skillPercentages.forEach((percentageElement) => {
        const targetPercentage = parseInt(percentageElement.textContent);
        percentageElement.textContent = "0%"; // Start with 0%
        let currentPercentage = 0;

        const increment = targetPercentage / 50; // Adjust speed
        const interval = setInterval(() => {
            currentPercentage += increment;
            if (currentPercentage >= targetPercentage) {
                currentPercentage = targetPercentage;
                clearInterval(interval);
            }
            percentageElement.textContent = `${Math.round(currentPercentage)}%`;
        }, 40); // Interval duration (40ms for smoother animation)
    });





});
/*
const name = document.querySelector("name");
const email = document.querySelector("email");
const Phone = document.querySelector("phone no");
const message = document.querySelector("message");



function sendEmail() {

    const bodyMessage = 'Full Name: $(fullName.value)<br> email: $(email.value)<br> phone no : $(phone.value)<br>'
    email.send({
        Host: "smtp.mailendo.com",
        Username: "kumarprabhat0110@gmail.com",
        Password: "4AC543418B300FEC89FB38B0F1BE01DB17F6",
        To: 'kumarprabhat0110@gmail.com',
        From: "kumarprabhat0110@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => alert(message)
    );
};

from.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
}); */