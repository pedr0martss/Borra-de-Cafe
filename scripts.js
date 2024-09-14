document.addEventListener('mousemove', (e) => {
  const body = document.querySelector('body');
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  body.style.setProperty('--mouse-x', x);
  body.style.setProperty('--mouse-y', y);
});
