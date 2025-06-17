document.addEventListener('DOMContentLoaded', () => {
    // Garante que o script só será executado depois que todo o DOM estiver completamente carregado.

    const carouselSlider = document.querySelector('.carousel-slider'); // Seleciona o contêiner principal do carrossel.
    const carouselItems = document.querySelectorAll('.carousel-item'); // Seleciona todos os itens individuais dentro do carrossel.

    // Verifica se o carrossel e seus itens existem na página antes de tentar manipulá-los.
    if (carouselSlider && carouselItems.length > 0) {
        let currentIndex = 0; // O índice do item atualmente visível no carrossel.
        const totalItems = carouselItems.length; // O número total de itens no carrossel.
        const intervalTime = 3000; // Define o tempo (em milissegundos) para o avanço automático de cada slide (3 segundos).

        /**
         * Determina quantos itens do carrossel devem ser visíveis com base na largura atual da janela.
         * @returns {number} O número de itens a serem exibidos.
         */
        const getItemsPerView = () => {
            if (window.innerWidth >= 992) { // Para telas com largura igual ou superior a 992px (desktop).
                return 4; // Exibe 4 itens.
            } else if (window.innerWidth >= 768) { // Para telas com largura entre 768px e 991px (tablet).
                return 2; // Exibe 2 itens.
            } else { // Para telas com largura inferior a 768px (telemóvel).
                return 1; // Exibe 1 item.
            }
        };

        let itemsPerView = getItemsPerView(); // Inicializa o número de itens visíveis com base na largura inicial da janela.

        /**
         * Responsável por deslizar o carrossel para o próximo conjunto de itens.
         * Lida com o loop contínuo e a transição.
         */
        const slideCarousel = () => {
            // Calcula a largura de um item, incluindo as margens.
            // Se a largura da janela for >= 768px, considera uma margem total de 32px (1rem de cada lado).
            // Caso contrário (telemóvel), a margem é 0.
            const itemMargin = (window.innerWidth >= 768) ? 32 : 0; // 2rem de margem total, se aplicável
            const itemWidth = carouselItems[0].offsetWidth + itemMargin; // Largura do item + margem.

            currentIndex = (currentIndex + 1) % totalItems; // Incrementa o índice, fazendo loop de volta para 0 se atingir o final.

            // Verifica se o carrossel atingiu o "fim" (último conjunto de itens visíveis)
            // e precisa retornar ao início para criar um loop contínuo.
            if (currentIndex >= totalItems - itemsPerView + 1) {
                // Desativa a transição CSS temporariamente para um "salto" instantâneo de volta ao início.
                carouselSlider.style.transition = 'none';
                carouselSlider.style.transform = `translateX(0)`; // Move o carrossel de volta para a posição inicial.
                currentIndex = 0; // Reinicia o índice para o começo.

                // Reativa a transição após um pequeno atraso, permitindo que o reset visual ocorra primeiro.
                setTimeout(() => {
                    carouselSlider.style.transition = 'transform 0.8s ease-in-out';
                }, 50); // Atraso curto para garantir a reativação da transição.
            } else {
                // Move o carrossel horizontalmente para exibir o conjunto de itens correspondente ao `currentIndex`.
                carouselSlider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            }
        };

        // Inicia o carrossel automático, chamando `slideCarousel` a cada `intervalTime`.
        let carouselInterval = setInterval(slideCarousel, intervalTime);

        // Opcional: Pausa o carrossel automático quando o mouse passa por cima dele.
        carouselSlider.addEventListener('mouseover', () => {
            clearInterval(carouselInterval); // Limpa o intervalo, parando o avanço automático.
        });

        // Opcional: Reinicia o carrossel automático quando o mouse sai de cima dele.
        carouselSlider.addEventListener('mouseleave', () => {
            carouselInterval = setInterval(slideCarousel, intervalTime); // Restaura o intervalo.
        });

        // Lida com o redimensionamento da janela para ajustar o número de itens visíveis
        // e reinicia a posição do carrossel para evitar exibições estranhas.
        window.addEventListener('resize', () => {
            const newItemsPerView = getItemsPerView(); // Obtém o novo número de itens visíveis.
            if (itemsPerView !== newItemsPerView) { // Se o número de itens visíveis mudou:
                itemsPerView = newItemsPerView; // Atualiza `itemsPerView`.
                // Reinicia o carrossel para a posição inicial sem transição, evitando saltos visuais.
                carouselSlider.style.transition = 'none';
                carouselSlider.style.transform = `translateX(0)`;
                currentIndex = 0; // Reinicia o índice.
                setTimeout(() => {
                    carouselSlider.style.transition = 'transform 0.8s ease-in-out';
                }, 50); // Reativa a transição.
            }
        });
    }

    // --- Scroll Suave para Links Âncora ---
    // Seleciona todos os links que começam com '#' (links âncora).
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previne o comportamento padrão do clique (salto imediato).
            // Rola suavemente até o elemento cujo ID corresponde ao `href` do link.
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Define o comportamento de rolagem como suave.
            });
        });
    });

    // --- Garante que os links de contacto funcionam ---
    // Seleciona todos os links de contacto (no cabeçalho e na CTA).
    const contactLinks = document.querySelectorAll('.contact-link-header, .contact-cta .btn');
    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Só previne o comportamento padrão e redireciona se o link for para 'contactos.html' ou for um placeholder '#'.
            if (link.getAttribute('href') === 'contactos.html' || link.getAttribute('href') === '#') {
                e.preventDefault(); // Previne o comportamento padrão.
                window.location.href = 'contactos.html'; // Redireciona o utilizador para a página de contactos.
            }
        });
    });
});