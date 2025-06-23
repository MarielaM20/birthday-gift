function checkAnswer() {
  const answer = document.getElementById("answer").value.trim();
  const result = document.getElementById("result");
  const gift = document.getElementById("gift");

  if (answer === "6") {
    result.textContent = "Браво! Верен отговор!";
    gift.classList.remove("hidden");
    launchFireworks();
  } else {
    result.textContent = "Опитай пак!";
  }
}

// Фойерверки:
function launchFireworks() {
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  function createFirework() {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height / 2;
    let colors = ['#ff4b5c', '#56cfe1', '#ffbe0b', '#9d4edd', '#3ae374'];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: x,
        y: y,
        dx: Math.random() * 6 - 3,
        dy: Math.random() * 6 - 3,
        radius: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 100
      });
    }
  }

  function animate() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      p.life--;

      if (p.life <= 0) particles.splice(i, 1);
    });

    requestAnimationFrame(animate);
  }

  createFirework();
  animate();

  // Пускай фойерверки още 3 секунди
  let interval = setInterval(createFirework, 500);
  setTimeout(() => clearInterval(interval), 3000);
}
