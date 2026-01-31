const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");

// Play music after first interaction (Safari-friendly)
document.body.addEventListener("click", () => {
  music.play();
}, { once: true });

// Make NO button run away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// When YES is clicked
yesBtn.addEventListener("click", () => {
  message.innerHTML = `
    Yaa, thank you for choosing me again 💖<br><br>
    Thank you for being my love, my safe place, and my answered prayer.<br>
    I can’t wait to spend every Valentine with you 🌹.<br>
    Happy Valentine’s Day, my love 🌹
  `;
  launchConfetti();
});

// Simple falling hearts
function launchConfetti() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-10px";
    heart.style.fontSize = "24px";
    heart.style.animation = "fall 3s linear";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}

// Animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(110vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
