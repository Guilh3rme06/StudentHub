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
 * @param {number} index - O índice do slide a ser mostrado.
 */
function showSlide(index) {
    slides.forEach((slide, i) => {
        // Para cada slide, adiciona ou remove a classe 'active' baseado se o índice é o atual
        slide.classList.toggle('active', i === index);
    });
    indicators.forEach((number, i) => {
        // Para cada indicador, adiciona ou remove a classe 'active' baseado se o índice é o atual
        number.classList.toggle('active', i === index);
    });
    // Atualiza o índice do slide atualmente visível
    currentSlide = index;
}

/**
 * Avança para o próximo slide.
 * Se estiver no último slide, volta para o primeiro.
 */
function nextSlide() {
    // Calcula o índice do próximo slide: (índice atual + 1) módulo o número total de slides
    let next = (currentSlide + 1) % slides.length;
    showSlide(next); // Mostra o próximo slide
}

/**
 * Função chamada ao clicar no botão "next".
 * Avança para o próximo slide e para o avanço automático do carrossel.
 */
function nextSlideManual() {
    nextSlide(); // Chama a função para avançar o slide
    clearInterval(autoSlide); // Limpa o intervalo para parar o avanço automático
}

/**
 * Volta para o slide anterior.
 * Se estiver no primeiro slide, vai para o último.
 */
function prevSlide() {
    // Calcula o índice do slide anterior: (índice atual - 1 + número total de slides) módulo o número total de slides
    // O '+ slides.length' garante que o resultado seja positivo mesmo se currentSlide for 0
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev); // Mostra o slide anterior
}

/**
 * Função chamada ao clicar no botão "prev".
 * Volta para o slide anterior e para o avanço automático do carrossel.
 */
function prevSlideManual() {
    prevSlide(); // Chama a função para voltar o slide
    clearInterval(autoSlide); // Limpa o intervalo para parar o avanço automático
}

/**
 * Vai diretamente para o slide com o índice indicado.
 * Esta função é usada pelos indicadores de navegação (os "pontos").
 * @param {number} index - O índice do slide para o qual navegar.
 */
function goToSlide(index) {
    showSlide(index); // Mostra o slide correspondente ao índice clicado
}