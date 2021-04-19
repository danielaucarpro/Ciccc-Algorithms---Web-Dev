//BOOK-'N-STUFF LIBRARY

//Parent Class
class Media {
    constructor(_author, _title, _isCheckedOut, _ratings) {
        this.author = author; //using author as director and artist
        this.title = _title;
        this.isCheckedOut = _isCheckedOut;
        this.rating = _ratings;
    }

    set setAuthor(author) {
        if (typeof (author) === 'string') {
            this._author = author;
        } else {
            return alert('Error, not a string');
        }
    }

    set setTitle(title) {
        if (typeof (title) === 'string') {
            this._title = title;
        } else {
            return alert('Error, not a string');
        }
    }

    set setIsCheckOut(boolean) {
        //set the value of _isCheckedOut according to the boolean parameter
        if (boolean === true) {
            this._isCheckedOut = true;
        } else if (boolean === false) {
            this._isCheckedOut === false;
        }
    }

    get getAuthor() {
        return this.author;
    }

    get getTitle() {
        return this.title;
    }

    get getCheckedOutStatus() {
        if (this._isCheckedOut === true) {
            return 'You media is not avaiable.';
        } else if (this._isCheckedOut === false) {
            return 'You media is avaiable.';
        }
    }

    get getRating() {
        return this._ratings;
    }

    toggleCheckOutStatus(boolean) {
        if (boolean === true) {
            this._isCheckedOut = false;
        } else if (boolean === false) {
            this._isCheckedOut = true;
        }
    }

    getAvarageRating(array) {
        let lenght = array.lenght;
        let sum = 0;

        if (lenght === 0) {
            return 'No ratings yet';
        } else {
            sum = array.reduce(getSum, 0)
        }

        function getSum(total, num) {
            return total + num;
        }

        let avarage = sum / lenght;
        this._ratings = avarage;
    }

    addRating(number) {
        //adding number into new array which is equal to this ratings
        let ratings = [];
        ratings.push(number);
        this.getAvarageRating(ratings);
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
        super(pages, edition, year);
        this.pages = pages;
        this.edition = edition;
        this.year = year;
    }

    set setPages(newPagesNum) {
        if (typeof (newPagesNum) === 'number') {
            this.pages = newPagesNum;
        } else {
            return alert('Error, not a number');
        }
    }

    set setEdition(editionToSet) {
        if (typeof (editionToSet) === 'number') {
            this.edition = editionToSet;
        } else {
            return alert('Error, not a number');
        }
    }

    set setYear(newYear) {
        if (typeof (newYear) === 'number') {
            this.year = newYear;
        } else {
            return alert('Error, not a number');
        }
    }

    get gerPages() {
        return this.pages;
    }

    get getEdition() {
        return this.edition;
    }

    get getYear() {
        return this.year;
    }
}

const historyOfEverthing = new Book(544, 'Third', 1991);
historyOfEverthing.setAuthor = 'Bill Bryson';
historyOfEverthing.setTitle = 'A Short History of Nearly Everything';
historyOfEverthing.toggleCheckOutStatus(false);
console.log(historyOfEverthing._isCheckedOut);

historyOfEverthing.addRating(4);
historyOfEverthing.addRating(5);
historyOfEverthing.addRating(5);
console.log(historyOfEverthing.getAvarageRating());

//movie
class Movie extends Media {
    constructor(runTime, movieCast) {
        super(runTime, movieData);
        this.runTime = runTime;
        this.movieCast = movieCast;
    }

    set setMovieCast(cast) {
        if (typeof (cast[index]) === 'string') {
            this.movieCast = cast;
        } else {
            return alert('Error, not a string');
        }
    }

    set setRunTime(time) {
        if (typeof (time) === 'number') {
            this.runTime = time;
        } else {
            return alert('Error, not a number');
        }
    }

    get getRunTime() {
        return this.runTime;
    }

    get getMovieCast() {
        return this.movieCast;
    }

    sortMovieCast(arrayToSort) {
        arrayToSort.sort();
        this.movieCast = arrayToSort;
        return this.movieCast;
    }
}

const speed = new Movie(116);
speed.setAuthor = 'Jan de Bont';
speed.setTitle = 'Speed';
speed.toggleCheckOutStatus(true);
console.log(speed._isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAvarageRating());


//CD
class CD extends Media {
    constructor(songsTitles, runTime) {
        super(songsTitles, runTime);
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

//CATALOG CLASS

class Catalog {

}