const images = [
    { src: '../assets/images/work/byram.png', link: 'byram.html' },
    { src: '../assets/images/work/soluza.png', link: 'soluza.html' },
    { src: '../assets/images/work/ikar.png', link: 'ikar.html' },
    { src: '../assets/images/work/pakks.png', link: 'pakks.html' },
];

const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

images.forEach((image, index) => {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    if (index === 0) slide.classList.add('center');
    else if (index === images.length - 1) slide.classList.add('left');
    else slide.classList.add('right');

    // Créer un lien <a> pour l'image principale
    const link = document.createElement('a');
    link.href = image.link;

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = `Slide ${index + 1}`;

    link.appendChild(img);
    slide.appendChild(link);
    slider.insertBefore(slide, rightArrow); // Insérer avant le bouton droit
});

const slides = document.querySelectorAll('.slide');
let current = 0;

const updateSlides = () => {
    slides.forEach((slide, i) => {
        slide.classList.remove('left', 'center', 'right', 'hidden');
        const link = slide.querySelector('a');
        if (link) {
            link.removeAttribute('tabindex'); // Réinitialiser le tabindex
            link.style.pointerEvents = 'none'; // Désactiver le clic par défaut
        }
    });

    const prev = (current - 1 + slides.length) % slides.length;
    const next = (current + 1) % slides.length;

    slides.forEach((slide, i) => {
        if (i !== prev && i !== current && i !== next) {
            slide.classList.add('hidden'); // Masquer les images en arrière-plan
        }
    });

    slides[prev].classList.add('left');
    slides[current].classList.add('center');
    slides[next].classList.add('right');

    // Rendre le lien cliquable uniquement pour l'image centrée
    const centerSlide = slides[current];
    const centerLink = centerSlide.querySelector('a');
    if (centerLink) {
        centerLink.setAttribute('tabindex', '0'); // Rendre le lien accessible
        centerLink.style.pointerEvents = 'auto'; // Activer le clic
    }
};

leftArrow.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    updateSlides();
});

rightArrow.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    updateSlides();
});

slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        if (index !== current) {
            current = index;
            updateSlides();
        }
    });
});

updateSlides(); // Initialisation