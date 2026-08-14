export class Book { 
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }   
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get year() {
        return this._year;
    }   
    set title(updatedTitle) {
        if(typeof updatedTitle !== "string" || updatedTitle.length === 0) {
            throw new Error("Title is not correct.");}
        this._title = updatedTitle;
    }
    set author(updatedAuthor) {
        if(typeof updatedAuthor !== "string" || updatedAuthor.length === 0) {
            throw new Error("Author is not correct.");}
        this._author = updatedAuthor;
    }
    set year(updatedYear) {
        if(typeof updatedYear !== "number" || updatedYear < 1900 || updatedYear > 2000) {
            throw new Error("Year is not correct.");}
        this._year = updatedYear;
    }
    printInfo() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
    
    static getOldestBook(books) {
        return books.reduce((oldest, book) => {
            return book.year < oldest.year ? book : oldest;
        });
    }
}
