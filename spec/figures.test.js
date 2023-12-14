// Importing the figures from figures.js
const { Rectangle, Square, Triangle } = require("./figures/figures.js");

// Testing the figure
describe("Circle test", () => {
    test("Circle with teal background", () => {
        const figure = new Circle();
        figure.setColor("teal");
        expect(figure.render()).toEqual(
            `<circle cx="140" cy="105" r="75"  fill="teal" />`
        );


});

});


// Testing the figure for Square with blue
describe("Square test", () => {
    test("Square with blue background", () => {
        const figure = new Square();
        figure.setColor("blue");
        expect(figure.render()).toEqual(
            '<rect y="50" x="75" width="180" height="180" fill="blue" />'
        );
    });
});
        
// Testing the figure for Triangle with yellow
describe("Triangle test", () => {
    test("Triangle with yellow background", () => {
        const figure = new Triangle();
        figure.setColor("yellow");
        expect(figure.render()).toEqual(
            '<polygon points="160, 20 255, 190 60, 190" fill="yellow" />'

        );
    });
});