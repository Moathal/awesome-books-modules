import Book from './modules/book.js';
import BookM from './modules/methods.js';

const booksList = document.querySelector('.books-list');
const methods = new BookM();
const addBook = document.getElementById('add-book');
const newBook = document.getElementById('book');
const newAuthor = document.getElementById('author');
const pages = document.querySelectorAll('.page');
const header = document.querySelector('header');
const date = document.querySelector('.date');
let link = 'a';

setInterval(methods.update(date), 10000)

if (localStorage.getItem('books') !== null) methods.Books = JSON.parse(localStorage.getItem('books'));

methods.resetBooksList(booksList);

booksList.addEventListener('click', (e) => {
  if (e.target.className === 'rem-btn') {
    methods.deleteBook(e.target.id, booksList);
  }
});

addBook.addEventListener('click', () => {
  const book = new Book(newBook.value, newAuthor.value);
  methods.Books.push(book);
  window.localStorage.setItem('books', JSON.stringify(methods.Books));
  methods.resetBooksList(booksList);
});

header.addEventListener('click', (e) => {
  link = e.target.innerText.replace(/\s/g, '');
  if (link === 'List' || link === 'Addnew' || link === 'Contact') {
    pages.forEach((page) => page.classList.remove('active'));
    document.getElementById(link).classList.add('active');
  }
});
