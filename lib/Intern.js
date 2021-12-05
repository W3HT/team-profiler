const Employee = require('./Employee.js')

class Intern extends Employee {
    
    constructor(name, id, email, school) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        super(name, id, email)
        this.school = school;        
    }

    getSchool() {
        return (this.school)
    }
    getRole() {
        return 'Intern'
    }

}
module.export = Intern;