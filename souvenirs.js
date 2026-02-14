// Données des souvenirs (à personnaliser avec vos propres données)
const memoriesData = [
    {
        id: 1,
        title: "Notre première rencontre",
        date: "12 Juillet 2025",
        description: "Le jour où nos chemins se sont croisés pour la première fois, après des mois à échanger par messages et appels.",
        location: {
            lat: 48.8385,
            lng: 2.3780,
            name: "Accor Arena, Paris"
        },
        image: "https://media-cdn.tripadvisor.com/media/photo-s/01/51/52/f6/palais-omnisports-de.jpg",
        likes: 0,
        liked: false
    },
    {
        id: 2,
        title: "Notre premier date",
        date: "",
        description: "Assis là à discuter, on parlait de tout et de rien. J'étais un peu gêné au début, mais tu as su comment me mettre à l'aise.",
        location: {
            lat: 48.8352,
            lng: 2.3850,
            name: "Parc de Bercy, Paris"
        },
        image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq7RUPNPAcGZxNHUD1hl7xgC-W17c_9QS6IZzH5_AJAN_3E0WNOD5dJnJJ8GJRXKAR6Ky3Mt5btBwo5Tsa-cuJB4wMYqIn1D4bOQiYzxkmbGZKOpn2ugJCisYzW-CG4veCtacrl8yC3D0U=s1360-w1360-h1020-rw",
        likes: 0,
        liked: false
    },
    {
        id: 3,
        title: "Première fois devant la Tour Eiffel",
        date: "",
        description: "La première fois que tu as vu cette tour dont tu me parlais tout le temps, que ce soit par messages ou en appel. J'ai encore l'image de toi, toute contente et excitée en la découvrant.",
        location: {
            lat: 48.8589,
            lng: 2.3200,
            name: "Tour Eiffel, Paris"
        },
        image: "https://d2iru24ttzll0d.cloudfront.net/cache/img/949c30e99e2df2dc46c5acc821c8693ceb296a5c-949c30-1024-383-landscape.jpg?q=1682617373",
        likes: 0,
        liked: false
    },
    {
        id: 4,
        title: "Notre premier resto",
        date: "",
        description: "Notre premier restaurant, un steakhouse Hippopotamus à la Défense.",
        location: {
            lat: 48.8900,
            lng: 2.2400,
            name: "La Défense, Paris"
        },
        image: "https://www.pagesjaunes.fr/media/newdam/89/dc/85/00/00/5f/08/bd/4c/d9/5d3989dc8500005f08bd4cd9/5d3989dc8500005f08bd4cda.jpg",
        likes: 0,
        liked: false
    },
    {
        id: 5,
        title: "Notre premier date à l'aquarium",
        date: "16 juillet 2025",
        description: "Notre premier rendez-vous à l'aquarium. Tu étais ravie de voir les animaux marins, et moi, j'étais vraiment content d'être avec toi.",
        location: {
            lat: 48.8352,
            lng: 2.3850,
            name: "Aquarium de la Porte Dorée, Paris"
        },
        image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer-bUPENxomnLfsVxdoIKC0l9xKqQS5DXsVJQKoNHav8gofJHRyL5AQ6pRX8e-ZSF9zIitxfdvBvb6xvR_tmJsetAavz-EhlLnBOyYzijhCSyKksmibJlaRDy4YPUqHfF8Fdt0A=s1360-w1360-h1020-rw",
        likes: 0,
        liked: false
    },
    {
        id: 6,
        title: "Notre deuxième resto",
        date: "",
        description: "Notre deuxième resto ensemble. Ta pris un Pho et moi un Bo Bun.",
        location: {
            lat: 48.8716,
            lng: 2.3702,
            name: "Belleville, Paris"
        },
        image: "https://lh3.googleusercontent.com/p/AF1QipNU2dg6bQrcDI-O3GQvZViFG36GN4E0qenmSl5A=s1360-w1360-h1020-rw",
        likes: 0,
        liked: false
    },
    {
        id: 7,
        title: "Notre troisième resto",
        date: "17 Juillet 2025",
        description: "Notre troisième resto ensemble au restaurant Pacifique à Belleville. On oublie pas le p'tit paiement refusé. Ha ha!! ",
        location: {
            lat: 48.8716,
            lng: 2.3702,
            name: "Belleville, Paris"
        },
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b9/4b/a5/photo0jpg.jpg?w=900&h=500&s=1",
        likes: 0,
        liked: false
    },
    {
        id: 8,
        title: "Ton départ de Paris",
        date: "",
        description: "J'étais triste de te voir partir, j'avais vraiment apprécié notre temps ensemble. PS : C'était aussi notre premier câlin.",
        location: {
            lat: 49.0079,
            lng: 2.5518,
            name: "Aéroport Charles de Gaulle, Paris"
        },
        image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweosaWyAge5MuP-lhFsnmvMgn8YUhS42bLIjVc0KF7ncBAjg2SpNY6aCIG7Q7cWrlra_cltfCrkbnqLysyepd2FTwSu8-2kLaOaeLoCQMJRr060knBuYUIad7QX-17-XmSHNcY4lHw=s1360-w1360-h1020-rw",
        likes: 0,
        liked: false
    },
    {
        id: 9,
        title: "Ta venue à Paris pour mon anniversaire",
        date: "24 Juillet 2025",
        description: "Merci d'être venue pour mon anniversaire Xu, j'ai passé une super journée avec toi. La peluche est vraiment géniale, merci !",
        location: {
            lat: 48.8566,
            lng: 2.3522,
            name: "Paris, France"
        },
        image: "IMG_1574.jpeg",
        likes: 0,
        liked: false
    },
    {
        id: 10,
        title: "Ton Anniversaire à Lille",
        date: "01 Août 2025",
        description: "Après ta super surprise pour mon anniversaire, c'était à mon tour de te faire plaisir pour le tien. Voir ton sourire toute la journée, ça n'a pas de prix. C'était vraiment un bon moment.",
        location: {
            lat: 50.6292,
            lng: 3.0573,
            name: "Lille, France"
        },
        image: "IMG_1575.jpeg",
        likes: 0,
        liked: false
    }
];

// Fonction d'initialisation de la carte avec marqueurs
function initMap() {
    console.log("Initialisation de la carte...");
    const mapElement = document.getElementById('memoryMap');

    if (!mapElement) {
        console.error("L'élément #memoryMap est introuvable");
        return;
    }

    // Créer une chaîne de caractères pour les marqueurs à partir des données des souvenirs
    let markers = '';
    memoriesData.forEach(memory => {
        if (memory.location && memory.location.lat && memory.location.lng) {
            markers += `&marker=${memory.location.lat},${memory.location.lng}`;
        }
    });

    // Calculer les limites de la carte pour afficher tous les marqueurs
    let minLat = 48.82, maxLat = 48.88, minLng = 2.25, maxLng = 2.42; // Valeurs par défaut centrées sur Paris

    // Trouver les coordonnées minimales et maximales
    memoriesData.forEach(memory => {
        if (memory.location && memory.location.lat && memory.location.lng) {
            const lat = parseFloat(memory.location.lat);
            const lng = parseFloat(memory.location.lng);

            minLat = Math.min(minLat, lat - 0.02);
            maxLat = Math.max(maxLat, lat + 0.02);
            minLng = Math.min(minLng, lng - 0.05);
            maxLng = Math.max(maxLng, lng + 0.05);
        }
    });

    // Construire l'URL de la carte avec les marqueurs et la vue ajustée
    const bbox = `${minLng},${minLat},${maxLng},${maxLat}`;
    const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik${markers}`;

    // Mettre à jour l'élément de la carte
    mapElement.innerHTML = `
        <iframe 
            width="100%" 
            height="100%" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0" 
            src="${mapUrl}"
            style="border: 1px solid #d63026; border-radius: 10px;">
        </iframe>
        <br/>
        <small>
            <a href="https://www.openstreetmap.org/?mlat=${(minLat + maxLat) / 2}&mlon=${(minLng + maxLng) / 2}#map=15/${(minLat + maxLat) / 2}/${(minLng + maxLng) / 2}">
                Voir la carte en grand
            </a>
        </small>`;

    console.log("Carte initialisée avec succès avec", memoriesData.length, "marqueurs");
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
