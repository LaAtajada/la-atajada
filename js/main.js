document.addEventListener('DOMContentLoaded', () => {
    console.log('La ATAJADA está lista');

    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show'); // Alterna la clase "show" para mostrar/ocultar el menú
    });
    

});
