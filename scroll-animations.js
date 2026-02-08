// Fonction pour vérifier si un élément est dans la vue
function isInViewport(element) {
    if (!element || !element.getBoundingClientRect) {
        console.warn('Élément invalide pour isInViewport:', element);
        return false;
    }
    
    try {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        // Zone de détection élargie (120% de la hauteur et largeur de la fenêtre)
        const isInView = (
            rect.top <= windowHeight * 1.2 &&
            rect.bottom >= windowHeight * -0.2 &&
            rect.left <= windowWidth * 1.2 &&
            rect.right >= windowWidth * -0.2
        );
        
        return isInView;
    } catch (error) {
        console.error('Erreur dans isInViewport:', error);
        return false;
    }
}

// Fonction pour gérer les animations
function handleScroll() {
    try {
        const elements = document.querySelectorAll('.scroll-animate:not(.animated)');
        if (elements.length === 0) {
            console.log('Aucun élément à animer');
            return;
        }
        
        console.log(`Vérification de ${elements.length} éléments pour animation...`);
        let animatedCount = 0;
        
        elements.forEach((el, index) => {
            if (!el || !el.classList) return;
            
            if (isInViewport(el)) {
                const delay = parseInt(el.dataset.delay) || 0;
                const elementId = el.id || `element-${index}`;
                console.log(`Animation planifiée pour #${elementId} avec un délai de ${delay}ms`);
                
                setTimeout(() => {
                    try {
                        el.classList.add('animated');
                        animatedCount++;
                        console.log(`Animation appliquée à #${elementId} (${animatedCount}/${elements.length})`);
                    } catch (e) {
                        console.error('Erreur lors de l\'ajout de la classe animated:', e);
                    }
                }, delay + (index * 30)); // Petit délai entre chaque animation
            }
        });
        
        if (animatedCount > 0) {
            console.log(`${animatedCount} éléments animés avec succès`);
        }
    } catch (error) {
        console.error('Erreur dans handleScroll:', error);
    }
}

// Fonction d'initialisation
function initAnimations() {
    console.log('=== Initialisation des animations ===');
    
    // Vérifier si le navigateur supporte les animations CSS
    if (!('animate' in document.documentElement)) {
        console.warn('Les animations CSS ne sont pas supportées par ce navigateur');
        // Forcer l'affichage de tous les éléments
        document.querySelectorAll('.scroll-animate').forEach(el => {
            el.style.opacity = '1';
            el.style.visibility = 'visible';
            el.style.transform = 'translateY(0)';
        });
        return;
    }
    
    // Démarrer les animations du haut de page avec un léger délai
    setTimeout(() => {
        const onLoadElements = document.querySelectorAll('.animate-on-load');
        console.log(`Démarrage de ${onLoadElements.length} animations au chargement`);
        
        onLoadElements.forEach((el, index) => {
            if (el && el.classList) {
                setTimeout(() => {
                    el.classList.add('animated');
                }, index * 150);
            }
        });
    }, 100);
    
    // Configurer l'écouteur de défilement avec debounce
    let isScrolling;
    const handleScrollDebounced = function() {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(handleScroll, 50);
    };
    
    // Ajouter les écouteurs d'événements
    try {
        window.addEventListener('scroll', handleScrollDebounced, { passive: true });
        window.addEventListener('resize', handleScrollDebounced);
        
        // Vérifier les éléments visibles après un court délai
        setTimeout(handleScroll, 300);
        
        // Vérifier à nouveau après le chargement complet de la page
        window.addEventListener('load', () => {
            console.log('=== Page complètement chargée, vérification des animations ===');
            // Vérifier plusieurs fois avec des délais progressifs
            [100, 300, 500, 1000].forEach(delay => {
                setTimeout(handleScroll, delay);
            });
        });
        
        // Vérifier également lorsque les images sont chargées
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('load', handleScroll);
        });
    } catch (error) {
        console.error('Erreur lors de l\'initialisation des écouteurs:', error);
    }
    
    console.log('=== Initialisation des animations terminée ===');
}

// Démarrer l'initialisation lorsque le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM chargé, démarrage de l\'initialisation des animations');
    initAnimations();
});

// Exporter la fonction pour une utilisation globale
window.isInViewport = isInViewport;

// Forcer une vérification initiale après un court délai
setTimeout(initAnimations, 1000);
