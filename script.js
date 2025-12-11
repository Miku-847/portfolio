const cursor = document.querySelector('.custom-cursor');
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-button');

// for desktop
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// for phone (touchmove)
document.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
        cursor.style.left = e.touches[0].clientX + 'px';
        cursor.style.top = e.touches[0].clientY + 'px';
    }
});


// header
burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
});