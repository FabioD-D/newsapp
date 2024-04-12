export class Article {
    id: string;
    title: string;
    text: string;
    category: string;
    author: string;
    creationDate: Date;
    editDate: Date;

    constructor(id: string, title: string, text: string, category: string, author: string, creationDate: Date, editDate: Date) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.category = category;
        this.author = author;
        this.creationDate = creationDate;
        this.editDate = editDate;
    }
}