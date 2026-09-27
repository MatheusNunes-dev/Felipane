document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.desktop-nav');
menuButton?.addEventListener('click', () => {
  navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', navigation.classList.contains('is-open'));
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});
