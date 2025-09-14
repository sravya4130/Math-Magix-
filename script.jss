<script>
  // create star layers elements once
  const bgLayer = document.createElement('div');
  bgLayer.className = 'background-layer';
  document.body.appendChild(bgLayer);

  const stars = document.createElement('div');
  stars.className = 'stars';
  document.body.appendChild(stars);

  const tw = document.createElement('div');
  tw.className = 'twinkle';
  document.body.appendChild(tw);

  // shooting star function
  function spawnShootingStar(){
    const star = document.createElement('div');
    star.className = 'shooting-star';
    document.body.appendChild(star);

    // random start position (off-screen) and end transform
    const startX = Math.random() * window.innerWidth * 0.8 + window.innerWidth * 0.1;
    const startY = Math.random() * window.innerHeight * 0.2 + 10;
    const length = Math.random() * 200 + 160;
    const angle = -20 - Math.random()*25; // degrees
    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;
    star.style.height = `${length}px`;
    star.style.transform = `rotate(${angle}deg)`;
    star.style.opacity = '1';

    // animate with CSS-like transitions via JS
    const travel = Math.random() * 1200 + 800;
    star.style.transition = `transform 0.9s linear, opacity 0.9s linear`;
    // move it across
    requestAnimationFrame(()=>{
      star.style.transform = `translateX(-${travel}px) rotate(${angle}deg)`;
      star.style.opacity = '0';
    });

    // cleanup
    setTimeout(()=> star.remove(), 1000);
  }

  // spawn occasionally
  setInterval(()=>{
    if(Math.random() < 0.28) spawnShootingStar();
  }, 1800);
</script>
