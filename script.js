const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');
const emptyState = document.querySelector('.empty-state');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filters.forEach((filter) => {
      const active = filter === button;
      filter.classList.toggle('is-active', active);
      filter.setAttribute('aria-pressed', String(active));
    });
    let visibleCount = 0;
    cards.forEach((card) => {
      const visible = category === 'all' || card.dataset.category === category;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    emptyState.hidden = visibleCount > 0;
  });
});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  navigation.classList.toggle('is-open', open);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Ouvrir le menu');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
