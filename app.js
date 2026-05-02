// Change navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '0.5rem 10%';
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.padding = '1rem 10%';
        nav.style.background = 'white';
    }
});

// Simple Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // You'd typically send data to a server here
    alert('Thanks for reaching out! This is a demo, but your message was "sent".');
    
    contactForm.reset();
});

// Smooth Scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});