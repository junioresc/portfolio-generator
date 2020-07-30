/* const printProfileData = profileDataArr => {
    for (let i = 0; i< profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }
    console.log("================");

    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs); */

const inquirer = require("inquirer");

/* const fs = require("fs");
const generatePage = require("./src/page-template.js");
const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile("./index.html", generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log("Portfolio complete! Check out index.html to see the output!");
}); */

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        }
    ])
    .then(answers => console.log(answers));