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

inquirer
    .prompt([
        {
            type: "input",
            message: "What is manager 1's name?",
            name: "managerName",
        },
        {
            type: "input",
            message: "What is manager 1's id?",
            name: "managerId",
        },
        {
            type: "input",
            message: "What is manager 1's email?",
            name: "managerEmail",
        },
        {
            type: "input",
            message: "What is manager 1's office number?",
            name: "managerOfficeNumber",
        },
        {
            type: "input",
            message: "What is Engineer 1's name?",
            name: "engineer1Name",
        },
        {
            type: "input",
            message: "What is Engineer 1's id?",
            name: "engineer1Id",
        },
        {
            type: "input",
            message: "What is Engineer 1's email?",
            name: "engineer1Email",
        },
        {
            type: "input",
            message: "What is Engineer 1's github?",
            name: "engineer1Github",
        },
        {
            type: "input",
            message: "What is Engineer 2's name?",
            name: "engineer2Name",
        },
        {
            type: "input",
            message: "What is Engineer 2's id?",
            name: "engineer2Id",
        },
        {
            type: "input",
            message: "What is Engineer 2's email?",
            name: "engineer2Email",
        },
        {
            type: "input",
            message: "What is Engineer 2's github?",
            name: "engineer2Github",
        },
        {
            type: "input",
            message: "What is Engineer 3's name?",
            name: "engineer3Name",
        },
        {
            type: "input",
            message: "What is Engineer 3's id?",
            name: "engineer3Id",
        },
        {
            type: "input",
            message: "What is Engineer 3's email?",
            name: "engineer3Email",
        },
        {
            type: "input",
            message: "What is Engineer 3's github?",
            name: "engineer3Github",
        },
        {
            type: "input",
            message: "What is Intern 1's name?",
            name: "intern1Name",
        },
        {
            type: "input",
            message: "What is Intern 1's id?",
            name: "intern1Id",
        },
        {
            type: "input",
            message: "What is Intern 1's email?",
            name: "intern1Email",
        },
        {
            type: "input",
            message: "What is Intern 1's school?",
            name: "intern1School",
        }
    ])
    .then(function (response) {
        let manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
        let engineer1Name = new Engineer(response.engineer1Name, response.engineer1Id, response.engineer1Email, response.engineer1Github);
        let engineer2Name = new Engineer(response.engineer2Name, response.engineer2Id, response.engineer2Email, response.engineer2Github);
        let engineer3Name = new Engineer(response.engineer3Name, response.engineer3Id, response.engineer3Email, response.engineer3Github);
        let intern1Name = new Intern(response.intern1Name, response.intern1Id, response.intern1Email, response.intern1School);

        let team = [manager, engineer1Name, engineer2Name, engineer3Name, intern1Name];

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
                    <div class="card">
                        <header>
                            <h2>${team[0].getName()}</h2>
                            <h3>${team[0].getRole()}</h3>
                        </header>
                        <section>
                            <div>
                                <p>ID: ${team[0].getId()}</p>
                            </div>
                            <div>
                                <p>Email: ${team[0].getEmail()}</p>
                            </div>
                            <div>
                                <p>Office Number: ${team[0].getOfficeNumber()}</p>
                            </div>
                        </section>
                    </div>
                    <div class="card">
                        <header>
                            <h2>${team[1].getName()}</h2>
                            <h3>${team[1].getRole()}</h3>
                        </header>
                        <section>
                            <div>
                                <p>ID: ${team[1].getId()}</p>
                            </div>
                            <div>
                                <p>Email: ${team[1].getEmail()}</p>
                            </div>
                            <div>
                                <p>Github: ${team[1].getGithubLink()}</p>
                            </div>
                        </section>
                    </div>
                    <div class="card">
                        <header>
                            <h2>${team[2].getName()}</h2>
                            <h3>${team[2].getRole()}</h3>
                        </header>
                        <section>
                            <div>
                                <p>ID: ${team[2].getId()}</p>
                            </div>
                            <div>
                                <p>Email: ${team[2].getEmail()}</p>
                            </div>
                            <div>
                                <p>Github: ${team[2].getGithubLink()}</p>
                            </div>
                        </section>
                    </div>
                    <div class="card">
                        <header>
                            <h2>${team[3].getName()}</h2>
                            <h3>${team[3].getRole()}</h3>
                        </header>
                        <section>
                            <div>
                                <p>ID: ${team[3].getId()}</p>
                            </div>
                            <div>
                                <p>Email: ${team[3].getEmail()}</p>
                            </div>
                            <div>
                                <p>Github: ${team[3].getGithubLink()}</p>
                            </div>
                        </section>
                    </div>
                    <div class="card">
                        <header>
                            <h2>${team[4].getName()}</h2>
                            <h3>${team[4].getRole()}</h3>
                        </header>
                        <section>
                            <div>
                                <p>ID: ${team[4].getId()}</p>
                            </div>
                            <div>
                                <p>Email: ${team[4].getEmail()}</p>
                            </div>
                            <div>
                                <p>Github: ${team[4].getSchool()}</p>
                            </div>
                        </section>
                    </div>
            
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
    });