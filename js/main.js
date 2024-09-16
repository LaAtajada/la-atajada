document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.getElementById('nav-links');

    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
});
