// Variável que armazena o índice do slide atualmente visível
let currentSlide = 0;

// Seleciona todos os elementos que representam os slides do carrossel
const slides = document.querySelectorAll('.carousel-item');

// Seleciona todos os indicadores (pontos) do carrossel
const indicators = document.querySelectorAll('.carousel-indicators span');

/**
 * Mostra o slide correspondente ao índice fornecido.
 * Atualiza a posição dos slides e o estado ativo dos indicadores.
 * 
 * @param {number} index - Índice do slide a ser exibido
 */
function showSlide(index) {
    slides.forEach((slide, i) => {
        // Move os slides horizontalmente para mostrar o slide correto
        slide.style.transform = `translateX(-${index * 100}%)`;
        // Atualiza o estado ativo do indicador correspondente
        indicators[i].classList.toggle('active', i === index);
    });
    // Atualiza o índice do slide atual
    currentSlide = index;
}

/**
 * Avança para o próximo slide.
 * Se estiver no último slide, volta para o primeiro.
 */
function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length; // Calcula o índice do próximo slide
    showSlide(nextIndex); // Mostra o próximo slide
}

/**
 * Volta para o slide anterior.
 * Se estiver no primeiro slide, vai para o último.
 */
function prevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length; // Calcula o índice do slide anterior
    showSlide(prevIndex); // Mostra o slide anterior
}

/**
 * Vai diretamente para o slide especificado pelo índice.
 * 
 * @param {number} index - Índice do slide a ser exibido
 */
function goToSlide(index) {
    showSlide(index); // Mostra o slide correspondente ao índice fornecido
}

// Alterna automaticamente entre os slides a cada 3 segundos
setInterval(nextSlide, 3000);