//SCHOOL CATALOPGUE

class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    set setName(nameToSet) {
        if (typeof (nameToSet) === 'string') {
            this._name = nameToSet;
        } else {
            return alert('INVALID NAME!')
        }
    }

    set setLevel(levelToSet) {
        if (typeof (levelToSet) === 'string') {
            this._level = levelToSet;
        } else {
            return alert('INVALID NAME!')
        }
    }

    set setStudentsNum(numberToSet) {
        if (typeof (numberToSet) === 'number') {
            this._numberOfStudents = numberToSet;
        } else {
            return alert('Invalid Input: numberOfStudents must be set to a Number.');
        }
    }

    get getName() {
        return this._name;
    }

    get getLevel() {
        return this._level;
    }

    get getStudentNum() {
        return this._numberOfStudents;
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level`);
    }

    static pickSubstituteTeacher(subTeacher) {
        let subTeacher = [];
        let lenght = subTeacher.lenght;
        const teacher = Math.floor(Math.random() * lenght - 1);

        return subTeacher[teacher];
    }

    //ADD AND SUB NUMBER OF STUDENT

}

//CHILD 1 - PRIMARY SCHOOL

class Primary extends School {
    constructor(name, numberOfStudents, pickUpPolicy) {
        super(name, 'Primary', numberOfStudents);
        this._pickUpPolicy = pickUpPolicy;
    }

    get pickUpPolicy() {
        return this.pickUpPolicy;
    }
}

const lorraineHansbuty = new Primary('Lorraine Hansbury', 514, 'Student must be picked up by a parent, guardian, opr family member over ther age 13.');
lorraineHansbuty.quickFacts();
let teacherArr = ['Jamal Crawford', 'Lou Williams', 'J.R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
console.log(lorraineHansbuty.pickSubstituteTeacher(teacherArr));

//CHILD 2 - MIDDLE SCHOOL

class Middle extends School {
    constructor(name, numberOfStudents, languages, extraClasses) {
        super(name, 'Middle', numberOfStudents);
        this._languages = languages;
        this._extraClasses = extraClasses;
    }

    get getLanguages() {
        return this._languages;
    }

    get getExtraClasses() {
        return this._extraClasses;
    }
}

const middleSchool = new Middle('Burnaby', 642, lang, extraClasses);
const lang = ['English', 'French', 'Spanish'];
const extraClasses = ['Biology', 'Paramedics', 'IT'];
console.log(middleSchool.getExtraClasses);
console.log(middleSchool.getLanguages);


//CHILD 3 - HIGH SCHOOL

class High extends School {
    constructor(name, numberOfStudents, sportsTeams, teamsNames) {
        super(name, 'High', numberOfStudents);
        this._sportsTeams = sportsTeams;
        this._teamsNames = teamsNames;
    }

    get getTeams() {
        return this._sportsTeams;
    }

    get getTeamsNames() {
        return this._teamsNames;
    }

    sortTeamsNames(arrayToSort) {
        arrayToSort.sort();
        this._teamsNames = arrayToSort;
        return this._teamsNames;
    }
}

const alSmith = new High('Al E. Smith', 415, setTeamArr, teamNames);
const setTeamArr = ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'];
const teamNames = ['Rockets', 'Raptors', 'Flying Eagles', 'Speed Runners'];
console.log(alSmith.getTeams());

//=====================================================================================

//SCHOOL CATALOG

class SchoolCatalog {
    constructor() {
        this._primary = [];
        this._middle = [];
        this._high = [];
    }

    get primary() {
        return this._primary;
    }

    get middle() {
        return this._middle;
    }

    get high() {
        return this._high;
    }

    addPrimary(value) {
        //adding number into new array which is equal to this ratings
        this.primary.push(value);
    }

    addMiddle(value) {
        //adding number into new array which is equal to this ratings
        this.middle.push(value);
    }

    addHigh(value) {
        //adding number into new array which is equal to this ratings
        this.high.push(value);
    }
}

const schools = new SchoolCatalog(lorraineHansbuty, middleSchool, alSmith);
const primarySchools = schools.primary();
const middleSchools = schools.middle();
const highSchools = schools.high();