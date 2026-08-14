import  {Book} from './book.js';
import {eBook} from './ebook.js';

const books = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925),
    new Book("To Kill a Mockingbird", "Harper Lee", 1960),
    new Book("1984", "George Orwell", 1948),
    new Book("The Catcher in the Rye", "J.D. Salinger", 1951)
];

const oldestBook = Book.getOldestBook(books);
console.log(`The oldest book is "${oldestBook.title}" by ${oldestBook.author}, published in ${oldestBook.year}.`);

const newEBook = eBook.addEBook(books[1], "PDF");
console.log(newEBook);