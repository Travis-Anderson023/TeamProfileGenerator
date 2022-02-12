const Manager = require("../lib/Manager");

describe('Checks manager values', () => {
    it('confirms name is correct', () => {
        const manager = new Manager("John", 1, "myemail@gmail.com", 125);
        expect(manager.getName()).toEqual("John");
    });
    it('confirms id is correct', () => {
        const manager = new Manager("John", 1, "myemail@gmail.com", 125);
        expect(manager.getId()).toEqual(1);
    });
    it('confirms email is correct', () => {
        const manager = new Manager("John", 1, "myemail@gmail.com", 125);
        expect(manager.getEmail()).toEqual("myemail@gmail.com");
    });
    it('confirms office number is correct', () => {
        const manager = new Manager("John", 1, "myemail@gmail.com", 125);
        expect(manager.getOfficeNumber()).toEqual(125);
    });
    it('confirms getrole returns persons role', () => {
        const manager = new Manager("John", 1, "myemail@gmail.com", 125);
        expect(manager.getRole()).toEqual("Manager");
    });
});