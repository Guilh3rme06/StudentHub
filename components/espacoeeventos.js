document.addEventListener('DOMContentLoaded', () => {
    const carouselSlider = document.querySelector('.carousel-slider');
    const carouselItems = document.querySelectorAll('.carousel-item');

    // Check if the carousel exists before trying to run its logic
    if (carouselSlider && carouselItems.length > 0) {
        let currentIndex = 0;
        const totalItems = carouselItems.length;
        const intervalTime = 3000; // 3 seconds per slide

        // Function to determine how many items are visible based on screen width
        const getItemsPerView = () => {
            if (window.innerWidth >= 992) { // Desktop
                return 4;
            } else if (window.innerWidth >= 768) { // Tablet
                return 2;
            } else { // Mobile
                return 1;
            }
        };

        let itemsPerView = getItemsPerView();

        const slideCarousel = () => {
            // Calculate the width of one item, including its margin
            // The margin is 1rem (16px) on each side for desktop/tablet, 0 for mobile
            const itemMargin = (window.innerWidth >= 768) ? 32 : 0; // 2rem total margin
            const itemWidth = carouselItems[0].offsetWidth + itemMargin;

            currentIndex = (currentIndex + 1) % totalItems;

            // When the last item (or last visible set of items) is reached, reset to the start
            // This creates a continuous loop.
            if (currentIndex >= totalItems - itemsPerView + 1) { // Adjusted condition
                 // If we're about to show items beyond the end, reset to the first logical item
                carouselSlider.style.transition = 'none'; // Disable transition for instant reset
                carouselSlider.style.transform = `translateX(0)`; // Reset position
                currentIndex = 0; // Reset index
                
                // Re-enable transition after a very brief moment
                setTimeout(() => {
                    carouselSlider.style.transition = 'transform 0.8s ease-in-out';
                }, 50); // Small delay to ensure transition is toggled
            } else {
                 carouselSlider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            }
        };

        // Start the automatic carousel
        let carouselInterval = setInterval(slideCarousel, intervalTime);

        // Optional: Pause on hover
        carouselSlider.addEventListener('mouseover', () => {
            clearInterval(carouselInterval);
        });

        carouselSlider.addEventListener('mouseleave', () => {
            carouselInterval = setInterval(slideCarousel, intervalTime);
        });

        // Handle resize to adjust itemsPerView and reset position
        window.addEventListener('resize', () => {
            const newItemsPerView = getItemsPerView();
            if (itemsPerView !== newItemsPerView) {
                itemsPerView = newItemsPerView;
                // Reset carousel to the beginning to avoid strange jumps on resize
                carouselSlider.style.transition = 'none';
                carouselSlider.style.transform = `translateX(0)`;
                currentIndex = 0;
                setTimeout(() => {
                    carouselSlider.style.transition = 'transform 0.8s ease-in-out';
                }, 50);
            }
        });
    }

    // Smooth scroll for anchor links (if you add them to your page)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Ensure contact links work
    const contactLinks = document.querySelectorAll('.contact-link-header, .contact-cta .btn');
    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only prevent default if it's not a real link to another page
            if (link.getAttribute('href') === 'contactos.html' || link.getAttribute('href') === '#') {
                e.preventDefault();
                window.location.href = 'contactos.html'; // Redirect to actual contacts page
            }
        });
    });
});