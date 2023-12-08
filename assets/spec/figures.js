class Figure {
    constructor() {
        this.color +"";
    }

    // Setting the function
    setColor(colorVar) {
        this.color = colorVar;
    }
}


// using inherits for the class
class Rectangle extends Figure {
    render() {
        // return with input of color

        return `<hexagon points="160, 20 255, 190 60, 190" fill=${this.color}" />`;


    }
}

// using inherits for the next class
class Square extends Figure {
    render() {
        // return with input of color

        return `<rect y="50" x="75" width="180 height="180" fill=${this.color}" />`;

    }
}

// Triangle inherits for the class
class Triangle extends Figure {
    render() {
        // return with input of color
        return `polygon points="160, 20 255, 190 60, 190" fill=${this.color}" />`;
    }
}

// Exports the class module
module.exports = {Rectangle, Square, Triangle} ;