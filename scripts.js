let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function changeSlide(n) {
    currentIndex = (currentIndex + n + carouselItems.length) % carouselItems.length;
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Automatic sliding
let autoSlideInterval = setInterval(() => {
    changeSlide(1);
}, 3000); // Change slide every 3 seconds

// Pause automatic sliding when hovering over the carousel
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval);
});

carouselContainer.addEventListener('mouseout', () => {
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 3000); // Resume sliding every 3 seconds
});
