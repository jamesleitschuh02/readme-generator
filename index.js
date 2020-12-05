const inquire = require('inquirer');
const fs = require('fs');

inquire.prompt([
    {
        type: "input",
        name: "title",
        message: "What is your project Title?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage information?"
    },
    {
        type: "input",
        name: "installation",
        message: "Type in any additional commands for installation/dependencies?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Add contributions"
    },
    {
        type: "input",
        name: "tests",
        message: "Enter any additional tests the user may want to try"
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select a license",
        choices: ["MIT","ISC","APACHE","PERL","No Official License"]
    },
    {
        type: "input",
        name: "gitHub",
        message: "Enter github username?"
    },
    {
        type: "input",
        name: "email",
        message: "Enter email address"
    }
])
.then(response => {
    if (response.license[0] === "MIT") {
        response.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    else if (response.license[0] === "ISC") {
        response.license = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    }
    else if (response.license[0] === "APACHE"){
        response.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    else if (response.license[0] === "PERL"){
        response.license = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
    }
    else{
        response.license = "No official license used."
    }
    
    readme =
    
`# **${response.title}**

## Table of Contents

* [Usage](#usage)
* [Installation](#installation)
* [Contributing](#contributing)
* [Testing](#testing)
* [Questions](#questions)
* [License](#license)
    
# Usage
${response.usage}

# Installation
${response.installation}

# Contributing
${response.contributing}

# Testing
${response.tests}

# Questions
Contact me at any of the following if you have any additional questions:

github.com/${response.gitHub}

${response.email}

# License
${response.license}`
    
fs.writeFile("new-readme/readMe.md", readme, {}, () => console.log("file writen!"));
})
.catch(err => {
    console.log("it failed ", err)
});