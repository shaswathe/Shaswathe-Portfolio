// Move the portrait gently toward the mouse pointer inside the hero visual.
(() => {
  const visual = document.getElementById('heroVisual');
  if (!visual || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const maxMove = 40;
  let raf = 0;
  function move(event) {
    const rect = visual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.15;
    const y = (event.clientY - rect.top) / rect.height - 0.15;
    visual.style.setProperty('--move-x', `${x * maxMove}px`);
    visual.style.setProperty('--move-y', `${y * maxMove}px`);
  }
  visual.addEventListener('pointermove', move);
  visual.addEventListener('pointerleave', () => {
    visual.style.setProperty('--move-x', '0px');
    visual.style.setProperty('--move-y', '0px');
  });
})();
