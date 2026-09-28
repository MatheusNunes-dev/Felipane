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

const products = document.querySelector('.products');
const productCards = [...document.querySelectorAll('.product')];
const productCurrent = document.querySelector('.products-current');

const updateProductProgress = () => {
  if (!products || !productCurrent || !productCards.length) return;

  const activeIndex = productCards.reduce((closestIndex, card, index) => {
    const closestCard = productCards[closestIndex];
    return Math.abs(card.offsetLeft - products.scrollLeft) < Math.abs(closestCard.offsetLeft - products.scrollLeft)
      ? index
      : closestIndex;
  }, 0);

  productCurrent.textContent = String(activeIndex + 1).padStart(2, '0');
};

products?.addEventListener('scroll', updateProductProgress, { passive: true });
window.addEventListener('resize', updateProductProgress);
updateProductProgress();

const fullMenu = document.querySelector('.full-menu');
const mobileOrderCta = document.querySelector('.mobile-order-cta');

const updateMobileOrderCta = () => {
  if (!fullMenu || !mobileOrderCta || window.innerWidth > 900) return;

  const bounds = fullMenu.getBoundingClientRect();
  const isBrowsingMenu = bounds.top < window.innerHeight * 0.42 && bounds.bottom > window.innerHeight * 0.68;
  mobileOrderCta.classList.toggle('is-visible', isBrowsingMenu);
};

window.addEventListener('scroll', updateMobileOrderCta, { passive: true });
window.addEventListener('resize', updateMobileOrderCta);
updateMobileOrderCta();
