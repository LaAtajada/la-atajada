document.addEventListener('DOMContentLoaded', () => {
    console.log('La ATAJADA está lista');

    // Seleccionamos el ícono del menú y la lista de enlaces
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Añadimos un evento de clic al ícono del menú
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

});
