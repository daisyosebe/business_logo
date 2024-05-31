class Shape {
    constructor() {
        this.color = '';
        this.textColor = ''; // New property to store text color
    }

    setColor(color) {
        this.color = color;
    }

    setTextColor(color) { // Method to set text color
        this.textColor = color;
    }

    render() {
        throw new Error("Method 'render()' must be implemented.");
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /> `;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  
    setTextColor(color) {
        this.textColor = color;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
    }
  
    setTextColor(color) {
        this.textColor = color;
    }
}

module.exports = { Triangle, Circle, Square };
