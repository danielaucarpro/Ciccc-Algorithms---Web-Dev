//BOOK-'N-STUFF LIBRARY

//Parent Class
class Media {
    constructor(author, title) {
        this.author = author; //using author as director and artist
        this.title = title;
        // this.isCheckedOut(boolean);
        // this.ratings(array) = media.getAvarageRating;
    }

    get getTitle() {
        return this.title;
    }

    get isCheckedOut() {
        if (status === true) {
            return 'Yes'
        } else if (status === false) {
            return 'No'
        }
    }

    get getAvarageRating() {
        //sum array index and divide by array lenght
        let numbers = array;
        let lenght = array.lenght;
        let sum = 0;

        if (lenght === 0) {
            return 'No ratings yet';
        } else {
            sum = numbers.reduce(getSum, 0)
        }

        function getSum(total, num) {
            return total + num;
        }

        let avarage = sum / lenght;
        return avarage;
    }

    set toggleCheckOutStatus(boolean) {
        //change status to true or false
        const status = false;
        if (boolean === true) {
            status === true;
        } else if (boolean === false) {
            this.isCheckedOut === false;
        }
    }

    set addRating(number) {
        //adding number into the array then passing the array to get avarage
        let ratingArray = [];
        ratingArray.push(number);
        this.getAvarageRating(ratingArray);
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
    constructor(pages, status, rating) {
        super(pages, status, rating);
        this.author = 'Daniel Aucar';
        this.pages = pages;
    }
}

const historyOfEverything = new Book();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating = 4;
historyOfEverything.addRating = 5;
historyOfEverything.addRating = 5;
const averageHis = historyOfEverything.getAvarageRating();
console.log(averageHis);

//movie
class Movie extends Media {
    constructor(runTime, status, rating) {
        super(movieData);
        this.runTime = runTime;
        this.movieCast = movieCast;
    }
}

const speed = new Movie();
speed.author = 'Jan de Bont';
speed.title = 'Speed';
speed.runTime = 116;

speed.toggleCheckOutStatus(true);
console.log(speed.isCheckedOut());

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAvarageRating();

//CD
class CD extends Media {
    constructor(songs, status, rating) {
        super(songs);
        this.songs = songs;

    }

    shuffle() {
        let randomSongs = [this.songs];
        let lenght = randomSongs.length;

        for (let i = lenght - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = randomSongs[i];
            randomSongs[i] = randomSongs[j];
            randomSongs[j] = temp;
        }

        return randomSongs;
    }
}

//CATALOG CLASS

class Catalog {
    
}