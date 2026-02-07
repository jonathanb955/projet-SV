document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour vérifier si un élément est dans la vue
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight * 0.9) &&
            rect.bottom >= (window.innerHeight * 0.1)
        );
    }

    // Fonction pour gérer les animations
    function handleScroll() {
        document.querySelectorAll('.scroll-animate:not(.animated)').forEach(el => {
            if (isInViewport(el)) {
                el.classList.add('animated');
            }
        });
    }

    // Démarrer les animations du haut de page
    document.querySelectorAll('.animate-on-load').forEach(el => {
        el.classList.add('animated');
    });

    // Configurer l'écouteur de défilement avec debounce
    let isScrolling;
    window.addEventListener('scroll', function() {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(handleScroll, 50);
    });
    
    // Vérifier les éléments visibles au chargement initial
    handleScroll();
});
