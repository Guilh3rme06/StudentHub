document.addEventListener('DOMContentLoaded', () => {
    const carouselSlider = document.querySelector('.carousel-slider');
    const carouselItems = document.querySelectorAll('.carousel-item');

    // Verifica se o carrossel existe antes de executar a lógica
    if (carouselSlider && carouselItems.length > 0) {
        let currentIndex = 0;
        const totalItems = carouselItems.length;
        const intervalTime = 3000; // 3 segundos por slide

        // Função para determinar quantos itens são visíveis consoante a largura do ecrã
        const getItemsPerView = () => {
            if (window.innerWidth >= 992) { // Desktop
                return 4;
            } else if (window.innerWidth >= 768) { // Tablet
                return 2;
            } else { // Telemóvel
                return 1;
            }
        };

        let itemsPerView = getItemsPerView();

        const slideCarousel = () => {
            // Calcula a largura de um item, incluindo a margem
            // A margem é 1rem (16px) de cada lado para desktop/tablet, 0 para telemóvel
            const itemMargin = (window.innerWidth >= 768) ? 32 : 0; // 2rem de margem total
            const itemWidth = carouselItems[0].offsetWidth + itemMargin;

            currentIndex = (currentIndex + 1) % totalItems;

            // Quando o último item (ou último conjunto visível de itens) é atingido, volta ao início
            // Isto cria um loop contínuo.
            if (currentIndex >= totalItems - itemsPerView + 1) { // Condição ajustada
                // Se estamos prestes a mostrar itens para além do fim, volta ao primeiro item lógico
                carouselSlider.style.transition = 'none'; // Desativa a transição para reset instantâneo
                carouselSlider.style.transform = `translateX(0)`; // Volta à posição inicial
                currentIndex = 0; // Reinicia o índice
                
                // Reativa a transição após um pequeno momento
                setTimeout(() => {
                    carouselSlider.style.transition = 'transform 0.8s ease-in-out';
                }, 50); // Pequeno atraso para garantir que a transição é alternada
            } else {
                carouselSlider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            }
        };

        // Inicia o carrossel automático
        let carouselInterval = setInterval(slideCarousel, intervalTime);

        // Opcional: Pausa ao passar o rato por cima
        carouselSlider.addEventListener('mouseover', () => {
            clearInterval(carouselInterval);
        });

        carouselSlider.addEventListener('mouseleave', () => {
            carouselInterval = setInterval(slideCarousel, intervalTime);
        });

        // Lida com o redimensionamento para ajustar itemsPerView e reiniciar a posição
        window.addEventListener('resize', () => {
            const newItemsPerView = getItemsPerView();
            if (itemsPerView !== newItemsPerView) {
                itemsPerView = newItemsPerView;
                // Reinicia o carrossel para o início para evitar saltos estranhos ao redimensionar
                carouselSlider.style.transition = 'none';
                carouselSlider.style.transform = `translateX(0)`;
                currentIndex = 0;
                setTimeout(() => {
                    carouselSlider.style.transition = 'transform 0.8s ease-in-out';
                }, 50);
            }
        });
    }

    // Scroll suave para links âncora (se os adicionares à tua página)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Garante que os links de contacto funcionam
    const contactLinks = document.querySelectorAll('.contact-link-header, .contact-cta .btn');
    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Só previne o comportamento padrão se não for um link real para outra página
            if (link.getAttribute('href') === 'contactos.html' || link.getAttribute('href') === '#') {
                e.preventDefault();
                window.location.href = 'contactos.html'; // Redireciona para a página de contactos
            }
        });
    });
});