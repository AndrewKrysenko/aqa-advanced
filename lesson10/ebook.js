import  {Book} from './book.js';
export class eBook extends Book {
    constructor(title, author, year, fileType) {
        super(title, author, year);
        this.fileType = fileType;
    }
    get fileType() {
        return this._fileType;
    }
    set fileType(updatedFileType) {
        if (updatedFileType !== "PDF") {
            throw new Error("PDF only!!");
        }
        this._fileType = updatedFileType;
    }
    printInfo() {
        return `${this.title} was written by ${this.author} in ${this.year}. It is available in ${this.fileType} format now.`;
    }
    static addEBook(book, fileType) {
        const newEBook = new eBook(book.title, book.author, book.year, fileType);
        return newEBook.printInfo();
    }
}
