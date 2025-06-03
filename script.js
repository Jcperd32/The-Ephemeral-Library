// Start Page
if (document.getElementById('start-btn')) {
  document.getElementById('start-btn').addEventListener('click', () => {
    window.location.href = 'library.html';
  });
}

// Library Page
if (document.querySelectorAll('.book')) {
  const books = document.querySelectorAll('.book');
  books.forEach(book => {
    book.addEventListener('click', () => {
      if (book.dataset.correct === 'true') {
        alert("Correct passage...\nWord: LOML");
        // window.location.href = 'next-riddle.html'; // Uncomment for more pages
      } else {
        alert("This book feels empty...");
      }
    });
  });
}

// Add floating leaves
for (let i = 0; i < 10; i++) {
  const leaf = document.createElement('div');
  leaf.className = 'leaf';
  leaf.style.width = `${Math.random() * 30 + 20}px`;
  leaf.style.height = `${Math.random() * 30 + 20}px`;
  leaf.style.left = `${Math.random() * 100}vw`;
  leaf.style.top = `${Math.random() * 100}vh`;
  leaf.style.animationDuration = `${Math.random() * 10 + 10}s`;
  document.body.appendChild(leaf);
}
