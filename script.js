document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer
    const weddingDate = new Date('March 26, 2027 14:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(timerInterval);
            document.getElementById('countdown').innerHTML = "<h3>Happily Ever After!</h3>";
        }
    }

    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Close mobile menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // RSVP Form Handling
    const rsvpForm = document.getElementById('rsvp-form');
    rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simple validation visualization
        const btn = rsvpForm.querySelector('.submit-btn');
        const originalText = btn.innerText;

        btn.innerText = 'Sending...';
        btn.style.backgroundColor = '#A4C8E1'; // Baby Blue

        // Simulate API call
        setTimeout(() => {
            btn.innerText = 'RSVP Sent!';
            btn.style.backgroundColor = '#556B2F'; // Olive Green

            // Reset form after a delay
            setTimeout(() => {
                rsvpForm.reset();
                btn.innerText = originalText;
                alert("Thank you for your RSVP! We can't wait to see you.");
            }, 1000);
        }, 1500);
    });

    // Smooth Scroll for Anchor Links (Polyfill-like behavior if needed, but CSS handles most)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
