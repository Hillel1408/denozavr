const burger = document.querySelector('.main-nav__burger');
const mainNav = document.querySelector('.main-nav__wrapper');

burger.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    document.body.classList.toggle('lock');
    burger.classList.toggle('active');
});
