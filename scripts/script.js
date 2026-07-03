document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('.menu');
    menuItem = document.querySelectorAll('.menu_item');
    let hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
})