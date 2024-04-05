import { Person } from "./person";

export class Student implements Person {
    fullName: string;
    firstName: string;
    middleInitial: string;
    lastName: string;
    constructor(firstName: string, middleInitital: string, lastName: string) {
        this.firstName = firstName;
        this.middleInitial = middleInitital;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitital + " " + lastName;
    }
}