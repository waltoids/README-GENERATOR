function generateMarkdown(data) {
  return `
# ${data.title}

# Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description:
![License](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)

${data.description}

## Installation:
${data.installation}

## Usage:
${data.usage}

## License:

    For more info about the license, follow the link below.
    [License](https://opensource.org/licenses/${data.license})

## Contributing:
${data.contributing}

## Tests:
${data.tests}

## Questions?:

   Contact me at: ${data.email} for questions.


`;
}

module.exports = generateMarkdown;
