function createLeaves() {
  const leavesContainer = document.querySelector('.autumn-leaves');
  if (!leavesContainer) return;

  for (let i = 0; i < 15; i++) {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    leaf.style.left = `${Math.random() * 100}vw`;
    leaf.style.width = `${Math.random() * 30 + 20}px`;
    leaf.style.height = `${Math.random() * 30 + 20}px`;
    leaf.style.animationDuration = `${Math.random() * 10 + 5}s`;
    leaf.style.animationDelay = `${Math.random() * 5}s`;
    leavesContainer.appendChild(leaf);
  }
}


function setupMusic() {
  const bgMusic = document.getElementById('bgMusic');
  const muteBtn = document.getElementById('muteBtn');

  if (!bgMusic || !muteBtn) return;

  bgMusic.volume = 0.3;
  const playPromise = bgMusic.play();

  if (playPromise !== undefined) {
    playPromise.catch(error => {
      muteBtn.textContent = "🔇";
      bgMusic.muted = true;
    });
  }

  // Mute toggle
  muteBtn.addEventListener('click', () => {
    bgMusic.muted = !bgMusic.muted;
    muteBtn.textContent = bgMusic.muted ? "🔇" : "🔊";
  });
}


if (document.getElementById('unlock-btn')) {
  document.getElementById('unlock-btn').addEventListener('click', () => {
    window.location.href = 'library.html';
  });
}

if (document.querySelectorAll('.book')) {
  document.querySelectorAll('.book').forEach(book => {
    book.addEventListener('click', () => {
      if (book.dataset.correct === 'true') {
        alert("I have never in my life laid eyes upon someone with a soul as pure as you...\n\nWord: LOML");
      } else {
        alert("You know Coney Island is very pretty around this time of year...\n\nWord: Search");
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createLeaves();
  setupMusic();
});
