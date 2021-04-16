//SCHOOL CATALOPGUE

class School {
    constructor(name, level, numberOfStudents) {
        this.name = name;
        this.level = level;
        this.numberOfStudents = numberOfStudents;
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

    set setStudentNum() {
        this.numberOfStudents = this.numberOfStudents;
    }

    set name(nameToSet) {
        this.name = nameToSet;
    }

    set level(levelToSet) {
        this.name = levelToSet;
    }

    set studentsNum(studentsNumToSet){
        this.numberOfStudents = studentsNumToSet;
    }
    
    quickFacts(quickFactsArr) {
        let quickFactsArr = [];
        return quickFactsArr;
    }

    pickSubstituteTeacher(subTeacher) {
        let subTeacher = [];
        return subTeacher;
    }

    //ADD AND SUB NUMBER OF STUDENT

}

//CHILD 1 - PRIMARY SCHOOL

class Primary extends School {
    constructor(pickUpPolicy) {
        super(pickUpPolicy);
        this.pickUpPolicy = this.pickUpPolicy;

    }

    get getPolicy() {
        return this.pickUpPolicy;
    }

    set policy(pickUpPolicy) {
        this.pickUpPolicy = pickUpPolicy;
    }
}


//CHILD 2 - MIDDLE SCHOOL

class Middle extends School {
    constructor() {
        super();

    }
}

//CHILD 3 - HIGH SCHOOL

class High extends School {
    constructor(sportsTeams) {
        super(sportsTeams);
        this.sportsTeams = this.sportsTeams;

    }

    get getTeams() {
        return this.sportsTeams;
    }

    set setTeams(teams){
        let teams = [];
        this.sportsTeams = teams;
    }
}