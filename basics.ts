//Primitives: number, string, boolean
//More complex types: arrays, objects
//Function types, parameters

//Primitives
let age: number;
age = 30;

let userName: string;
userName = 'Neri';

let isInstructor: boolean;
isInstructor = true;

//More complex types
let hobbies: string[];
hobbies = ['hiking', 'coding', 'reading'];

let person: {name: string, age: number};
person = {
    name: 'Neri',
    age: 33
};

let people: {name: string, age: number}[];

//Type inference
let course = 'React - the complete guide';
//course = 12345;   - not allowed

//Union type
let courseUnion: string | number = 'React - the complete guide';
courseUnion = 12345;

//Type Alias
type Person = {
    name: string,
     age: number,
     hobbies: string[]
};

let personAlias: Person;
let peopleAlias: Person[];

//Functions & Types
function add(a: number, b: number) {
    return a + b;
}

function printSmth(value: any) {
    console.log(value);
}

//Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['word', 'world'], 'well');

//Classes and Interfaces
class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];

    // constructor(first: string, last: string, age: number, courses: string[]) {
    //     this.firstName = first;
    //     this.lastName = last;
    //     this.age = age;
    //     this.courses = courses;
    // }

    constructor(public firstName: string, public lastName: string, public age: number, private courses: string[]) {}

    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Neri', 'Dain', 33, ['Angular']);
student.enrol('TS');
student.listCourses();


interface Human {
    firsName: string;
    age: number;

    greet: () => void;
}

let neri: Human;
neri = {
    firsName: 'Neri',
    age: 33,
    greet() {
        console.log('Hey');
    },
}

class Instructor implements Human {
    firsName: string;
    age: number;
    greet() {
        console.log('Hey!');
    };
  
}

