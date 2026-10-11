const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  menuButton.textContent = isOpen ? '×' : '☰';
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
    menuButton.textContent = '☰';
  });
});

document.querySelector('#enquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.querySelector('#parent-name').value.trim();
  const programme = document.querySelector('#programme').value;
  const message = document.querySelector('#form-message');
  message.textContent = `Thanks, ${name}. This demo form is working locally; no information was sent or stored. Selected programme: ${programme}.`;
});
