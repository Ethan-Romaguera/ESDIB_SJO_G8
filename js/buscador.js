document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionar els elements
    const toggleButton = document.getElementById('botons-cercar');
    const menu = document.getElementById('menu-vertical2');
    const closeButton = document.getElementById('menu-close2'); 
    
    // **NUEVA LÍNEA:** Seleccionamos el input ahora que tiene ID
    const searchInput = document.getElementById('campoBusqueda'); 

    // Funció que s'executa en fer clic
    const toggleMenu = () => {
        // Alterna la classe 'obert' tant al botó com al menú
        toggleButton.classList.toggle('obert');
        menu.classList.toggle('obert');
        
        // Actualitza l'accessibilitat (ARÍA)
        const isExpanded = toggleButton.classList.contains('obert');
        toggleButton.setAttribute('aria-expanded', isExpanded);
        
        // Desactiva el scroll del body quan el menú està obert
        document.body.style.overflow = isExpanded ? 'hidden' : 'auto';

        // ===============================================
        // == LÓGICA PARA ENFOCAR EL CAMPO DE BÚSQUEDA ==
        // ===============================================

        if (isExpanded) {
            // Usamos setTimeout para dar tiempo a que las transiciones CSS terminen 
            // y garantizar que el foco se aplique al elemento visible.
            setTimeout(() => {
                // Desenfocamos el elemento activo anterior (puede ser el botón de apertura)
                if (document.activeElement) {
                    document.activeElement.blur();
                }
                
                // Aplicamos el foco al campo de búsqueda
                searchInput.focus();
            }, 200); // 200ms de retraso es un buen valor inicial
        }
        // Nota: No es necesario desenfocar al cerrar el menú, el blur() lo hace implícitamente
    };

    // 2. Afegir l'event listener al botó d'hamburguesa (obertura)
    toggleButton.addEventListener('click', toggleMenu);
    
    // Afegir l'event listener al botó de tancament (tancament)
    closeButton.addEventListener('click', toggleMenu); 
});