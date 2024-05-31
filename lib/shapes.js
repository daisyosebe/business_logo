class Shape {
    constructor() {
        this.color = '';
        this.textColor = '';
    }

    setColor(color) {
        this.color = color;
    }

    setTextColor(color) {
        this.textColor = color;
    }

    render() {
        throw new Error("Method 'render()' must be implemented.");
    }

    calculateCenterCoordinates() {
        throw new Error("Method 'calculateCenterCoordinates()' must be implemented.");
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /> `;
    }
    calculateCenterCoordinates() {
        return { x: 150, y: 127 }; // Adjusted y-coordinate for centering
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
    calculateCenterCoordinates() {
        return { x: 150, y: 100 };
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
    }
    calculateCenterCoordinates() {
        return { x: 150, y: 100 };
    }
}

module.exports = { Triangle, Circle, Square };
