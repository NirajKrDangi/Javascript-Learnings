// Assignment 4: Employee Class Challenge

class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    get Salary() {
        return this.salary;
    }
}

const employee1 = new Employee("Niraj", "Manager", 80000);
console.log(employee1.Salary); // Output: 80000

console.log(typeof Employee.Salary);

/**
 * :::OUTPUT:::
 * 80000
 */