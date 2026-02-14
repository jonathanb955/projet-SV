// Données des souvenirs (à personnaliser avec vos propres données)
const memoriesData = [
    {
        id: 1,
        title: "Notre première rencontre",
        date: "27 Décembre 2020",
        description: "Le jour où nos chemins se sont croisés pour ne plus se quitter. Je me souviens de ton sourire qui m'a immédiatement mis à l'aise.",
        location: {
            lat: 48.8566,
            lng: 2.3522,
            name: "Paris, France"
        },
        image: "https://source.unsplash.com/random/800x600?paris",
        likes: 0,
        liked: false
    },
    {
        id: 2,
        title: "Notre premier voyage",
        date: "15 Juillet 2021",
        description: "Notre première aventure ensemble. Tu avais tout organisé à la perfection, comme toujours. Les paysages étaient à couper le souffle, mais pas autant que toi.",
        location: {
            lat: 43.7102,
            lng: 7.2620,
            name: "Nice, France"
        },
        image: "https://source.unsplash.com/random/800x600?nice,france",
        likes: 0,
        liked: false
    },
    {
        id: 3,
        title: "Notre anniversaire",
        date: "27 Décembre 2021",
        description: "Un an déjà que nous étions ensemble. Tu m'as surpris avec ce petit déjeuner au lit et cette bague que je ne quitte plus.",
        location: {
            lat: 48.8566,
            lng: 2.3522,
            name: "Notre lieu spécial"
        },
        image: "https://source.unsplash.com/random/800x600?anniversary",
        likes: 0,
        liked: false
    }
];

// Fonction d'initialisation simplifiée (sans Leaflet)
function initMap() {
    console.log("Initialisation de la carte...");
    const mapElement = document.getElementById('memoryMap');
    
    if (!mapElement) {
        console.error("L'élément #memoryMap est introuvable");
        return;
    }
    
    // Utiliser l'iframe OpenStreetMap
    mapElement.innerHTML = `
        <iframe 
            width="100%" 
            height="100%" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0" 
            src="https://www.openstreetmap.org/export/embed.html?bbox=-5.2,41.3,9.6,51.2&layer=mapnik&marker=48.8566,2.3522"
            style="border: 1px solid #d63026; border-radius: 10px;">
        </iframe>
        <br/>
        <small>
            <a href="https://www.openstreetmap.org/?mlat=48.86&mlon=2.35#map=6/46.2276/2.2137">
                Voir la carte en grand
            </a>
        </small>`;
    
    console.log("Carte initialisée avec succès");
}

// Fonction pour afficher les souvenirs
function displayMemories() {
    console.log("Début de l'affichage des souvenirs...");
    
    // Vérifier si les données existent
    if (!Array.isArray(memoriesData)) {
        console.error("Erreur: memoriesData n'est pas un tableau");
        return;
    }
    
    console.log("Nombre de souvenirs à afficher:", memoriesData.length);
    
    const container = document.querySelector('.memories-container');
    
    if (!container) {
        console.error("Erreur: Le conteneur des souvenirs est introuvable");
        return;
    }
    
    console.log("Conteneur trouvé, création des cartes...");
    
    // Vider le conteneur
    container.innerHTML = '';
    
    // Créer les cartes pour chaque souvenir
    memoriesData.forEach(memory => {
        try {
            const memoryCard = document.createElement('div');
            memoryCard.className = 'memory-card';
            memoryCard.style.border = '1px solid #ddd';
            memoryCard.style.borderRadius = '10px';
            memoryCard.style.overflow = 'hidden';
            memoryCard.style.margin = '10px';
            memoryCard.style.background = '#fff';
            memoryCard.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            
            memoryCard.innerHTML = `
                <div style="height: 200px; background: url('${memory.image}') center/cover; position: relative;">
                    <div style="position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.9); padding: 5px 15px; border-radius: 20px; font-size: 0.9rem; font-weight: 600; color: #d63026;">
                        ${memory.date}
                    </div>
                </div>
                <div style="padding: 20px;">
                    <h3 style="margin: 0 0 10px 0; color: #333; font-size: 1.3rem;">${memory.title}</h3>
                    <p style="color: #666; margin: 0 0 15px 0; line-height: 1.5;">${memory.description}</p>
                    <div style="display: flex; align-items: center; color: #888; margin-bottom: 15px;">
                        <i class="fas fa-map-marker-alt" style="color: #d63026; margin-right: 5px;"></i> 
                        ${memory.location.name}
                    </div>
                    <div style="text-align: right;">
                        <button class="btn-like" data-id="${memory.id}" style="background: none; border: none; color: #ccc; cursor: pointer; font-size: 1.2rem; display: flex; align-items: center; gap: 5px;">
                            <i class="${memory.liked ? 'fas' : 'far'} fa-heart"></i>
                            <span class="like-count">${memory.likes}</span>
                        </button>
                    </div>
                </div>
            `;
            
            container.appendChild(memoryCard);
            
        } catch (error) {
            console.error("Erreur lors de la création d'une carte de souvenir:", error);
        }
    });
    
    console.log("Toutes les cartes ont été créées");
    
    // Ajouter les écouteurs d'événements pour les boutons "J'aime"
    document.querySelectorAll('.btn-like').forEach(button => {
        button.addEventListener('click', function() {
            const memoryId = parseInt(this.getAttribute('data-id'));
            const memory = memoriesData.find(m => m.id === memoryId);
            
            if (memory) {
                memory.liked = !memory.liked;
                memory.likes += memory.liked ? 1 : -1;
                
                // Mettre à jour l'affichage
                const icon = this.querySelector('i');
                const count = this.querySelector('.like-count');
                
                if (icon) icon.className = memory.liked ? 'fas fa-heart' : 'far fa-heart';
                if (count) count.textContent = memory.likes;
                
                if (memory.liked) {
                    this.style.color = '#d63026';
                } else {
                    this.style.color = '#ccc';
                }
            }
        });
    });
    
    console.log("Affichage des souvenirs terminé");
}

// Fonction pour gérer les animations de défilement
function handleScrollAnimations() {
    const memoryCards = document.querySelectorAll('.memory-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    memoryCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM chargé, initialisation...");
    
    // Initialiser la carte
    initMap();
    
    // Afficher les souvenirs
    displayMemories();
    
    // Activer les animations de défilement
    handleScrollAnimations();
    
    // Désactiver le défilement sur la carte
    const mapElement = document.getElementById('memoryMap');
    if (mapElement) {
        mapElement.addEventListener('wheel', function(e) {
            e.stopPropagation();
        });
    }
});

// Appel direct à displayMemories après le chargement complet de la page
window.onload = function() {
    console.log("Page entièrement chargée, vérification de l'affichage des souvenirs...");
    if (typeof displayMemories === 'function') {
        // Petit délai pour s'assurer que le DOM est prêt
        setTimeout(displayMemories, 500);
    }
};
