console.log('menu.js chargé');

// Fonction pour basculer le menu
function toggleMobileMenu(event) {
    console.log('toggleMobileMenu appelé');
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.getElementById('mobileMenuOverlay');
    
    console.log('Éléments trouvés:', { menu, hamburger, overlay });
    
    if (!menu || !hamburger || !overlay) {
        console.error('Éléments manquants pour le menu');
        return;
    }
    
    // Bascule les classes
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Gère le défilement de la page
    const isOpen = menu.classList.contains('active');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    
    console.log('Menu état:', isOpen ? 'ouvert' : 'fermé');
}

// Fonction pour fermer le menu
function closeMobileMenu() {
    console.log('Fermeture du menu');
    
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.getElementById('mobileMenuOverlay');
    
    if (menu) menu.classList.remove('active');
    if (hamburger) hamburger.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    
    document.body.style.overflow = '';
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM chargé, initialisation du menu...');
    
    // Écouteur pour le bouton hamburger
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        console.log('Bouton hamburger trouvé');
        hamburger.addEventListener('click', toggleMobileMenu);
    } else {
        console.error('Bouton hamburger non trouvé!');
    }
    
    // Fermer le menu en cliquant sur un lien
    const menuLinks = document.querySelectorAll('.mobile-menu a');
    console.log('Liens du menu trouvés:', menuLinks.length);
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Lien cliqué:', this.href);
            closeMobileMenu();
        });
    });
    
    // Fermer le menu en cliquant en dehors
    const overlay = document.getElementById('mobileMenuOverlay');
    if (overlay) {
        console.log('Overlay trouvé');
        overlay.addEventListener('click', closeMobileMenu);
    }
    
    // Vérifier si le menu est déjà ouvert (au cas où)
    const menu = document.getElementById('mobileMenu');
    if (menu && menu.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Rendre les fonctions accessibles globalement
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
