//query asking for each of the 5 members info
//Employee => name, id, email, getName(), getId(), getEmail, getrole();
//Manager => extends employee => getOfficeNumber(), getrole();
//Engineer => extends employee => github, getGithub(), getrole();
//Intern => extends employee => school, getSchool(), getrole();

const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let teamMembers = [];
let teamCards = [];

let addTeamMember = async (i) => {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What type of team member would you like to add?",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: "input",
            message: `What is the team members name?`,
            name: `name${i}`,
        },
        {
            type: "input",
            message: `What is the team member's id?`,
            name: `id${i}`,
        },
        {
            type: "input",
            message: `What is the team member's email?`,
            name: `email${i}`,
        },
        //if manager ask manager quetions
        {
            type: "input",
            message: `What is the team members office number?`,
            when: ({ role }) => {
                if (role === "Manager") {
                    return true;
                } return false;
            },
            name: `officeNumber${i}`,
        },
        //if engineer ask engineer questions
        {
            type: "input",
            message: `What is the team members github?`,
            when: ({ role }) => {
                if (role === "Engineer") {
                    return true;
                } return false;
            },
            name: `github${i}`,
        },
        //if intern ask intern questions
        {
            type: "input",
            message: `What is the team members school?`,
            when: ({ role }) => {
                if (role === "Intern") {
                    return true;
                } return false;
            },
            name: `school${i}`,
        },
    ]).then(({ role, name, id, email, officeNumber, github, school }) => {
        switch (role) {
            case "Manager":
                let manager = new Manager(name, id, email, officeNumber);
                teamCards.push(manager);
                break;
            case "Engineer":
                let engineer = new Engineer(name, id, email, github);
                teamCards.push(engineer);
                break;
            case "Intern":
                let intern = new Intern(name, id, email, school);
                teamCards.push(intern);
                break;
        }
        return;
    });
};


let generateHTML = (teamMembers) => {
    let html =
        `
            <!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Team</title>
                <link rel="stylesheet" href="team.css">
            </head>
            
            <body>
                <nav>
                    <h1>My Team</h1>
                </nav>
                <main>
                    <!-- card -->
                    ${teamCards}
                </main>
            </body>
            
            </html>
        `;
    fs.writeFile("./dist/team.html", html, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
};


let createTeamMembersArray = async () => {
    const answers= await inquirer.prompt([
        //would you like to add another teammember?
        {
            type: "list",
            name: "addAnother",
            message: "Would you like to add another team member?",
            choices: ["Yes", "No"]
        }
    ])

        if (answers.addAnother === "Yes") {
            addTeamMember(teamMembers.length + 1);
            createTeamMembersArray();
        } else {
            generateHTML(teamMembers);
        }
};
createTeamMembersArray();