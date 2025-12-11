document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionar els elements
    const toggleButton = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu-vertical');

    // Funció que s'executa en fer clic
    const toggleMenu = () => {
        // Alterna la classe 'obert' tant al botó com al menú
        toggleButton.classList.toggle('obert');
        menu.classList.toggle('obert');
        
        // Actualitza l'accessibilitat (ARÍA)
        const isExpanded = toggleButton.classList.contains('obert');
        toggleButton.setAttribute('aria-expanded', isExpanded);
    };

    // 2. Afegir l'event listener
    toggleButton.addEventListener('click', toggleMenu);
});