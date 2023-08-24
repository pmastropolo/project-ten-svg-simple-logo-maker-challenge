const fs = require('fs');       // Import 'fs' file system 
const inquirer = require('inquirer');   // Import Inquirer 8.2.4
const { NewLogo } = require('./lib/shapes');      // Importing LogoGenerator class from shapes.js file

// Inquirer 8.2.4 = interactive command line
// ('./lib/shapes') path where shapes.js file is

// Inquirer Prompt Questions Down Below: 
inquirer
.prompt([

    {   // Shape Characters ( can only be 3 )
        type: 'input',          // User types in 3 characters for shape
        name: 'characters',     // Name: characters
        message: 'Add/Type ONLY 3 Characters for Logo Text:',     // message displayed in prompts
        default: 'PEY'  // Default Text : PEY ( My first name intiials )
    },

    {   
        // Text Color 
        type: 'input',          // User types in Text Color 
        name: 'textcolor',      // name: textcolor
        message: 'Please add a color for your Logo Text:\nEnter a color keyword (OR a hexadecimal number):',      // message displayed in prompts
        default: 'black',       // Default Color : Black
    },

    {   
        // List of shapes ( Circle, Triangle, & Square )
        type: 'list',           // Input will be a Drop down List
        name: 'shape',          // name: shape
        message: 'Select a shape: Options: (circle, triangle, or square):',      // Message displayed in prompts
        choices: ['Circle', 'Triangle', 'Square'],              // Choices for user to select from 
    },

    {   
        // Shape Color
        type: 'input',          // User types in Shape Color
        name: 'shapecolor',     // name: shapecolor
        message: 'Please add a color for the Shape:\nEnter a color keyword (OR a hexadecimal number):', // message displayed in prompts
        default: 'darksalmon',          // Default Color: darksalmon
    },

])

// After answering questions... 
.then(answers => {
        try {
            const newLogo = new NewLogo(answers);       // Create new logo off answers    
            const logoData = newLogo.createSvgLogo();          // Generate Logo 
    
            fs.writeFile('logo.svg', logoData, err => {           // writing logo into logo.svg folder
                if (err) throw err;                             
                console.log('SVG file has been saved!!!\nGo check it out under logo.svg file <3');         // If file was saved correctly, This message will display
            });
        } catch (error) {               // if something went wrong....  in try block           
            console.error("Error:", error.message);         // Error Message
        }
    })
    .catch(error => {                       // if something went wrong... catch any errors, if any in prompts/Questions
        console.error("You have an ERROR in PROMPTS:", error.message);     // Error Message shown
    });