document.addEventListener('DOMContentLoaded', function () {
    // for sidebar nav 
    const navLinks = document.querySelectorAll('.sidebar-nav-item');
    const sections = document.querySelectorAll('[id]');

    // Function to handle smooth scrolling
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100, // Offset for better positioning
                behavior: 'smooth'
            });
        }
    }

    // Function to update active class based on scroll position
    function updateActiveClass() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150; // Offset for better detection
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.sidebar-nav-item[href="#${sectionId}"]`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => link.classList.remove('sidebar-nav-item--active'));
                if (correspondingLink) {
                    correspondingLink.classList.add('sidebar-nav-item--active');
                }
            }
        });
    }

    // Add click event listeners to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('sidebar-nav-item--active'));

            // Add active class to clicked link
            link.classList.add('sidebar-nav-item--active');

            // Smooth scroll to target
            smoothScroll(target);
        });
    });

    // Update active class on scroll
    window.addEventListener('scroll', updateActiveClass);

    // Initial check for active class
    updateActiveClass();






    // for accordion 
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const icon = item.querySelector('.accordion-icon');

        header.addEventListener('click', () => {
            // Close all other accordion items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.accordion-content').classList.remove('active');
                    otherItem.querySelector('.accordion-icon').classList.remove('active');
                }
            });

            // Toggle current accordion item
            content.classList.toggle('active');
            icon.classList.toggle('active');
        });
    });
}); 
