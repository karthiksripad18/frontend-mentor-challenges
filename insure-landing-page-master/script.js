let showNav = false;
const hamburgerBtn = document.getElementById('hamburger');
const closeBtn = document.getElementById('close');
const navLinks = document.getElementById('nav-links');

hamburgerBtn.addEventListener('click', () => {
    showNav = true;
    navLinks.classList.add('nav-show');
    hamburgerBtn.classList.add('hide');
    closeBtn.classList.remove('hide');
});

closeBtn.addEventListener('click', () => {
    showNav = true;
    navLinks.classList.remove('nav-show');
    hamburgerBtn.classList.remove('hide');
    closeBtn.classList.add('hide');
});