// node package inquirer
const inquirer = require("inquirer");

// importing node package system file
const fs = require("fs");

// Getting the classes from directory
const { Circle, Square, Triangle } = require("./spec/figures");

// Write responds to file
function writeToFile(fileName, responds) {
    // Start with a blank line
    let svgString = "";

    // Set the size of the logo
    svgString=
    '<svg version="1.1" width="300" height="200"  xmlns="http://www.w3.org/2000/svg"/>';

    svgString += "<g>";

    // Save user input to the file name svg
    svgString += `${responds.figure}`;

    // Transform the answers into a SVG representation
    let figureChoice;
    if (responds.figure === "Circle") {
    figureChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.figureBackgroundColor}"/>`;
}
    else if (responds.figure === "Square") {
    figureChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160"  fill="${responds.figureBackgroundColor}"/>`;
    }
    else {
    figureChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${responds.figureBackgroundColor}"/>`;
    
    }

    // Setting text sizes and closing the k and svg tags
    svgString+=`<text x="150" y="130" text-anchor="middle" font-size="40" fill="${responds.textColor}">${responds.text}</text>`;
    // Closing </g> tag

    svgString += "</g>";

    svgString += "</svg>";

    // Writing responds to new file
    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");

    });
}

// Prompting user for responds using inquirer
function promptUser() {
    inquirer
    .prompt([
        // Prompt
        {
            type: "input",
            message: "What text would you like for your logo? (input 3 characters)",
            name: "text",
        },
        {
        // Color choice
            type: "input",
            message: "Which color would you like for your text?",
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
        else {
            // Generate the SVG file
            writeToFile("logo.svg", responds);

        }
        });
    }
    // Run prompt when app starts 
    promptUser();
