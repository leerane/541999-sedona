// ScrollReveal
var sr = ScrollReveal();
var RevealData = {
  DURATION: 1000,
  INTERVAL: 60
};

// Навигация, логотип, фильтры и сортировка
sr.reveal('.site-navigation li, .promo-container img, .filter-form, .hotel-sorting', {
  easing: 'ease-in-out',
  duration: RevealData.DURATION - 300,
  opacity: 0,
  interval: RevealData.INTERVAL
});

// Приветствие, иконки, последние фичи
sr.reveal('.message-info, .advice-item, .features-list-item, ' +
  '.message-attraction > *:not(#modal-button):not(.modal-search)', {
  easing: 'ease-in-out',
  duration: RevealData.DURATION - 200,
  origin: 'top',
  distance: '25px',
  opacity: 0,
  interval: RevealData.INTERVAL + 100
});

// Предложения
sr.reveal('.hotel-item', {
  easing: 'ease-in-out',
  duration: RevealData.DURATION - 200,
  origin: 'top',
  distance: '25px',
  opacity: 0,
  interval: RevealData.INTERVAL + 100
});

// Преимущества
sr.reveal('.features-text *', {
  easing: 'ease-in-out',
  duration: RevealData.DURATION,
  origin: 'left',
  distance: '100px',
  interval: RevealData.INTERVAL + 100
});

sr.reveal('.features-text-right *', {
  easing: 'ease-in-out',
  duration: RevealData.DURATION,
  origin: 'right',
  distance: '100px',
});
