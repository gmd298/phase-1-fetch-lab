function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then(response => response.json())
  .then(data => renderBooks(data))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    const paragraph = document.createElement('p');
    paragraph.innerHTML = book.numberOfPages;
    main.appendChild(h2);
    main.appendChild(paragraph);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
