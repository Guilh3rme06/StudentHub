const hamburgerBtn = document.getElementById('hamburger-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-links a');

function closeNav() {
    nav.classList.remove('active');
    hamburgerBtn.classList.remove('open');
}

hamburgerBtn.onclick = function (e) {
    nav.classList.toggle('active');
    hamburgerBtn.classList.toggle('open');
    e.stopPropagation();
};

navLinks.forEach(link => {
    link.addEventListener('click', closeNav);
});

document.addEventListener('click', function (e) {
    if (window.innerWidth <= 600 && nav.classList.contains('active')) {
        if (!nav.contains(e.target) && e.target !== hamburgerBtn) {
            closeNav();
        }
    }
});