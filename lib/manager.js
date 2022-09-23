const Employee = require('./employee')

class Manager extends Employee {
    getRole() {
        return "Manager"
    }
}

let shane = new Manager('shane', 42, 'email')

console.log(shane)
console.log(shane.getRole())