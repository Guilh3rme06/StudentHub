document.addEventListener('DOMContentLoaded', () => {
    // Carrossel
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-prev-button');
    const nextButton = document.querySelector('.carousel-next-button');
    let currentIndex = 0;
    let itemsPerView = 3; // Padrão para desktop

    const updateItemsPerView = () => {
        if (window.innerWidth <= 768) { // Tablets/Mobile
            itemsPerView = 1; // 1 item em telas menores
        } else { // Desktop
            itemsPerView = 3;
        }

        // Ajusta o currentIndex para evitar exibir espaço em branco no final
        if (currentIndex > carouselItems.length - itemsPerView) {
            currentIndex = Math.max(0, carouselItems.length - itemsPerView);
        }
        updateCarousel();
    };

    const updateCarousel = () => {
        if (carouselItems.length === 0) return; // Proteção contra ausência de itens
        const itemWidth = carouselItems[0].offsetWidth;
        const gap = 20; // O gap definido no CSS
        const totalTranslate = currentIndex * (itemWidth + gap);
        carouselTrack.style.transform = `translateX(-${totalTranslate}px)`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = Math.max(0, currentIndex - 1);
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = Math.min(carouselItems.length - itemsPerView, currentIndex + 1);
        updateCarousel();
    });

    window.addEventListener('resize', updateItemsPerView);
    updateItemsPerView(); // Inicializa a visualização correta

    // FAQ Acordeão
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            question.classList.toggle('active');
            answer.classList.toggle('open');
        });
    });

    // Menu Hambúrguer (para responsividade do header)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link (opcional)
    document.querySelectorAll('.main-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });
});