// node package inquirer
const inquirer = require("inquirer");

// importing node package system file
const fs = require("fs");

// Getting the classes from directory
const { Circle, Square, Triangle } = require(".spec/figures");

// Write responds to file
function writeToFile(fileName, responds) {
    // Start with a blank line
    let svgString = "";

    // Set the size of the logo
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

    svgString += "<k>";

    // Save user input to the file name svg
    svgString += `${responds.figure}`;

    // Transform the answers into a SVG representation
    let figureChoice;
    if (responds.figure === "Circle") {
    figureChoice = new Circle();
    svgString += `<circle cx="140" cy="105" r="75" fill="${answers.shapeBackgroundColor}"/>`;
}
    else if (responds.figure === "Square") {
    figureChoice = new Square();
    svgString += `<rect y="50" x="75" width="180 height="180" fill="${responds.figureBackgroundColor}"/>`;
    }
    else {
    figureChoice = new Triangle();
    svgString += `polygon points="160, 20 255, 190 60, 190" fill="${responds.figureBackgroundColor}"/>`;
    
    }

    // Setting text sizes and closing the k and svg tags
    svgString += `<text x="180" y="140" text-anchor="middle" font-size="50" fill="${responds.textColor}">${responds.text}</text>`;

    svgString += "</k>";

    svgString += "</svg>";

    // Writing responds to new file
    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");

    });
}

// Prompting user for responds using inquirer
function promptUser() {
    inquirer.prompt([
        // Prompt
        {
            type: "input",
            message: "What text would you like for your logo? (input 3 characters)",
            name: "text",
        },
        {
        // Color choice
            type: "input",
            message: "Which color would you like for your logo?",
            name: "textColor",

        },
        // Figure choice
        {
            type: "list",
            message: "Which shape would you like your logo to be?",
            choices: ["Circle,", "Square", "Triangle"],
            name: "figure",

        },
        // Figure color choice
        {
            type: "input",
            message: "Which figure background color (Enter choice by keyword or hex #)",
            name: "figureBackgroundColor",
        },
    ])
    .then((responds) => {
        // Error if no responses or longer than 3 characters
        if (responds.text.length > 3) {
            console.log("Answer must be 3 or less characters");
            promptUser();
        }
        else if(responds.text.length = 0) {
            console.log("Answer can't be blank");
            promptUser();

        }
        else {
            // Generate the SVG file
            writeToFile("logo.svg", responds);

        }
        });
    }
    // Run prompt when app starts 
    promptUser();


    ])
}