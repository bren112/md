const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselItems = document.querySelector('.carousel-items');
const totalCards = carouselItems.children.length; // Número total de cards
const cardsToShow = 2; // Quantidade de cards visíveis
let currentIndex = 0;

function updateCarousel() {
  const cardWidth = carouselItems.children[0].offsetWidth + 20; // Largura do card + margens
  const maxIndex = totalCards - cardsToShow;
  if (currentIndex > maxIndex) currentIndex = maxIndex; // Impede de avançar além do último card
  if (currentIndex < 0) currentIndex = 0; // Impede de retroceder antes do primeiro card
  const offset = -currentIndex * cardWidth;
  carouselItems.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex -= cardsToShow; // Volta dois cards por vez
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex += cardsToShow; // Avança dois cards por vez
  updateCarousel();
});

// Atualiza o carrossel ao redimensionar a tela
window.addEventListener('resize', updateCarousel);
