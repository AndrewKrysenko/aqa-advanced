import  {Book} from './Book.js';
import {EBook} from './EBook.js';

const books = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925),
    new Book("To Kill a Mockingbird", "Harper Lee", 1960),
    new Book("1984", "George Orwell", 1948),
    new Book("The Catcher in the Rye", "J.D. Salinger", 1951),
    new EBook("Digital Fortress", "Dan Brown", 1998, "PDF"),
    new EBook("The Da Vinci Code", "Dan Brown", 2003, "PDF"),

];
const bookInfo = books.map(book => book.printInfo());
console.log(bookInfo);

const oldestBook = Book.getOldestBook(books);
console.log(`The oldest book is "${oldestBook.title}" by ${oldestBook.author}, published in ${oldestBook.year}.`);

const newEBook = EBook.addEBook(books[1], "PDF");
console.log(newEBook);