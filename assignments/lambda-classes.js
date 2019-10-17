// CODE here for your Lambda Classes

class Person {
    constructor(attr){
        this.name = attr.name,
        this.age = attr.age,
        this.location = attr.location
    }
    speak(){
        return `says Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty,
        this.favLanguage = attr.favLanguage,
        this.catchPhrase = attr.catchPhrase,
        this.subject = attr.subject
    }
    demo(){
        return `Today we are learning about ${this.subject}`;
    }
    grade(){
        return `${student.name} receives a perfect score on ${this.subject}`;
    }
}

class Student extends Person {
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground,
        this.className = attr.className,
        this.favSubjects = attr.favSubjects
    }
    listsSubjects(){
        return `${student.name}'s favourite subjects are ${this.favSubjects}`;
    }
    PRAssignment(){
        return `${student.name} as submitted a PR for ${this.className}`;
    }
    sprintChallenge(){
        return `${student.name} has begun sprint challenge on ${this.favSubjects[0]}`;
    }
}

class ProjectManagers extends Instructor {
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName,
        this.favInstructor = attr.favInstructor,
        this.channel = attr.channel
    }
    standUp(){
        return `${this.name} announces to ${this.channel}, @channel standUp times!`;
    }
    debugsCode(){
        return `${this.name} debugs ${student.name}'s code on ${this.subject}`;
    }
}

const instructor = new Instructor({
    name: 'Severus',
    age: '43',
    location: 'Hogwarts',
    specialty: 'the dark arts',
    favLanguage: 'Parseltongue',
    catchPhrase: 'five points from Gryffindor',
    subject: 'Potions'
})

const student = new Student({
    name: 'Hermoine',
    age: '11',
    location: 'Gryffindor Common Room',
    previousBackground: 'nerd',
    className: 'Defense Against the Dark Arts',
    favSubjects: ['Transfiguration', ' Herbology', ' Charms']
})

const projectManagers = new ProjectManagers({
    name: 'Professor McGonagall',
    age: '66',
    location: 'Hogwarts Tower',
    specialty: 'Transfiguration',
    favLanguage: 'Latin',
    catchPhrase: 'Wood! I\'ve found you a seeker!',
    gradClassName: 'Quidditch 101',
    favInstructor: 'Madam Hooch',
    channel: 'Wizards Press',
    subject: 'Wizardry'
})


console.log(instructor.demo());
console.log(instructor.grade());
console.log(student.listsSubjects());
console.log(student.PRAssignment());
console.log(student.sprintChallenge());
console.log(projectManagers.standUp());
console.log(projectManagers.debugsCode());