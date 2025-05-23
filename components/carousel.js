// Índice do slide atualmente visível
let currentSlide = 0;

// Seleciona todos os slides do carrossel
const slides = document.querySelectorAll('.carousel-item');

// Seleciona todos os indicadores (os "pontos" abaixo do carrossel)
const indicators = document.querySelectorAll('.carousel-indicators span');

// Inicia o avanço automático dos slides a cada 3 segundos
let autoSlide = setInterval(nextSlide, 3000);

/**
 * Mostra o slide correspondente ao índice fornecido.
 * Atualiza também o indicador ativo.
 */
function showSlide(index) {
    slides.forEach((slide, i) => {
        // Só o slide com índice igual ao atual recebe a classe 'active'
        slide.classList.toggle('active', i === index);
    });
    indicators.forEach((number, i) => {
        // Só o indicador correspondente ao slide atual recebe a classe 'active'
        number.classList.toggle('active', i === index);
    });
    // Atualiza o índice do slide atual
    currentSlide = index;
}

/**
 * Avança para o próximo slide.
 * Se estiver no último, volta ao primeiro.
 */
function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

/**
 * Função chamada ao clicar no botão "next".
 * Avança para o próximo slide e para o avanço automático.
 */
function nextSlideManual() {
    nextSlide();
    clearInterval(autoSlide);
}

/**
 * Volta para o slide anterior.
 * Se estiver no primeiro, vai para o último.
 */
function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
}

/**
 * Função chamada ao clicar no botão "prev".
 * Volta para o slide anterior e para o avanço automático.
 */
function prevSlideManual() {
    prevSlide();
    clearInterval(autoSlide);
}

/**
 * Vai diretamente para o slide com o índice indicado (usado pelos indicadores).
 */
function goToSlide(index) {
    showSlide(index);
}