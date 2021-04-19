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
    constructor(pickUpPolicy, uniformPolicy, foodPolicy) {
        super(pickUpPolicy, uniformPolicy, foodPolicy);
        this._level = 'Primary';
        this.pickUpPolicy = pickUpPolicy;
        this.uniformPolicy = uniformPolicy;
        this.foodPolicy = foodPolicy;
    }

    set setPolicy(policyToSet) {
        if (typeof (policyToSet) === 'string') {
            this.pickUpPolicy = policyToSet;
        } else {
            return alert('Error, not a string');
        }
    }

    set setUniformPolicy(uniform) {
        if (typeof (uniform) === 'string') {
            this.uniformPolicy = uniform;
        } else {
            return alert('Error, not a string');
        }
    }

    set setFoodPolicy(food) {
        if (typeof (food) === 'string') {
            this.foodPolicy = food;
        } else {
            return alert('Error, not a string');
        }
    }

    get getPolicy() {
        return this.pickUpPolicy;
    }

    get getUniformPolicy() {
        return this.uniformPolicy;
    }

    get getFoodPolicy() {
        return this.foodPolicy;
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
    constructor(languages, extraClasses) {
        super(languages);
        this._level = 'Middle';
        this.languages = languages;
        this.extraClasses = extraClasses;
    }

    set setLanguages(newLanguages) {
        if (typeof (newLanguages[index]) === 'string') {
            this.languages = newLanguages;
        } else {
            return alert('Error, not a string');
        }
    }

    set setExtraClasses(newClasses) {
        if (typeof (newClasses[index]) === 'string') {
            this.extraClasses = newClasses;
        } else {
            return alert('Error, not a string');
        }
    }

    get getLanguages() {
        return this.languages;
    }

    get getExtraClasses() {
        return this.extraClasses;
    }
}

const middleSchool = new Middle();
middleSchool.setLanguages = ['English', 'French', 'Spanish'];
middleSchool.setExtraClasses = ['Biology', 'Paramedics', 'IT'];


//CHILD 3 - HIGH SCHOOL

class High extends School {
    constructor(sportsTeams, teamsNames) {
        super(sportsTeams, teamsNames);
        this._level = 'High'
        this.sportsTeams = sportsTeams;
        this.teamsNames = teamsNames;
    }

    set setTeams(teams) {
        this.sportsTeams = teams; 
    }

    set setNameOfTeams(arrayOfNames) {
        this.teamsNames = arrayOfNames;
    }

    get getTeams() {
        return this.sportsTeams;
    }

    get getTeamsNames() {
        return this.teamsNames;
    }

    sortTeamsNames(arrayToSort) {
        arrayToSort.sort();
        this.teamsNames = arrayToSort;
        return this.teamsNames;
    }
}

const alSmith = new High();
alSmith.setName = 'Al E. Smith';
alSmith.setStudentsNum = 1355;
let setTeamArr = ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'];
alSmith.setTeams = setTeamArr;
alSmith.getTeams();