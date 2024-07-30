const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

function exibirMenu(){
    navLinks.classList.toggle('active');
}

mobileMenu.addEventListener('click', exibirMenu);