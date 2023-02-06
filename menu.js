const bars = document.querySelector('#bars span');
const cancel = document.getElementById('cancel');
const nav = document.getElementById('mobile-menu');
const body = document.querySelector('body');

bars.addEventListener('click', () => {
  nav.style.display = 'flex';
  cancel.style.display = 'block';
  body.style.overflow = 'hidden';
});

cancel.addEventListener('click', () => {
  nav.style.display = 'none';
  cancel.style.display = 'none';
  body.style.overflow = 'scroll';
});