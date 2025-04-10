// Sélectionne l'image principale et toutes les miniatures
const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumbnail');

// Stocke la source de l'image principale par défaut
const defaultMainImageSrc = mainImage.src;

// Ajoute un événement de clic à chaque miniature
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // Si la miniature cliquée est déjà sélectionnée, réinitialise l'image principale
        if (thumbnail.classList.contains('selected')) {
            mainImage.src = defaultMainImageSrc;

            // Supprime la classe 'selected' de toutes les miniatures
            thumbnails.forEach(t => t.classList.remove('selected'));
        } else {
            // Remplace la source de l'image principale par celle de la miniature cliquée
            mainImage.src = thumbnail.src;

            // Supprime la classe 'selected' de toutes les miniatures
            thumbnails.forEach(t => t.classList.remove('selected'));

            // Ajoute la classe 'selected' à la miniature cliquée
            thumbnail.classList.add('selected');
        }
    });
});