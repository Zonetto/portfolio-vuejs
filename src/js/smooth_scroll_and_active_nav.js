document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href').substring(1); // Get the ID of the target section
        const targetSection = document.getElementById(targetId);

        // Scroll smoothly to the section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Update active class for clicked link
        document.querySelectorAll('.link').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// Highlight the active link based on the current section in view
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.link');

const observerOptions = {
    root: null, // Use the viewport as the container
    threshold: 0.5 // Trigger when 50% of the section is in view
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Find the corresponding nav link and update the active class
            const activeLink = document.querySelector(`.link[href="#${entry.target.id}"]`);
            navLinks.forEach(link => link.classList.remove('active'));
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, observerOptions);

// Observe each section
sections.forEach(section => observer.observe(section));