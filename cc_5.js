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

// Create a subclass called Manager that inherits from the Employee class.
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    // Add a department property and override the annual salary calculation method to include a 15% bonus. Log the amount of the bonus and the total annual salary including the bonus.
    getAnnualSalary() {
        const annualSalary = super.getAnnualSalary();
        const bonus = annualSalary * 0.15;
        const totalAnnualSalary = annualSalary + bonus;
        console.log(`Manager Name: ${this.name}, Department: ${this.department}`);
        console.log(`Bonus: ${bonus.toFixed(2)}, Total Annual Salary with Bonus: ${totalAnnualSalary.toFixed(2)}`);
        return totalAnnualSalary;
    }
}
