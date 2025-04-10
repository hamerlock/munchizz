const images = [
    { src: '../assets/images/work/byram.png', link: 'byram.html' },
    { src: '../assets/images/work/soluza.png', link: 'soluza.html' },
    { src: '../assets/images/work/ikar.png', link: 'ikar.html' },
];

let currentIndex = 1;

function updateSlider() {
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach(slide => {
        const img = slide.querySelector('img');
        const link = slide.querySelector('a');
        if (slide.classList.contains('current')) {
            img.src = images[currentIndex].src;
            link.href = images[currentIndex].link;
        } else if (slide.classList.contains('previous')) {
            const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
            img.src = images[prevIndex].src;
            link.href = images[prevIndex].link;
        } else if (slide.classList.contains('next')) {
            const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
            img.src = images[nextIndex].src;
            link.href = images[nextIndex].link;
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