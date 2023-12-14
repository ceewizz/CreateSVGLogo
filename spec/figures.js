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
class Circle extends Figure {
    render() {
        // return with input of color

        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;

    }
}

// using inherits for the next class
class Square extends Figure {
    render() {
        // return with input of color

        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

// Triangle inherits for the class
class Triangle extends Figure {
    render() {
        // return with input of color
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// Exports the class module
module.exports = { Circle, Square, Triangle };