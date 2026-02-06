// Mot de passe pour voir le message (vous pouvez le changer)
const PASSWORD = "1234";

// Fonction pour déverrouiller le message
function unlockMessage() {
    const input = document.getElementById('passwordInput');
    if (!input) return false;
    
    if (input.value === PASSWORD) {
        document.getElementById('messageContainer').style.display = 'block';
        document.getElementById('passwordPrompt').style.display = 'none';
        localStorage.setItem('messageUnlocked', 'true');
    } else {
        alert('Mot de passe incorrect');
        input.value = '';
        input.focus();
    }
    return false;
}

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

// Initialisation au chargement du document
document.addEventListener('DOMContentLoaded', function() {
    // Configuration des boutons
    const lockButton = document.getElementById('lockButton');
    const unlockButton = document.getElementById('unlockButton');
    const passwordInput = document.getElementById('passwordInput');
    
    // Ajout des écouteurs d'événements
    if (lockButton) {
        lockButton.addEventListener('click', lockMessage);
    }
    
    if (unlockButton) {
        unlockButton.addEventListener('click', unlockMessage);
    }
    
    // Gestion de la touche Entrée dans le champ de mot de passe
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                unlockMessage();
            }
        });
        passwordInput.focus();
    }
    
    // Vérifier si le message était déjà déverrouillé
    if (localStorage.getItem('messageUnlocked') === 'true') {
        const messageContainer = document.getElementById('messageContainer');
        const passwordPrompt = document.getElementById('passwordPrompt');
        
        if (messageContainer && passwordPrompt) {
            messageContainer.style.display = 'block';
            passwordPrompt.style.display = 'none';
        }
    }
});

// Gestion du rafraîchissement de la page
window.onbeforeunload = function() {
    if (localStorage.getItem('messageUnlocked') === 'true') {
        return 'Le message sera verrouillé si vous quittez cette page. Continuer ?';
    }
};
