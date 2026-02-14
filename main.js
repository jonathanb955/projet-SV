console.log('Script main.js chargé avec succès!');

// Gestion du mot de passe
const PASSWORD = "27122020";

// Fonction pour déverrouiller le message
function unlockMessage() {
    console.log('Fonction unlockMessage appelée');
    const input = document.getElementById('passwordInput');
    if (!input) {
        console.error('Input non trouvé');
        return false;
    }
    
    console.log('Valeur saisie:', input.value);
    console.log('Mot de passe attendu:', PASSWORD);
    
    // Vérification stricte du mot de passe
    if (input.value.trim() === PASSWORD) {
        console.log('Mot de passe correct');
        const messageContainer = document.getElementById('messageContainer');
        const passwordPrompt = document.getElementById('passwordPrompt');
        
        if (messageContainer && passwordPrompt) {
            messageContainer.style.display = 'block';
            passwordPrompt.style.display = 'none';
            localStorage.setItem('messageUnlocked', 'true');
            console.log('Message déverrouillé avec succès');
            return true;
        } else {
            console.error('Éléments non trouvés dans le DOM');
            if (!messageContainer) console.error('messageContainer non trouvé');
            if (!passwordPrompt) console.error('passwordPrompt non trouvé');
        }
    } else {
        console.log('Mot de passe incorrect');
        alert('Mot de passe incorrect');
        input.value = '';
        input.focus();
    }
    return false;
}

// Rendre la fonction disponible globalement
window.unlockMessage = unlockMessage;

// Fonction pour verrouiller le message
function lockMessage() {
    if (confirm('Voulez-vous vraiment verrouiller le message ?')) {
        document.getElementById('messageContainer').style.display = 'none';
        document.getElementById('passwordPrompt').style.display = 'block';
        const passwordInput = document.getElementById('passwordInput');
        if (passwordInput) {
            passwordInput.value = '';
            passwordInput.focus();
        }
        localStorage.removeItem('messageUnlocked');
    }
    return false;
}

// Vérification que le DOM est complètement chargé
function init() {
    console.log('Initialisation de l\'application');
    
    // Vérification des éléments critiques
    const messageContainer = document.getElementById('messageContainer');
    const passwordPrompt = document.getElementById('passwordPrompt');
    
    if (!messageContainer || !passwordPrompt) {
        console.error('Erreur: Éléments du DOM manquants');
        if (!messageContainer) console.error('- messageContainer non trouvé');
        if (!passwordPrompt) console.error('- passwordPrompt non trouvé');
        return;
    }
    
    // Configuration des boutons
    const lockButton = document.getElementById('lockButton');
    const unlockButton = document.getElementById('unlockButton');
    const passwordInput = document.getElementById('passwordInput');
    
    // Ajout des écouteurs d'événements
    console.log('Initialisation des boutons...');
    
    if (lockButton) {
        console.log('Ajout de l\'écouteur sur le bouton de verrouillage');
        lockButton.addEventListener('click', lockMessage);
    } else {
        console.warn('Bouton de verrouillage non trouvé');
    }
    
    if (unlockButton) {
        console.log('Ajout de l\'écouteur sur le bouton de déverrouillage');
        unlockButton.addEventListener('click', function(e) {
            console.log('Clic sur le bouton de déverrouillage');
            e.preventDefault();
            unlockMessage();
            return false;
        });
    } else {
        console.warn('Bouton de déverrouillage non trouvé');
    }
    
    // Gestion de la touche Entrée dans le champ de mot de passe
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                console.log('Touche Entrée pressée');
                unlockMessage();
            }
        });
        passwordInput.focus();
    } else {
        console.warn('Champ de mot de passe non trouvé');
    }
    
    // Vérifier si le message était déjà déverrouillé
    if (localStorage.getItem('messageUnlocked') === 'true') {
        console.log('Message précédemment déverrouillé');
        messageContainer.style.display = 'block';
        passwordPrompt.style.display = 'none';
    } else {
        console.log('Message verrouillé');
        messageContainer.style.display = 'none';
        passwordPrompt.style.display = 'block';
    }
}

// Gestion du rafraîchissement de la page
window.onbeforeunload = function() {
    if (localStorage.getItem('messageUnlocked') === 'true') {
        return 'Le message sera verrouillé si vous quittez cette page. Continuer ?';
    }
};

// Attendre que le DOM soit complètement chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM déjà chargé
    init();
}
