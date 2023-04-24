const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseover', function() {
    this.classList.add('card-hover');
  });
  card.addEventListener('mouseout', function() {
    this.classList.remove('card-hover');
  });
});