class Employee {
    constructor(name, id, email) {
        this.name = name,
            this.id = id,
            this.email = email
    }
    getName() {
        //TODO: Instructions want this method included. If it only returns this.name, why aren't we just calling for this.name? Something to do with closure?
    }

    getID() {
        //TODO: See getName()
    }

    getEmail() {
        //TODO: Ditto ^^
    }

    getRole() {
        return "Employee"
    }
}


module.exports = Employee