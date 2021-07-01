// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache': return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'BSD': return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'GNU': return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'IBM': return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
    case 'MIT': return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Mozilla': return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    default: return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${badge}

  Table of Contents |
  ----------------- |
  [Description](#description) |
  [Installation](#installation) |
  [Usage](#usage) |
  [License](#license) |
  [Contributions](#contributions) |
  [Questions](#questions) |

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License 
  This application is licensed under ${data.license} open-source licensing.

  ## Contributions
  Contributors: ${data.contribution}

  If you wish to contribute, please contact the email below. You may fork this repository to use for testing purposes. Thank you!

  ## Questions
   Please contact [${data.email}](mailto:${data.email}) with questions. 
   Visit my [GitHub](https://github.com/${data.username}) to see past and current projects.
`;
}

module.exports = generateMarkdown;
