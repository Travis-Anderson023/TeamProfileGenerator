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

let addTeamMember = async () => {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What type of team member would you like to add?",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: "input",
            message: `What is the team members name?`,
            name: `name`,
        },
        {
            type: "input",
            message: `What is the team member's id?`,
            name: `id`,
        },
        {
            type: "input",
            message: `What is the team member's email?`,
            name: `email`,
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
            name: `officeNumber`,
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
            name: `github`,
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
            name: `school`,
        },
    ])

    const { role, name, id, email, officeNumber, github, school } = answers

    switch (role) {
        case "Manager":
            let manager = new Manager(name, id, email, officeNumber);
            teamMembers.push(manager);
            break;
        case "Engineer":
            let engineer = new Engineer(name, id, email, github);
            teamMembers.push(engineer);
            break;
        case "Intern":
            let intern = new Intern(name, id, email, school);
            teamMembers.push(intern);
            break;
    }
    return;
};


let generateHTML = (teamMembers) => {
    teamMembers.forEach(member => {
        teamCards.push(`
        <div class="card">
            <header class="card-header">
                <h1>${member.getName()}</h1>
                <h2>${member.getRole()}</h2>
            </header>
            <div class="card-body">
                <ul>
                    <li>ID: ${member.getId()}</li>
                    <li>Email: <a href="mailto:${member.getEmail}">${member.getEmail()}</a></li>
                    ${member.getRole() === "Manager" ? `<li>Office Number: ${member.getOfficeNumber()}</li>` : ""}
                    ${member.getRole() === "Engineer" ? `<li>Github: <a href="${member.getGithubLink()}">${member.getGithub()}</a></li>` : ""}
                    ${member.getRole() === "Intern" ? `<li>School: ${member.getSchool()}</li>` : ""}
                </ul>
            </div>
        </div>
        `)
    });

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
                    ${teamCards.join("")}
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
        const answers = await inquirer.prompt([
            //would you like to add another teammember?
            {
                type: "list",
                name: "addAnother",
                message: "Would you like to add another team member?",
                choices: ["Yes", "No"]
            }
        ])

        if (answers.addAnother === "Yes") {
            await addTeamMember(teamMembers.length + 1);
            await createTeamMembersArray();
        } else {
            generateHTML(teamMembers);
        }
    };
    createTeamMembersArray();

