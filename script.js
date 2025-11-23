const cursor = document.querySelector('.custom-cursor');

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


