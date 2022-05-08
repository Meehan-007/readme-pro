const icons = projectdata => { 
  return ` 
  <div class="flexrow">  
  ${projectdata.map(({languages}) => { 
     return ` <img src="https://img.shields.io/badge/license-${languages}-brightgreen"> 
   `;
  })
    } </div> `;
   
} 



//<h1 align="center">${projectdata.title} 👋</h1> <img src="https://img.shields.io/badge/license-${projectdata.languages}-brightgreen"></img>

// generateReadme function populating the README.md 

module.exports = projectdata => {  
  const { languages, ...rest} = projectdata;
//function generateReadme(projectdata) {
  return `
  <div class="flexrow"> <h1 align="center">${projectdata.title} </h1> ${icons(languages)} </div>

<br /><br />
## Description <br /><br />
🔍 ${projectdata.description}  <br /><br />
## Table of Contents <br /><br />
- [Description](#description) <br /><br />
- [Installation](#installation) <br /><br />
- [Usage](#usage) <br /><br />
- [License](#license) <br /><br />
- [Contributing](#contributing) <br /><br />
- [Tests](#tests) <br /><br />
- [Questions](#questions)  <br /><br />
## Installation <br /><br />
💾 ${projectdata.installation} <br /><br />
## Usage
💻 ${projectdata.usage} <br /><br />
## License<br /><br />
${icons(languages)}  <br /><br />
This application is covered by the ${projectdata.languages} license. <br /><br />
## Contributing
👪 ${projectdata.contributors} <br /><br />
## Tests
✏️ ${projectdata.tests} <br /><br />
## Questions
<br />
<br />
Find me on GitHub: [${projectdata.username}](https://github.com/${projectdata.username})<br />
<br />
✉️ Email me with any questions: ${projectdata.email}<br /><br />

  `;
} 

//![badge](

//console.log(projectdata.languages)


