const images = [
    '../assets/images/work/1.png',
    '../assets/images/work/3.png',
    '../assets/images/work/2.png',
];

let currentIndex = 1;

function updateSlider() {
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach(slide => {
        const img = slide.querySelector('img');
        if (slide.classList.contains('current')) {
            img.src = images[currentIndex];
        } else if (slide.classList.contains('previous')) {
            img.src = images[currentIndex === 0 ? images.length - 1 : currentIndex - 1];
        } else if (slide.classList.contains('next')) {
            img.src = images[currentIndex === images.length - 1 ? 0 : currentIndex + 1];
        }
    });
}

document.querySelector('.prev-arrow').addEventListener('click', () => {
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    updateSlider();
});

document.querySelector('.next-arrow').addEventListener('click', () => {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    updateSlider();
});

// Initial load
updateSlider();