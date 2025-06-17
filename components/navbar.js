const hamburgerBtn = document.getElementById('hamburger-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-links a');

/**
 * Fecha o menu de navegação, removendo as classes 'active' e 'open' dos elementos.
 */
function closeNav() {
    nav.classList.remove('active'); // Remove a classe 'active' do elemento de navegação, escondendo-o.
    hamburgerBtn.classList.remove('open'); // Remove a classe 'open' do botão hamburger, alterando seu ícone de volta para fechado.
}

/**
 * Adiciona um evento de clique ao botão hamburger.
 * Quando clicado, alterna as classes 'active' (para o menu de navegação) e 'open' (para o botão hamburger),
 * e impede a propagação do evento para evitar fechamento imediato.
 */
hamburgerBtn.onclick = function (e) {
    nav.classList.toggle('active'); // Alterna a classe 'active' no elemento de navegação para mostrar/esconder.
    hamburgerBtn.classList.toggle('open'); // Alterna a classe 'open' no botão hamburger para mudar o ícone.
    e.stopPropagation(); // Impede que o evento de clique se propague para outros elementos, como o 'document'.
};

/**
 * Adiciona um evento de clique a cada link dentro do menu de navegação.
 * Quando um link é clicado, o menu de navegação é fechado.
 */
navLinks.forEach(link => {
    link.addEventListener('click', closeNav); // Para cada link de navegação, ao clicar, chama a função 'closeNav'.
});

/**
 * Adiciona um evento de clique ao documento inteiro.
 * Se a largura da janela for menor ou igual a 600px (telas pequenas) e o menu de navegação estiver ativo,
 * verifica se o clique ocorreu fora do menu de navegação e do botão hamburger.
 * Se sim, fecha o menu de navegação.
 */
document.addEventListener('click', function (e) {
    if (window.innerWidth <= 600 && nav.classList.contains('active')) {
        // Verifica se a largura da tela é de um dispositivo móvel e se o menu está aberto.
        if (!nav.contains(e.target) && e.target !== hamburgerBtn) {
            // Se o clique não foi dentro da navegação e não foi no botão hamburger,
            closeNav(); // Fecha o menu.
        }
    }
});