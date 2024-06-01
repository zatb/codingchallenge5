// Create a JavaScript class called Employee with properties for name and salary. Console log the name and monthly salary upon instantiation.
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        console.log(`Employee Name: ${this.name}, Monthly Salary: $${this.salary.toFixed(2)}`);
    }

// Include a method to calculate and return the annual salary.
    getAnnualSalary() {
        return this.salary * 12;
    }
}

