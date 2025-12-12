document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionar els elements
    const toggleButton = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu-vertical');
    // 🌟 NOU: Botó de tancament
    const closeButton = document.getElementById('menu-close'); 

    // Funció que s'executa en fer clic
    const toggleMenu = () => {
        // Alterna la classe 'obert' tant al botó com al menú
        toggleButton.classList.toggle('obert');
        menu.classList.toggle('obert');
        
        // Actualitza l'accessibilitat (ARÍA)
        const isExpanded = toggleButton.classList.contains('obert');
        toggleButton.setAttribute('aria-expanded', isExpanded);
        
        // 🌟 NOU: Desactiva el scroll del body quan el menú està obert
        document.body.style.overflow = isExpanded ? 'hidden' : 'auto';
    };

    // 2. Afegir l'event listener al botó d'hamburguesa (obertura)
    toggleButton.addEventListener('click', toggleMenu);
    
    // 🌟 NOU: Afegir l'event listener al botó de tancament (tancament)
    // Utilitzem la mateixa funció `toggleMenu`
    closeButton.addEventListener('click', toggleMenu); 
});