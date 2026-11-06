// On s'assure que le DOM (HTML) est totalement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {
    
    // Initialisation des icônes Lucide
    if (window.lucide) {
        lucide.createIcons();
    }

    // Gestion de la barre de navigation au défilement
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- GESTION DU CHANGEMENT DE COULEUR ---
    const colorDots = document.querySelectorAll('.color-dot');
    const shoeImg = document.getElementById('heroShoe');

    // Bibliothèque d'images locales
    const shoeColorways = {
        white: 'WOLO2.png',
        black: 'WOLO3.png',
        blue: 'WOLO1.png'
    };

    colorDots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            // Sécurité : On vérifie si une puce "active" existe avant de lui retirer sa classe
            const currentActive = document.querySelector('.color-dot.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            
            // On ajoute la classe active sur la puce cliquée
            e.target.classList.add('active');
            
            // Récupération de la couleur choisie (white, black, blue)
            const selectedColor = e.target.getAttribute('data-color');
            
            // Animation de transition fluide (fondu + léger dézoom)
            shoeImg.style.opacity = '0';
            shoeImg.style.transform = 'rotate(-15deg) scale(0.95)';
            
            setTimeout(() => {
                // On applique la nouvelle image locale correspondante
                if (shoeColorways[selectedColor]) {
                    shoeImg.src = shoeColorways[selectedColor];
                }
                // On réaffiche l'image avec son zoom normal
                shoeImg.style.opacity = '1';
                shoeImg.style.transform = 'rotate(-15deg) scale(1)';
            }, 200);
        });
    });

    // Formulaire de réduction Newsletter
    const form = document.getElementById('discountForm');
    const emailInput = document.getElementById('emailInput');
    const messageDiv = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const emailValue = emailInput.value.trim();

            if (emailValue && messageDiv) {
                messageDiv.textContent = "✓ Success! Check your inbox for your 15% discount code.";
                messageDiv.className = "message success";
                messageDiv.style.display = "block";
                emailInput.value = "";

                setTimeout(() => {
                    messageDiv.style.display = "none";
                }, 5000);
            }
        });
    }
});
