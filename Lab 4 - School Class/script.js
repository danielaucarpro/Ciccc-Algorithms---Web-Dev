//SCHOOL CATALOPGUE

class School {
    constructor(_name, _level, _numberOfStudents) {
        this._name = _name;
        this._level = _level;
        this._numberOfStudents = _numberOfStudents;
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
            return alert('ERROR. Please, type only numbers.');
        }
    }

    get getName() {
        return this.name;
    }

    get getLevel() {
        return this.level;
    }

    get getStudentNum() {
        return this.numberOfStudents;
    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`);
    }

    pickSubstituteTeacher(subTeacher) {
        let subTeacher = [];
        let lenght = subTeacher.lenght;
        let teacher = Math.floor(Math.random() * lenght - 1);

        return subTeacher[teacher];
    }

    //ADD AND SUB NUMBER OF STUDENT

}

//CHILD 1 - PRIMARY SCHOOL

class Primary extends School {
    constructor(pickUpPolicy) {
        super(pickUpPolicy);
        this._level = 'Primary';
        this.pickUpPolicy = this.pickUpPolicy;
    }

    set setPolicy(policyToSet) {
        let policyToSet = [];
        this.pickUpPolicy = policyToSet;
    }

    get getPolicy() {
        return this.pickUpPolicy;
    }
}

const lorraineHansbuty = new Primary();
lorraineHansbuty.setName = "Lorraine Hansbury";
lorraineHansbuty.setStudentsNum = 457;
lorraineHansbuty.setPolicy = 'Student must be picked up by a parent, guardian, opr family member over ther age 13.'
lorraineHansbuty.quickFacts();

let teacherArr = ['Jamal Crawford', 'Lou Williams', 'J.R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
console.log(lorraineHansbuty.pickSubstituteTeacher(teacherArr));

//CHILD 2 - MIDDLE SCHOOL

class Middle extends School {
    constructor() {
        super();
        this._level = 'Middle';
    }
}

//CHILD 3 - HIGH SCHOOL

class High extends School {
    constructor(sportsTeams) {
        super(sportsTeams);
        this.sportsTeams = this.sportsTeams;

    }

    set setTeams(teams) {
        let teams = [];
        this.sportsTeams = teams;
    }

    get getTeams() {
        return this.sportsTeams;
    }
}

const alSmith = new High();
alSmith.setName = 'Al E. Smith';
alSmith.setStudentsNum = 1355;
let setTeamArr = ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'];
alSmith.setTeams = setTeamArr;
alSmith.getTeams();