// Shape Class
class Shape {
        // Constructor
        constructor(color, text, textColor) {   // constructor takes 3 parameters, color, text,and textcolor
            this.color = color;                 // Set color       
            this.text = text;                   // set text
            this.textColor = textColor;         // set text color
        }
    
        // Create svg Logo
        createSvgLogo() {
                // Get shape's SVG (like circle or square)
            const logoData = this.shape.createSvgLogo();

             // Add shape to main SVG and return
            return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n${logoData}\n</svg>`;
        }
    }

    // width is set at "300",height at "200", \n is new line in string, logoData is in a placeholder, 
    // the svg in beginning and end is the container for svg graphics
    // 
    
    // Class Circle - subclass of shape
    class Circle extends Shape {

        // svg for circle with text
        createSvgLogo() {
            return `<circle cx="150" cy="100" r="80" fill="${this.color}" />\n<text x="150" y="115" font-family="Arial" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        }
    }
    
    // Class Triangle - subclass of shape
    class Triangle extends Shape {

        // svg for triangle with text
        createSvgLogo() {
            return `<polygon points="150,30 270,170 30,170" fill="${this.color}" />\n<text x="150" y="115" font-family="Arial" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        }
    }
    
    // Class Square - subclass of shape
    class Square extends Shape {
        // svg for square with text
        createSvgLogo() {
            return `<rect x="50" y="20" width="200" height="200" fill="${this.color}" />\n<text x="150" y="135" font-family="Arial" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        }
    }
    
    // class NewLogo
    class NewLogo {

        constructor(answers) {
                // Shape variable
            let shape;
        
            if (answers.shape === "Circle") {              // Is shape Circle? 

                shape = new Circle(answers.shapecolor, answers.characters, answers.textcolor);          // Create New Circle Object with answers

            } else if (answers.shape === "Triangle") {    // Is shape Triangle?

                shape = new Triangle(answers.shapecolor, answers.characters, answers.textcolor);            // Create New Trangle object with answers

            } else if (answers.shape === "Square") {     // Is shape Square? 

                shape = new Square(answers.shapecolor, answers.characters, answers.textcolor);                  // Create new square object with answers
            }
            this.shape = shape; // Set shape property
        }
    
        createSvgLogo() {
                // Get svg for chosen shape
            const logoData = this.shape.createSvgLogo();
            // insert shapes svg into basic svg frame and return it
            return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n${logoData}\n</svg>`;
        }
    }
    
    module.exports = { NewLogo };       // Export