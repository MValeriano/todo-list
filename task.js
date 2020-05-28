const fs    = require('fs');
const chalk = require('chalk');

const addTask = (name,description) => {

    debugger;
    
    const tasks = loadAllTasks();

   // console.log(tasks);

    const duplicatedTask = tasks.find( (task) => task.name === name) ;

    if(!duplicatedTask) 
    { 
        const newTask = {
            name,
            description,
            status: 'BACKLOG'
        }
        tasks.push(newTask);
        saveTasks(tasks);
        console.log(chalk.green.bold('Task created!'));
    }
    else 
    {
      console.log(chalk.red.bold(`Task with name ['${name}'] already taken!!` ));
    }
};

const saveTasks = (task) => {
    fs.writeFileSync('tasks.json',JSON.stringify(task));
}

const loadAllTasks = () =>{
    try {
        return JSON.parse(fs.readFileSync('tasks.json').toString());
    } catch (error) {
        return [];
    }
}

const removeTask = (name) => {
    let tasks = loadAllTasks();
    tasks = tasks.filter((tasks) => tasks.name !== name);

    saveTasks(tasks);
    console.log(chalk.green.bold(`Task with name ['${name}'] has been removed!!`));
}

const loadTask = (name) => {
    const tasks = loadAllTasks();
    tasks.find((task) => task.name === name);

    return tasks ? tasks : `Não existe a tarefa [${name}]`     
}

const updateTask = (name,status) => {
    const tasks = loadAllTasks();
    tasks.find((task) => task.name === name ? task.status = status : null);
    
    saveTasks(tasks);
    console.log(chalk.green.bold(`Task with name ['${name}'] has been updated!!`));    
}

module.exports = {
    addTask,
    removeTask,
    loadAllTasks,
    loadTask,
    updateTask
}