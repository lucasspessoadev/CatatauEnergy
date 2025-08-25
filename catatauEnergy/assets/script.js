document.addEventListener('DOMContentLoaded', function() {
  const neonElements = document.querySelectorAll('.neon-text-pink, .neon-text-blue, .neon-border-pink, .neon-border-blue');
  
  function handleMouseMove(e) {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      document.body.style.setProperty('--mouse-x', x);
      document.body.style.setProperty('--mouse-y', y);
      
      neonElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          const elX = (rect.left + rect.width/2) / window.innerWidth;
          const elY = (rect.top + rect.height/2) / window.innerHeight;
          
          const distance = Math.sqrt(Math.pow(x - elX, 2) + Math.pow(y - elY, 2)) * 2;
          const intensity = Math.max(0, 1 - distance);
          
          if(el.classList.contains('neon-text-pink') || el.classList.contains('neon-border-pink')) {
              el.style.filter = `drop-shadow(0 0 ${intensity * 20}px var(--neon-pink))`;
          } else {
              el.style.filter = `drop-shadow(0 0 ${intensity * 20}px var(--neon-blue))`;
          }
      });
  }
  
  window.addEventListener('mousemove', handleMouseMove);
  
 
  const heroText = document.querySelector('.hero-text');
  if(heroText) {
      heroText.innerHTML = heroText.textContent.split('').map((char, i) => 
          `<span style="animation-delay: ${i * 0.05}s">${char}</span>`
      ).join('');
  }
});
