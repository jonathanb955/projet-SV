// Attendre que tout le contenu soit chargé
window.addEventListener('load', function() {
    // Fonction pour vérifier si un élément est dans la vue
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        return (
            rect.top <= windowHeight * 0.9 &&
            rect.bottom >= windowHeight * 0.1 &&
            rect.left <= windowWidth * 0.9 &&
            rect.right >= windowWidth * 0.1
        );
    }

    // Rendre la fonction disponible globalement
    window.isInViewport = isInViewport;

    // Fonction pour gérer les animations
    function handleScroll() {
        document.querySelectorAll('.scroll-animate:not(.animated)').forEach(el => {
            if (isInViewport(el)) {
                // Ajouter un délai progressif basé sur la position de l'élément
                const delay = el.dataset.delay || 0;
                setTimeout(() => {
                    el.classList.add('animated');
                }, delay);
            }
        });
    }

    // Démarrer les animations du haut de page avec un léger délai
    setTimeout(() => {
        document.querySelectorAll('.animate-on-load').forEach((el, index) => {
            // Ajouter un délai progressif pour chaque élément
            setTimeout(() => {
                el.classList.add('animated');
            }, index * 150); // 150ms entre chaque animation
        });
    }, 100); // Délai initial de 100ms

    // Configurer l'écouteur de défilement avec debounce
    let isScrolling;
    const handleScrollDebounced = function() {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(handleScroll, 50);
    };
    
    // Ajouter l'écouteur de défilement
    window.addEventListener('scroll', handleScrollDebounced, { passive: true });
    
    // Vérifier les éléments visibles après un court délai
    setTimeout(handleScroll, 300);
    
    // Vérifier à nouveau après que toutes les ressources sont chargées
    window.addEventListener('load', handleScroll);
});
