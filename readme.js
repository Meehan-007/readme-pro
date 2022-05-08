const inquirer = require('inquirer'); 
const generateReadme = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');


const promptUser = (projectdata) => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'To create your readme please let us know what the title of your porject is: (Required)', 
        // must be displayed at the top 
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your project title!');
            return false;
          }
        }
      }, 

      {
        type: 'input',
        name: 'name',
        message: 'what is your name? (Required)', 
        // must be displayed at the top 
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      }, 

      {
        type: 'input',
        name: 'email',
        message: 'what is your email? (not Required)', 
      }, 


      {
        type: 'input',
        name: 'username',
        message: 'what is your github username? (Required)', 
        // must be displayed at the top 
        validate: usernameInput => {
          if (usernameInput) {
            return true;
          } else {
            console.log('Please enter your username!');
            return false;
          }
        }
      },
     
      {
        type: 'input',
        name: 'description',
        message: 'please write a description?',
      }, 

      {
        type: 'input',
        name: 'installation',
        message: 'please give details on how to install or set up your app',
      },  

      {
        type: 'input',
        name: 'tests',
        message: 'please go ahead and write what tests are needed to see how the program works',
      }, 



      {
        type: 'input',
        name: 'usage',
        message: 'Please write what your project is used for or how to use it (required)', 
        // must be displayed at the top 
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter your projects usage!');
            return false;
          }
        }
      }, 

      {
        type: 'confirm',
        name: 'contributors',
        message: 'Was there any contributors?',
        default: true 

        // need an if statement to run contributors 
    
      },  

      {
        type: 'checkbox',
        name: 'languages',
        message: 'What licenses do you have? (Check all that apply)',
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD License', 'CC0', 'Attribution 4.0 International', 
        'Eclipse Public License', 'GNU', 'The Hippocratic License', 'IBM', 'ISC', 'Mit', 'Mozilla', 'Open Data Commons', 'Perl',  
        'Sil', 'WTFPL', 'Zlib']
      },

     // console.log(projectdata)   why does this code crash it all???
    ]); 
  //  .then const switch = projectdata => {
    
      //  if (projectdata.confirm) {
     //     return Contributors_function(projectdata);
    //    } else {
    //      return projectdata;
    //    }
   //   };
      
   

  }; 


  const Contributors_function = projectdata => { 
    
    if (!projectdata.contributors) {
        projectdata.contributors = [];
      } 

      return inquirer.prompt([
      {
        type: 'input',
        name: 'names1',
        message: 'Please write their name (required)', 
        // must be displayed at the top 
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter their name!');
            return false;
          }
        }
      },   

      {
        type: 'input',
        name: 'Username1',
        message: 'what is your github username? (Required)', 
        // must be displayed at the top 
        validate: UsernameInput => {
          if (UsernameInput) {
            return true;
          } else {
            console.log('Please enter their username!');
            return false;
          }
        }
      }, 

      {
        type: 'input',
        name: 'Email1',
        message: 'what is their email? (not Required)', 
      },  

      {
        type: 'confirm',
        name: 'confirmcontributors1',
        message: 'Would you like to add another contributor?',
        default: false
      }
    ]) 


    // possible that projectdata needs to be changed to contributor data
    .then(projectdata => {
        projectdata.contributors.push(projectData);
        if (projectdata.confirmcontributors1) {
          return Contributors_function(projectdata);
        } else {
          return projectdata;
        }
      });

  }
  


promptUser() 
.then(projectdata => {
  return generateReadme(projectdata);
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.then(writeFileResponse => {
  console.log(writeFileResponse);
  return copyFile();
})
.then(copyFileResponse => {
  console.log(copyFileResponse);
})
.catch(err => {
  console.log(err);
});


//https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba  

//https://choosealicense.com/.  (GPL most common) 

//Create the list and get the badges 

//shields.io.

//4. Debug for the win 


