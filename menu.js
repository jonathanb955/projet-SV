console.log('menu.js chargé');

// Fonction pour basculer le menu
function toggleMobileMenu(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    const menu = document.querySelector('.mobile-menu') || document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.burger-menu');
    const overlay = document.querySelector('.menu-overlay') || document.getElementById('mobileMenuOverlay');
    
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
}

// Fonction pour fermer le menu
function closeMobileMenu() {
    const menu = document.querySelector('.mobile-menu') || document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.burger-menu');
    const overlay = document.querySelector('.menu-overlay') || document.getElementById('mobileMenuOverlay');
    
    if (menu) menu.classList.remove('active');
    if (hamburger) hamburger.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    
    document.body.style.overflow = '';
}

// Gestion du redimensionnement de la fenêtre
function handleResize() {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', function() {
    // Écouteurs d'événements pour le menu burger
    const burgerButton = document.querySelector('.burger-menu');
    if (burgerButton) {
        burgerButton.addEventListener('click', toggleMobileMenu);
    }
    
    // Fermer le menu en cliquant sur un lien
    const menuLinks = document.querySelectorAll('.mobile-menu a, #mobileMenu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Fermer le menu en cliquant sur l'overlay
    const overlay = document.querySelector('.menu-overlay, #mobileMenuOverlay');
    if (overlay) {
        overlay.addEventListener('click', closeMobileMenu);
    }
    
    // Gestion du redimensionnement
    window.addEventListener('resize', handleResize);
    
    // Désactiver le défilement de la page lorsque le menu est ouvert
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
    console.log('DOM chargé, initialisation du menu...');
    
    // Écouteur pour le bouton hamburger
    const hamburger = document.querySelector('.burger-menu');
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
