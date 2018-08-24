document.addEventListener('DOMContentLoaded', function() {

    // Pobieranie elementów reprezentujących wyniki z drzewa DOM.
    const hiddenMenuEl = document.querySelector('.hidden-menu');
    const menuOverlayEl = document.querySelector('.menu-overlay');

    // Obsługa kliknięcia, które powoduje wysuwanie się menu z lewej strony.
    document.querySelector('.button.menu').addEventListener('click', function() {
        hiddenMenuEl.style.left = '0';
        menuOverlayEl.style.display = 'block';
    });

    // Obsługa kliknięcia, które powoduje chowanie się menu.
    menuOverlayEl.addEventListener('click', function() {
        menuOverlayEl.style.display = 'none';
        hiddenMenuEl.style.left = '-75%';       
    });

});