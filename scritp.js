const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.desktop-nav');

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    event.preventDefault();
    navigation?.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');

    requestAnimationFrame(() => {
      const offset = window.innerWidth <= 900 ? 16 : 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    });
  });
});

menuButton?.addEventListener('click', () => {
  navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', navigation.classList.contains('is-open'));
});
