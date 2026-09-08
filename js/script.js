const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
}

document.querySelectorAll('.nav-links a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', link.getAttribute('href'));
    links?.classList.remove('open');
  });
});

