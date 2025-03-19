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
    if (carouselItems.length > 0) {
        changeSlide(1);
    }
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
document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const submenu = document.querySelector('.submenu');

    dropdownToggle.addEventListener('click', function (event) {
        event.preventDefault();
        submenu.classList.toggle('active');
    });

    // Cerrar el submenú si se hace clic fuera de él
    document.addEventListener('click', function (event) {
        if (!dropdownToggle.contains(event.target) && !submenu.contains(event.target)) {
            submenu.classList.remove('active');
        }
    });
});
