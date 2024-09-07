let currentPosition = 1; // Posição inicial do carrossel
const totalItems = 8; // Total de itens no carrossel
const carousel = document.getElementById('carousel');

document.getElementById('nextBtn').addEventListener('click', () => {
    currentPosition = currentPosition < totalItems ? currentPosition + 1 : 1; // Volta para o primeiro se for o último
    updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentPosition = currentPosition > 1 ? currentPosition - 1 : totalItems; // Vai para o último se for o primeiro
    updateCarousel();
});

function updateCarousel() {
    carousel.style.setProperty('--position', currentPosition);
}
let currentPosition2 = 1; // Posição inicial do carrossel
const totalItems2 = 8; // Total de itens no carrossel
const carousel2 = document.getElementById('carousel2');

document.getElementById('nextBtn2').addEventListener('click', () => {
    currentPosition2 = currentPosition2 < totalItems2 ? currentPosition2 + 1 : 1; // Volta para o primeiro se for o último
    updateCarousel2();
});

document.getElementById('prevBtn2').addEventListener('click', () => {
    currentPosition2 = currentPosition2 > 1 ? currentPosition2 - 1 : totalItems; // Vai para o último se for o primeiro
    updateCarousel2();
});

function updateCarousel2() {
    carousel2.style.setProperty('--position', currentPosition2);
}
