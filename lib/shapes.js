class Shape{
    constructor(){
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
    render(){
        throw new Error("Method 'render()' must be implemented.");
    }
}