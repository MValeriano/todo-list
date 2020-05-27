const yargs = require('yargs');
const fs    = require('fs');
const chalk = require('chalk');


yargs.command(
    {
        command  : 'add',
        describe : 'Add a new task into the ToDo list',
        builder:{
            name:{
                describe     : 'Task name',
                demandOption : true,
                type         : 'string'
            },
            description:{
                describe     : 'Type of the task',
                demandOption : true,
                type         : 'string'
            },
            status:{
                describe     : 'Status of the task',
                demandOption : true,
                type         : 'string'
            }
        },
        handler  : ({name,description,status}) => console.log(chalk.green.bold.inverse(`Creating a new task -> title ${name}, description ${description}, status ${status} `)) 
    },
);

yargs.command(
    {
        command  : 'remove',
        describe : 'Remove a task of the ToDo list',
        handler  : () => console.log(chalk.red.inverse('Removing a task'))
    }
);

yargs.command(
    {
        command  : 'list',
        describe : 'Show all tasks of th ToDo lists',
        handler  : () => console.log(chalk.yellow.inverse('showing all tasks')),
    }
);

yargs.command(
    {
        command  : 'read',
        describe : 'Read a task of the ToDo list',
        handler  : () => console.log(chalk.blue.inverse('Reading a task'))
    }
)

yargs.parse();
/*
// sem o Yargs instalado, buscando os argumentos pelo process
//const [sistema,arquivo,comando,tarefa] = process.argv;

// com o Yargs instalado, buscando os argumentos pelo yargs
const { _: [comando,tarefa]} = yargs.argv;


const todoTXT = 'todo.txt';

switch (comando.toUpperCase()){
    case "ADD" : fs.appendFileSync(todoTXT,`${tarefa} \n`);
    break;
    case "REMOVE" : fs.appendFileSync(todoTXT,`REMOVE - ${tarefa} \n`);
    break;
    default : console.log('use o seguinte formato comando (ADD ou REMOVE) tarefa');
}
*/



