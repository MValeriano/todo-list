const yargs = require('yargs');
const chalk = require('chalk');
const task = require('./task');

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
       // handler  : ({name,description,status}) => console.log(chalk.green.bold.inverse(`Creating a new task -> title ${name}, description ${description}, status ${status} `)) 
        handler  : ({name,description,status}) => task.addTask(name,description)
    },
);

yargs.command(
    {
        command  : 'remove',
        describe : 'Remove a task of the ToDo list',
        builder:{
            name:{
                describe: 'Task name',
                demandOption: true,
                type: 'string'
            }
        },
        handler  : ({name}) => task.removeTask(name)
    }
);

yargs.command(
    {
        command  : 'list',
        describe : 'Show all tasks of th ToDo lists',
        handler  : () => console.log(JSON.stringify(task.loadAllTasks(),null,2)),
    }
);

yargs.command(
    {
        command  : 'read',
        describe : 'Read a task of the ToDo list',
        builder :{
            name:{
                describe: 'listing a specific task!',
                demandOption: true,
                type: 'string'
            }
        },        
        handler  : ({name}) => console.log(JSON.stringify(task.loadTask(name),null,2))
    }
)

yargs.command(
    {
        command  : 'update',
        describe :  'Update a task in the ToDo list',
        builder  : {
            name :{
                describe: 'Updated a task name!',
                demandOption: true,
                type: 'string'
            },
            status:{
                describe : 'Updated an option task!',
                demandOption : true,
                type : 'string'
            }            
        },
        handler: ({name,status}) => console.log(JSON.stringify(task.updateTask(name,status),null,2))
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



