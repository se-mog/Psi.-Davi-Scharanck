document.addEventListener('DOMContentLoaded', function () {

// MOBILE NAVBAR 👇
const toggleBtn = document.querySelector('.burger');
const nav = document.querySelector('.header-nav');
const navLinks = document.querySelectorAll('.header-link');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  nav.classList.toggle('is-open');

  // Opcional: alterar atributo de acessibilidade
  const expanded = toggleBtn.classList.contains('active');
  toggleBtn.setAttribute('aria-expanded', expanded);
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    toggleBtn.classList.remove('active');
    nav.classList.remove('is-open');

    // Opcional: alterar atributo de acessibilidade
    toggleBtn.setAttribute('aria-expanded', 'false');
  })
});
// MOBILE NAVBAR 👆

// SMOOTH SCROLL 👇
  function scrollToSection(sectionId, duration) {
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;

    const startPosition = window.scrollY;
    const targetPosition = targetSection.offsetTop;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    function scrollAnimation(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const ease = easeInOut(progress);
      window.scrollTo(0, startPosition + distance * ease);
      if (elapsedTime < duration) {
        requestAnimationFrame(scrollAnimation);
      }
    }

    function easeInOut(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    requestAnimationFrame(scrollAnimation);
  }

  // Adiciona evento de clique aos elementos com a classe .scroll
  const linksScroll = document.querySelectorAll('.scroll');
  linksScroll.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const sectionId = link.getAttribute('href').substring(1);
      scrollToSection(sectionId, 1500); // Alterar a duração conforme necessário
    });
  });
// SMOOTH SCROLL 👆

});