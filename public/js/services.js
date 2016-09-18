angular.module('myApp')
  .service('BookService', BookService);

function BookService () {
  this.value = "I am a Book Service!";
  this.books =[
    {
      id: 1,
      title: 'The Bell Jar',
      author: 'Slyvia Plath'
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell'
    },
    {
      id: 3,
      title: 'Animal Farm',
      author: 'George Orwell'
    }
  ]
}

BookService.prototype.getBooks = function () {
  return this.books;
}

BookService.prototype.getBook = function (id) {
  return this.books.find((book) => book.id === id);
}

BookService.prototype.addBook = function (bookData) {
  const {author, title} = bookData;
  this.books.unshift({
    author,
    title
  })
}