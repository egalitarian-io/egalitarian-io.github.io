/* filepath: /home/egalitarian/egalitarian-io.github.io/js/scripts.js */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Hello World Yet Again');

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});