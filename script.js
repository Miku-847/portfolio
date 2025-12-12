const cursor = document.querySelector('.custom-cursor');
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.js-close-button');

// for desktop
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// header for mobile layout
burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
});