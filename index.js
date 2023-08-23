const fs = require('fs');       // Import 'fs' file system 
const inquirer = require('inquirer');   // Import Inquirer 8.2.4


inquirer
.prompt([

    {   // Shape Characters ( can only be 3 )
        type: 'input',
        name: 'characters',
        message: 'Add 3 characters for logo text:',
        default: 'PEY'  // Default Text : PEY ( My first name intiials )
    },

    {   
        // Text Color 
        type: 'input',
        name: 'textcolor',      
        message: 'Please add a color for Text:\nEnter a color keyword (OR a hexadecimal number):',
        default: 'black',       // Default Color : Black
    },

    {   
        // List of shapes ( Circle, Triangle, & Square )
        type: 'list',
        name: 'shape',
        message: 'Select a shape: (circle, triangle, or square):',
        choices: ['Circle', 'Triangle', 'Square'], 
    },

    {   
        // Shape Color
        type: 'input',
        name: 'shapecolor',
        message: 'Please add a color for the Shape:\nEnter a color keyword (OR a hexadecimal number):',
        default: 'darksalmon',          // Default Color
    },

])