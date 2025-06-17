document.addEventListener('DOMContentLoaded', () => {
    // Garante que o script só será executado depois que todo o DOM estiver carregado.

    // --- Carrossel ---
    // Seleciona os elementos do carrossel
    const carouselTrack = document.querySelector('.carousel-track'); // A faixa que contém todos os itens do carrossel.
    const carouselItems = document.querySelectorAll('.carousel-item'); // Todos os itens individuais do carrossel.
    const prevButton = document.querySelector('.carousel-prev-button'); // Botão para navegar para o item anterior.
    const nextButton = document.querySelector('.carousel-next-button'); // Botão para navegar para o próximo item.

    let currentIndex = 0; // O índice do item atualmente visível ou o primeiro item visível.
    let itemsPerView = 3; // Define o número padrão de itens visíveis para desktops.

    /**
     * Atualiza o número de itens visíveis com base na largura da janela.
     * Ajusta `currentIndex` para evitar problemas de exibição em telas menores.
     */
    const updateItemsPerView = () => {
        if (window.innerWidth <= 768) { // Se a largura da janela for menor ou igual a 768px (tablets/mobile).
            itemsPerView = 1; // Exibe apenas 1 item por vez.
        } else { // Para larguras de janela maiores (desktop).
            itemsPerView = 3; // Exibe 3 itens por vez.
        }

        // Ajusta o currentIndex para garantir que não haja um espaço em branco no final
        // Se o currentIndex atual for maior do que o número de itens menos os itens visíveis,
        // ajusta o currentIndex para o máximo possível para não exibir um "vazio".
        if (currentIndex > carouselItems.length - itemsPerView) {
            currentIndex = Math.max(0, carouselItems.length - itemsPerView);
        }
        updateCarousel(); // Chama a função para atualizar a posição do carrossel com a nova configuração.
    };

    /**
     * Atualiza a posição visual do carrossel aplicando uma transformação CSS.
     */
    const updateCarousel = () => {
        if (carouselItems.length === 0) return; // Se não houver itens no carrossel, a função não faz nada.

        const itemWidth = carouselItems[0].offsetWidth; // Obtém a largura do primeiro item do carrossel.
        const gap = 20; // O espaçamento (gap) entre os itens, conforme definido no CSS.
        // Calcula o total de pixels para transladar (mover) a faixa do carrossel.
        // É o `currentIndex` multiplicado pela largura de um item mais o espaçamento.
        const totalTranslate = currentIndex * (itemWidth + gap);
        // Aplica a transformação CSS para mover a faixa do carrossel horizontalmente.
        carouselTrack.style.transform = `translateX(-${totalTranslate}px)`;
    };

    // Adiciona event listeners para os botões de navegação do carrossel
    prevButton.addEventListener('click', () => {
        // Ao clicar no botão "anterior", decrementa o currentIndex, mas nunca abaixo de 0.
        currentIndex = Math.max(0, currentIndex - 1);
        updateCarousel(); // Atualiza a posição do carrossel.
    });

    nextButton.addEventListener('click', () => {
        // Ao clicar no botão "próximo", incrementa o currentIndex, mas nunca além do limite máximo.
        // O limite máximo é o número total de itens menos o número de itens visíveis, para evitar espaços vazios.
        currentIndex = Math.min(carouselItems.length - itemsPerView, currentIndex + 1);
        updateCarousel(); // Atualiza a posição do carrossel.
    });

    // Adiciona um event listener para o evento de redimensionamento da janela.
    // Isso garante que o carrossel se ajuste corretamente quando a tela muda de tamanho.
    window.addEventListener('resize', updateItemsPerView);
    updateItemsPerView(); // Chama a função uma vez ao carregar a página para definir a visualização inicial.

    // --- FAQ Acordeão ---
    // Seleciona todas as perguntas do FAQ.
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Itera sobre cada pergunta do FAQ para adicionar funcionalidade de acordeão.
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Ao clicar na pergunta:
            const answer = question.nextElementSibling; // Obtém o elemento irmão seguinte (que é a resposta).
            question.classList.toggle('active'); // Alterna a classe 'active' na pergunta para estilização (ex: mudar ícone).
            answer.classList.toggle('open'); // Alterna a classe 'open' na resposta para mostrar/esconder.
        });
    });

    // --- Menu Hambúrguer (para responsividade do header) ---
    // Seleciona os elementos do menu hambúrguer.
    const menuToggle = document.querySelector('.menu-toggle'); // O botão do menu hambúrguer.
    const mainNav = document.querySelector('.main-nav'); // O elemento de navegação principal.

    // Adiciona um event listener para o botão do menu hambúrguer.
    menuToggle.addEventListener('click', () => {
        // Ao clicar, alterna a classe 'active' na navegação principal para mostrar/esconder o menu.
        mainNav.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link (opcional)
    // Seleciona todos os links dentro da navegação principal.
    document.querySelectorAll('.main-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            // Se o menu estiver ativo, remove a classe 'active' para fechá-lo.
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });
});