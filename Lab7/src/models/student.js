"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(firstName, middleInitital, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitital;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitital + " " + lastName;
    }
    return Student;
}());
exports.Student = Student;
