const engineer = require("../lib/Engineer");

describe('Checks intern values', () => {
    it('confirms name is correct', () => {
        const intern = new engineer("John", 1, "myemail@gmail.com", "johnsSchool");
        expect(intern.getName()).toEqual("John");
    });
    it('confirms id is correct', () => {
        const intern = new engineer("John", 1, "myemail@gmail.com", "johnsSchool");
        expect(intern.getId()).toEqual(1);
    });
    it('confirms email is correct', () => {
        const intern = new engineer("John", 1, "myemail@gmail.com", "johnsSchool");
        expect(intern.getEmail()).toEqual("myemail@gmail.com");
    });
    it('confirms school is correct', () => {
        const intern = new engineer("John", 1, "myemail@gmail.com", "johnsSchool");
        expect(intern.getSchool()).toEqual("johnsSchool");
    });
    it('confirms getrole returns persons role', () => {
        const intern = new engineer("John", 1, "myemail@gmail.com", "johnsSchool");
        expect(intern.getRole()).toEqual("Intern");
    });
});