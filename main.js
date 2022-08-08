ScrollReveal().reveal('.navbar', { duration: 2000, origin: 'bottom' });
ScrollReveal().reveal('.header-content-left', { distance: '300px', duration: 2000, origin: 'top' });
ScrollReveal().reveal('.header-content-right', { distance: '300px', duration: 2000, origin: 'right' });
ScrollReveal().reveal('.header-btn', { delay: 1000, duration: 2000, origin: 'bottom' });
ScrollReveal().reveal('#testimonial', { distance: '300px', duration: 2000, origin: 'left', viewFactor: 0.2});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});