const Employee = require("../lib/Employee");

describe('checks Employee values', () => {
    it('confirms name is correct', () => {
        const employee = new Employee("John", 1, 'myemail@gmail.com');
        expect(employee.getName()).toEqual("John");
    });
    it('confirms id is correct', () => {
        const employee = new Employee("John", 1, 'myemail@gmail.com');
        expect(employee.getId()).toEqual(1);
    });
    it('confirms email is correct', () => {
        const employee = new Employee("John", 1, "myemail@gmail.com");
        expect(employee.getEmail()).toEqual("myemail@gmail.com");
    });
    it('confirms getrole returns persons role', () => {
        const employee = new Employee("John", 1, "myemail@gmail.com");
        expect(employee.getRole()).toEqual("Employee");
    });
});