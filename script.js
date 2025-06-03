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

// Create Falling Leaves
function createLeaves() {
  const leavesContainer = document.querySelector('.autumn-leaves');
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

createLeaves();
