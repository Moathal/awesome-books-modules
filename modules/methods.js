export default class BookM {
  constructor() {
    this.Books = [];
  }

  resetBooksList(booksList) {
    booksList.innerHTML = '';
    for (let i = 0; i < this.Books.length; i += 1) {
      const book = document.createElement('div');
      book.classList.add('book');
      if (i % 2 === 0) {
        book.classList.add('bg-danger');
      } else {
        book.classList.add('bg-light');
      }
      book.innerHTML = `<p>"${this.Books[i].book}" by
            ${this.Books[i].author}</p>
            <button id=${i} class="rem-btn" >Remove</button><br> <br>`;
      booksList.appendChild(book);
    }
  }

  deleteBook(buttonid, booksList) {
    this.Books.splice(buttonid, 1);
    window.localStorage.setItem('books', JSON.stringify(this.Books));
    this.resetBooksList(booksList);
  }
}