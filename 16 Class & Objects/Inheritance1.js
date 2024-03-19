// Inheritance:
// class --> 

// class employee{
//     constructor(name){
//         this.empName = name;
//         console.log("Constructor: Employee");
//     }
//     info(){
//         console.log(`Employee Name: ${this.empName}`);
//     }

// }
// // inherit class 
// class manager extends employee{
//     info(){
//         super.info();
//         console.log(`Manager Name: ${this.empName}`);
//         super.info();
//     }
// }

// let x = new manager("Niraj");
// x.info();



/***************** Example-1 *********************/
class employee{
    constructor(name, age, salary){
        this.empName = name;
        this.empAge = age;
        this.empSalary = salary;
    }
    info(){
        console.log(" EMPLOYEE CLASS ****");
        console.log(`---> Name: ${this.empName} | Age: ${this.empAge} | Salary: ${this.empSalary}`);
    }
}

// inherit class 
class manager extends employee{
    info(){
        let travelAllowance = 1000;
        let PhoneAllowance = 300;
        console.log(" MANAGER CLASS ****");
        let totalSalary = this.empSalary + travelAllowance + PhoneAllowance;
        console.log(`---> Name: ${this.empName} | Age: ${this.empAge} | Salary: ${totalSalary}`);
    }
}

// multi inheritance
class test extends manager{

}

let x = new employee("Ramu kumar", 21, 12000);
let y = new manager("Mrs Niraj Dangi", 24, 30000);
let z = new test("Sunil", 23, 16000);
// x.info();
// y.info();
z.info();
