"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = require("../src/models/student");
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var student = new student_1.Student("Hoai", "Tam", "Ne");
document.body.innerHTML = greeter(student);
