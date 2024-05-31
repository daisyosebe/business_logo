const inquirer = require ('inquirer');
const{ Triangle, Circle, Square } = require('./lib/shapes')
const fs = require('fs');

async function main(){
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
            validate: input => input.length <= 3 || 'Text must be up to 3 chacters long.'

        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (color keyword or hexadecimal):'
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (color keyword or hexadecimal):'
        }
    ]);

    let shape;
    switch (answers.shape) {
      case 'Triangle':
        shape = new Triangle();
        break;
      case 'Circle':
        shape = new Circle();
        break;
      case 'Square':
        shape = new Square();
        break;
    }
  
    shape.setColor(answers.shapeColor);

    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="150" y="125" fill="${answers.textColor}" font-size="40" text-anchor="middle" alignment-baseline="middle">${answers.text}</text>
    </svg>`;
    
      fs.writeFileSync('dist/logo.svg', svgContent.trim());
      console.log('Generated logo.svg');
    }
    
    main();

