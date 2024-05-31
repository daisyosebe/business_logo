const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function main() {
  // Ensure the 'dist' directory exists, if not, create it
  const distDirectory = path.join(__dirname, 'dist');
  if (!fs.existsSync(distDirectory)) {
    fs.mkdirSync(distDirectory);
  }

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: input => input.length <= 3 || 'Text must be up to 3 characters long.'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal):'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape to create:',
      choices: ['Circle', 'Triangle', 'Square']
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
    default:
      throw new Error('Invalid shape selected.');
  }

  shape.setColor(answers.shapeColor);
  shape.setTextColor(answers.textColor);

  const centerCoordinates = shape.calculateCenterCoordinates();

  const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()}
  <text x="${centerCoordinates.x}" y="${centerCoordinates.y}" fill="${answers.textColor}" font-size="40" text-anchor="middle" alignment-baseline="middle">${answers.text}</text>
</svg>`;

  fs.writeFileSync(path.join(distDirectory, 'logo.svg'), svgContent.trim());
  console.log('Generated logo.svg');
}

main().catch(error => {
  console.error('An error occurred:', error);
  process.exit(1);
});
