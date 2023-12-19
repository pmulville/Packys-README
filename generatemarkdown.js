function generateMarkdown(data) {
    return `# ${data.title}
    
    ## Table of Contents
    - [Description](#description)
    - [Installation](#instalation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Testing](#testing)
    - [Additional Info](#additional-info)

    ## Description:
    ${data.description}
    ## Instalation:
    ${data.instalation}
    ## Usage:
    ${data.usage}
    ## Contribution:
    ${data.contribution}
    ## Testing:
    ${data.testing}
    ## Contact Information:
    - GitHub: [${data.github}](https://github.com/${data.github})
    - Email: [${data.email}](mailto:user@example.com) `;
}

module.exports = generateMarkdown;