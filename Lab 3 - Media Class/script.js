//BOOK-'N-STUFF LIBRARY

//Parent Class
class Media {
    constructor(author, title) {
        this._author = author; //using author as director and artist
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    set setIsCheckOut(boolean) {
        //set the value of _isCheckedOut according to the boolean parameter
        this._isCheckedOut = boolean;
    }

    get getAuthor() {
        return this._author;
    }

    get getTitle() {
        return this._title;
    }

    get getCheckedOutStatus() {
        return this._isCheckedOut;
    }

    get getRating() {
        return this._ratings;
    }

    toggleCheckOutStatus() {
        this.setIsCheckOut = !this.setIsCheckOut;
    }

    getAvarageRating() {
        let ratingsSum = this.getRating.reduce((total, rating) =>
            total + rating);

        let avarage = ratingsSum / this.getRating.length;
        this._ratings = avarage;
    }

    addRating(number) {
        //adding number into new array which is equal to this ratings
        this.getRating.push(number);
    }
}

const media = new Media('daniel', 'ciccc');
console.log(media.getTitle);
media.toggleCheckOutStatus = true;
const isChecked = media.isCheckedOut;

console.log(isChecked);

//===================================================================

//Child Classes
//book
class Book extends Media {
    constructor(pages, edition, year) {
        super(author, title);
        this._pages = pages;
        this._edition = edition;
        this._year = year;
    }

    get gerPages() {
        return this._pages;
    }

    get getEdition() {
        return this._edition;
    }

    get getYear() {
        return this._year;
    }
}

const historyOfEverthing = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544, 'Third', 1991);
historyOfEverthing.toggleCheckOutStatus();
console.log(historyOfEverthing.isCheckedOut);

historyOfEverthing.addRating(4);
historyOfEverthing.addRating(5);
historyOfEverthing.addRating(5);
console.log(historyOfEverthing.getAvarageRating());

//movie
class Movie extends Media {
    constructor(runTime, movieCast) {
        super(author, title);
        this._runTime = runTime;
        this._movieCast = movieCast;
    }

    get getRunTime() {
        return this._runTime;
    }

    get getMovieCast() {
        return this._movieCast;
    }

    sortMovieCast(arrayToSort) {
        arrayToSort.sort();
        this.movieCast = arrayToSort;
        return this.movieCast;
    }
}

const speed = new Movie('Jan de Bont', 'Speed', 116, cast);
const cast = ['Jamal Crawford', 'Lou Williams', 'J.R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAvarageRating());


//CD
class CD extends Media {
    constructor(songsTitles, runTime) {
        super(author, title);
        this.songsTitles = songsTitles;
        this.runTime = runTime;
    }

    set setRunTime(time) {
        this.runTime = time;
        if (typeof (time) === 'number') {
            this.runTime = time;
        } else {
            return alert('Error, not a number');
        }
    }

    set setSongsTitles(array) {
        this.songsTitles = array;
    }

    get getSongsTitles() {
        return this.songsTitles;
    }

    get getRunTime() {
        return this.runTime;
    }

    shuffle() {
        let randomSongs = [this.songsTitles];
        let lenght = randomSongs.length;

        for (let i = lenght - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = randomSongs[i];
            randomSongs[i] = randomSongs[j];
            randomSongs[j] = temp;
        }

        return randomSongs;
    }

    getRunTime(array) {
        if (typeof array[index] === 'number') {
            let lenght = array.lenght;
            let sum = 0;

            if (lenght === 0) {
                return 'Error. No value founded';
            } else {
                sum = array.reduce(getSum, 0)
            }

            function getSum(total, num) {
                return total + num;
            }

            this.runTime = `${sum} minutes`
        }
    }
}

const metal = new CD('Epica', 'Design Your Universe', cast, 75);
metal.toggleCheckOutStatus();
console.log(metal.isCheckedOut);

metal.addRating(5);
metal.addRating(3);
metal.addRating(4);
console.log(metal.getAvarageRating());
//CATALOG CLASS

class Catalog {
    constructor() {
        this._books = [];
        this._movies = [];
        this._cds = [];
    }

    get books() {
        return this._books;
    }

    get movies() {
        return this._movies;
    }

    get cds() {
        return this._cds;
    }

    addBooks(value) {
        //adding number into new array which is equal to this ratings
        this.books.push(value);
    }

    addMovies(value) {
        //adding number into new array which is equal to this ratings
        this.movies.push(value);
    }

    addCD(value) {
        //adding number into new array which is equal to this ratings
        this.cds.push(value);
    }
}

const bookList = new Catalog(historyOfEverthing, speed, metal);