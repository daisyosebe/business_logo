const inquirer = require ('inquirer');
const{ Triangle, Circle, Square } = require('./lib/shapes')
const fs = require('fs');

async function main(){
    const answeres = await inquirer.prompt([
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
}