import { Person } from "./models/person";
import { Student } from "./models/student";

function greeter (person: Person){
    return "Hello, " +person.firstName + " " + person.lastName;
}

let student: Student = new Student("Hoai", "Tam", "Ne");
document.body.innerHTML = greeter(student);