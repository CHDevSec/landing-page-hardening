// Importa a biblioteca ScrollReveal
ScrollReveal().reveal('.reveal', {
  distance: '40px',
  duration: 1000,
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 100,
  reset: false // não repete ao voltar
});

// Revela da esquerda
ScrollReveal().reveal('.from-left', {
  distance: '60px',
  duration: 1000,
  origin: 'left',
  easing: 'ease-in-out'
});

// Revela da direita
ScrollReveal().reveal('.from-right', {
  distance: '60px',
  duration: 1000,
  origin: 'right',
  easing: 'ease-in-out'
});
