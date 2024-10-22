//function that returns a liscense badge based on wich license is passed in if there is no license, return an empty string
function renderLicenseBadge(license){
    if(!license){
        return '';
    }

    switch(license){
        case 'MIT':
            return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
        case 'Apache 2.0':
            return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
        case 'GPL 3.0':
            return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
        case 'BSD 3':
            return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
        default:
            return '';
    }
}

//function that returns the license link if there is no license, return an empty string
function renderLicenseLink(license){
    if(!license){
        return '';
    }

    switch(license){
        case 'MIT':
            return '[MIT](https://opensource.org/licenses/MIT)';
        case 'Apache 2.0':
            return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
        case 'GPL 3.0':
            return '[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)';
        case 'BSD 3':
            return '[BSD 3](https://opensource.org/licenses/BSD-3-Clause)';
        default:
            return '';
    }
}

//function that returns the license section of README if there is no license, return an empty string
function renderLicenseSection(license){
    if(!license){
        return '';
    }

    return `## License
    This project is licensed under the ${license} license.`;
}

//function to generate markdown for README
function generateMarkdown(data){
    return `
    # ${data.title}
    ${renderLicenseBadge(data.license)}

    ## Description
    ${data.description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    - [License](#license)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ${renderLicenseSection(data.license)}
    ${renderLicenseLink(data.license)}

    ## Contributing
    ${data.contributing}

    ## Tests
    ${data.tests}

    ## Questions
    If you have any questions, please feel free to contact me at ${data.email}. You can also find me on GitHub at [${data.username}]
    `;
}

export default generateMarkdown;