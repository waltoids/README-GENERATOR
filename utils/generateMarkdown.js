function generateMarkdown(data) {
  
  const {
    title,
    description,
    installation,
    usage,
    license,
    contributing,
    tests,
    username,
    email
  } = data;


  return `
# ${title}

# Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description:
![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)

${description}

## Installation:
${installation}

## Usage:
${usage}

## License:

For more info about the license, follow the link below.

[${license}](https://opensource.org/licenses/${license})

## Contributing:
${contributing}

## Tests:
${tests}

## Questions?:

![Image of ${username}](https://avatars.githubusercontent.com/${username})

Contact me at: ${email} for questions.

`;
}

module.exports = generateMarkdown;
