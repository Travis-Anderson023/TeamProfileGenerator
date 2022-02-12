const Engineer = require("../lib/Engineer");

describe('Checks engineer values', () => {
    it('confirms name is correct', () => {
        const engineer = new Engineer("John", 1, "myemail@gmail.com", "johnsGithub");
        expect(engineer.getName()).toEqual("John");
    });
    it('confirms id is correct', () => {
        const engineer = new Engineer("John", 1, "myemail@gmail.com", "johnsGithub");
        expect(engineer.getId()).toEqual(1);
    });
    it('confirms email is correct', () => {
        const engineer = new Engineer("John", 1, "myemail@gmail.com", "johnsGithub");
        expect(engineer.getEmail()).toEqual("myemail@gmail.com");
    });
    it('confirms github is correct', () => {
        const engineer = new Engineer("John", 1, "myemail@gmail.com", "johnsGithub");
        expect(engineer.getGithub()).toEqual("johnsGithub");
    });
    it('confirms github link is correct', () => {
        const engineer = new Engineer("John", 1, "myemail@gmail.com", "johnsGithub");
        expect(engineer.getGithubLink()).toEqual(`github.com/johnsGithub`);
    });
    it('confirms getrole returns persons role', () => {
        const engineer = new Engineer("John", 1, "myemail@gmail.com", "johnsGithub");
        expect(engineer.getRole()).toEqual("Engineer");
    });
});