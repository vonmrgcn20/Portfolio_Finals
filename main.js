  document.addEventListener('DOMContentLoaded', function () {
            // --- Mobile Menu Toggle ---
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenuButton.addEventListener('click', () => {
                // Use style.display for direct manipulation
                const isDisplayed = mobileMenu.style.display === 'block';
                mobileMenu.style.display = isDisplayed ? 'none' : 'block';
            });

            // --- Close mobile menu on link click ---
            const navLinks = document.querySelectorAll('#mobile-menu a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.style.display = 'none';
                });
            });

            // --- Header Background on Scroll ---
            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // --- Section Fade-in on Scroll ---
            const sections = document.querySelectorAll('.section-fade-in');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Optional: stop observing once visible
                    }
                });
            }, { threshold: 0.1 });

            sections.forEach(section => {
                observer.observe(section);
            });

            // --- Contact Form Submission ---
            const contactForm = document.getElementById('contact-form');
            const formMessage = document.getElementById('form-message');
            contactForm.addEventListener('submit', function (e) {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();

                setTimeout(() => {
                    formMessage.textContent = '';
                }, 5000);
            });
        });