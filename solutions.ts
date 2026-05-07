// Problem 1
const filterEvenNumbers = (nums: number[]): number[] => {
    return nums.filter(num => num % 2 == 0)
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem 2
const reverseString = (str: string): string => {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; --i) {
        reversed += str[i]
    }
    return reversed
}
console.log(reverseString("typescript"));

// Problem 3:
const checkType = (type: string | number): string | number => {
    if (typeof type === 'string')
        return type
    else
        return type
}
console.log(checkType("Hello"));
console.log(checkType(42));

// Problem 4:
const getProperty = (object: any, key: any): any => {
    return object[key]
}
const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, "name"));

// Problem 5:
interface Book {
    title: string,
    author: string,
    publishedYear: number
}

const toggleReadStatus = (book: Book) => {
    return {
        ...book,
        isRead: true
    }
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
console.log(toggleReadStatus(myBook));

// Problem 6:
class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name,
            this.age = age
    }
}
class Student extends Person {
    grade: string
    constructor(name: string, age: number, grade: string) {
        super(name, age),
            this.grade = grade
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}

const student = new Student("Alice", 20, "A");
console.log(student.getDetails());


// Problem 7:
const getIntersection = (array1: number[], array2: number[]): number[] => {
    return array1.filter(n => array2.includes(n))
}
console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));






