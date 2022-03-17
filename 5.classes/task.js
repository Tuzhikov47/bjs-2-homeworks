//Задание №1

class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        return this.state *=1.5;
    }
    set state(state) {
        if (state > 100) {
            this._state = 100;
        }
        else if (state < 0) {
            this._state = 0;
        }
        else {
            this._state = state;
        }  
    }
    get state() {
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}
class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}
class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}
class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}
class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}


//Задание №2
 
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        let findBook = this.books.find(item => item[type] === value);
        if (findBook == undefined) {
            return null;
        } else {
            return findBook;
        }
    }
    giveBookByName(bookName) {
        let findBook = this.books.find(item => item.name === bookName);
        if (findBook) {
            this.books.splice(findBook, 1);
            return findBook;
        } else {
            return null;
        }
    }
}

//Задание №3

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};
    }

    addMark(mark, subjectName) {
        if (mark < 1 || mark > 5) {
            console.log('Ошибка, оценка должна быть числом от 1 до 5');            
        } else {
            if (this.marks[subjectName]) {
                this.marks[subjectName].push(mark);
            } else {
                this.marks[subjectName] = [mark];
            }
        }        
    }

    getAverageBySubject(subjectName) {
        let sum = this.marks[subjectName].reduce((acc, mark) => acc + mark, 0);
        let length = this.marks[subjectName].length;
        return sum / length;
    }
    getAverage() {
        let sumMarks = 0;
        for (let key in this.marks) {
            sumMarks = sumMarks + this.getAverageBySubject(key);
            
        }
        let length = Object.keys(this.marks).length;
        return sumMarks / length;
    }
}