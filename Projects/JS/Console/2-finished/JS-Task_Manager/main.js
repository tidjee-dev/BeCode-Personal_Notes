/**=================================================================
 *                 My Task Manager - Terminal
 * -----------------------------------------------------------------
 * * Description: 
 * I have to create a task manager usable via the terminal. 
 * Using JavaScript and Node.
 * 
 * This is a challenge made during my Junior Dev formation @BeCode.
 * 
 * * Requirements:
 * - Node
 * 
 * * Dependencies:
 * - readline
 * - fs
 * - cli-table3
 * 
 * * Instructions:
 * Run `node 08-01-task-manager.js` or `npm start` in your terminal.
 * 
 * * Author: 
 * tidjee-dev (https://github.com/tidjee-dev)
 * 
 * * Date: 
 * 2024-09-16 | 2024-09-17
 * =================================================================*/

const readline = require('readline');
const fs = require('fs');
const TABLE = require('cli-table3');
const color = require('@colors/colors');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**-----------
 * *  Style
 * -----------*/

// * Colors
const RESET = '\x1b[0m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RED = '\x1b[31m';
const BLUE = '\x1b[34m';
const CYAN = '\x1b[36m';

// * Text style
const BOLD = '\x1b[1m';
const ITALIC = '\x1b[3m';
const UNDERLINE = '\x1b[4m';
const DIM = '\x1b[2m';

// * Background colors
const BG_RED = '\x1b[41m';
const BG_GREEN = '\x1b[42m';
const BG_YELLOW = '\x1b[43m';
const BG_BLUE = '\x1b[44m';
const BG_CYAN = '\x1b[46m';

// * Style (icon and colored text)
const SUCCESS = (message) => `\n🎉 ${BG_GREEN}${BOLD}${message}${RESET}\n`;
const WARNING = (message) => `\n⚠️ ${BG_YELLOW}${BOLD}${ITALIC}${message}${RESET}\n`;
const ERROR = (message) => `\n❌ ${BG_RED}${BOLD}${UNDERLINE}${message}${RESET}\n`;
const INFO = (message) => `\nℹ️ ${BG_CYAN}${BOLD}${message}${RESET}\n`;
const DEBUG = (message) => `\n🐞 ${BG_BLUE}${BOLD}${message}${RESET}\n`;
const HINT = (message) => `\n💡 ${BOLD}${DIM}${message}${RESET}\n`;
const ASK = (message) => `\n📝 ${BOLD}${message}${RESET}\n`;
const DONE = (message) => `✅ ${message}`;
const TODO = (message) => `🔳 ${message}`;

// * Table borders style
const unborderedTable = {
    'top': '', 'top-mid': '', "top-left": '', "top-right": '',
    'bottom': '', 'bottom-mid': '', "bottom-left": '', "bottom-right": '',
    'left': '', 'left-mid': '', 'mid': '', 'mid-mid': '',
    'right': '', 'right-mid': '', 'middle': ''
}

const doubleBorderedTable = {
    'top': '═', 'top-mid': '╤', "top-left": '╔', "top-right": '╗',
    'bottom': '═', 'bottom-mid': '╧', "bottom-left": '╚', "bottom-right": '╝',
    'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼',
    'right': '║', 'right-mid': '╢', 'middle': '│'
}

/**---------------
 * *  Variables
 * ---------------*/
let tasks = [];
let doneTasks = [];
let undoneTasks = [];

/**------------
 * *  Tables
 * ------------*/
const menuTable = new TABLE({
    colWidths: [20, 40],
    colAligns: ['right', 'left'],
    style: {
        compact: true
    },
    chars: unborderedTable
});

menuTable.push(
    [`\n${BOLD}l${RESET}`, `\nSee all your tasks\n`],
    [`${BOLD}n${RESET}`, `Add a task\n`],
    [`${BOLD}u${RESET}`, `Update a task\n`],
    [`${GREEN}${BOLD}v${RESET}`, `Toggle a task as (un)done\n`],
    [`${RED}${BOLD}d${RESET}`, `Delete a task\n`],
    [`${CYAN}${BOLD}h${RESET}`, `Read the help\n`],
    [`${YELLOW}${BOLD}q${RESET}`, `Exit the task manager\n`]
);

const mainTable = new TABLE({
    head: [`\n${BG_BLUE}${BOLD}My Tasks Manager${RESET}\n`],
    colWidths: [80],
    colAligns: ['center'],
    style: {
        head: ['white'],
        border: ['yellow'],
        compact: true
    },
    chars: doubleBorderedTable
});

mainTable.push(
    [`\n${UNDERLINE}${BOLD}Welcome to my tasks manager!${RESET}\n`],
    [`In this Task Manager you can:`],
    [menuTable.toString() + `\n`],
    [`This is made in ${BG_CYAN}JavaScript${RESET}.\n`],
);

const helpTable = new TABLE({
    head: [
        {
            content: `\n${BOLD}${UNDERLINE}Help${RESET}\n`,
            colSpan: 2,
            hAlign: 'center'
        }
    ],
    colWidths: ['20', '40'],
    colAligns: ['right', 'left'],
    style: {
        head: ['white'],
        compact: true
    }
});

helpTable.push(
    [`${BOLD}n${RESET}`, `Create a new task by its name. By default, the task is not done.`],
    [`${BOLD}u${RESET}`, `Rename a task.`],
    [`${BOLD}${GREEN}v${RESET}`, `Change the status of a task.`],
    [`${BOLD}${RED}d${RESET}`, `Delete a task.`],
    [`${BOLD}${CYAN}h${RESET}`, `Read this help`],
    [`${BOLD}${YELLOW}q${RESET}`, `Exit the task manager`]
);

const goodByeTable = new TABLE({
    head: [`${BLUE}${BOLD}Goodbye!${RESET}`],
    colWidths: ['80'],
    colAligns: ['center'],
    style: {
        compact: true
    }
});

goodByeTable.push(
    [`\n${UNDERLINE}${BOLD}See you next time!${RESET}\n`]
);

/**---------------
 * *  Functions
 * ---------------*/
const main = () => {
    clearScreen();
    displayMenu();
};

const askQuestion = (query, callback) => {
    rl.question(query, callback);
};

const anyKeyToContinue = () => {
    askQuestion(HINT('Press any key to return to the menu...'), () => {
        clearScreen();
        displayMenu();
    });
}

const clearScreen = () => {
    console.clear();
};

const displayMenu = () => {
    console.log(mainTable.toString());
    displayMenuOptions();
};

const displayMenuOptions = () => {
    askQuestion(`\nChoose an option: \n> `, (answer) => {
        switch (answer.toLowerCase()) {
            case 'l':
                clearScreen();
                displayTasks();
                anyKeyToContinue();
                break;
            case 'n':
                clearScreen();
                addTask();
                break;
            case 'u':
                clearScreen();
                updateTask();
                break;
            case 'v':
                clearScreen();
                toggleTask();
                break;
            case 'd':
                clearScreen();
                deleteTask();
                break;
            case 'h':
                clearScreen();
                displayHelp();
                break;
            case 'q':
                clearScreen();
                goodBye();
                break;
            default:
                clearScreen();
                console.log(WARNING(`Invalid option`), HINT(`Available options: 'l', 'n', 'u', 'v', 'd', 'h' or 'q'`));
                displayMenu();
                break;
        }
    });
};

const loadTasks = () => {
    if (!fs.existsSync('tasks.json') || fs.statSync('tasks.json').size === 0) {
        fs.writeFileSync('tasks.json', '[]', 'utf-8');

        console.log(WARNING('No tasks found. Please add a task first.'));

        return [];
    }
    return JSON.parse(fs.readFileSync('tasks.json', 'utf-8'));
};

const displayTasks = () => {
    clearScreen();

    doneTasks = findDoneTasks();
    undoneTasks = findUndoneTasks();

    sortTasks(doneTasks);
    sortTasks(undoneTasks);

    if (doneTasks.length === 0 && undoneTasks.length === 0) {
        anyKeyToContinue();
        return;
    } else if (doneTasks.length > 0 && undoneTasks.length === 0) {
        console.log(`\n${UNDERLINE}${BOLD}Done Tasks${RESET} (${doneTasks.length})\n`);
        doneTasks.forEach((task, index) => {
            const status = task.done ? DONE(task.taskName) : TODO(task.taskName);
            console.log(`${index + 1}. ${status} (id: ${task.id})`);
        });
    } else if (undoneTasks.length > 0 && doneTasks.length === 0) {
        console.log(`\n${UNDERLINE}${BOLD}Not (yet) Done Tasks${RESET} (${undoneTasks.length})\n`);
        undoneTasks.forEach((task, index) => {
            const status = task.done ? DONE(task.taskName) : TODO(task.taskName);
            console.log(`${index + 1}. ${status} (id: ${task.id})`);
        });
    } else {
        console.log(`\n${UNDERLINE}${BOLD}Done Tasks${RESET} (${doneTasks.length})\n`);
        doneTasks.forEach((task, index) => {
            const status = task.done ? DONE(task.taskName) : TODO(task.taskName);
            console.log(`${index + 1}. ${status} (id: ${task.id})`);
        });
        console.log(`\n${UNDERLINE}${BOLD}Not (yet) Done Tasks${RESET} (${undoneTasks.length})\n`);
        undoneTasks.forEach((task, index) => {
            const status = task.done ? DONE(task.taskName) : TODO(task.taskName);
            console.log(`${index + 1}. ${status} (id: ${task.id})`);
        });
    }
};

const findDoneTasks = () => {
    tasks = loadTasks();
    return tasks.filter(task => task.done);
};

const findUndoneTasks = () => {
    tasks = loadTasks();
    return tasks.filter(task => !task.done);
};

const sortTasks = (data) => {
    return data.sort((a, b) => a.taskName.localeCompare(b.taskName))
};

const addTask = () => {
    tasks = loadTasks();

    askQuestion(ASK('Give your task a name') + HINT('Leave blank to cancel'), (taskName) => {

        if (!taskName) {
            clearScreen();
            console.log(INFO('Task creation cancelled.'));
            return displayMenu();
        }

        if (tasks.find(task => task.taskName === taskName)) {
            clearScreen();
            console.log(INFO('A task already exists with that name.'));
            return addTask();
        }

        console.log(tasks);
        const newId = tasks.length > 0 ? tasks.length + 1 : 1;

        tasks.push({
            id: newId,
            taskName: taskName,
            done: false
        });

        saveTasks();
        clearScreen();
        console.log(SUCCESS('Task added'));
        displayMenu();
    });
};

const updateTask = () => {
    tasks = loadTasks();

    console.log(`\n${UNDERLINE}${BOLD}Tasks${RESET} (${tasks.length})\n`);

    tasks.forEach((task) => {
        const status = task.done ? DONE(task.taskName) : TODO(task.taskName);
        console.log(`${task.id}. ${status}`);
    });

    askQuestion(ASK(`Write the ID of the task you want to update`) + HINT('Leave blank to cancel'), (answer) => {
        const task = tasks.find(task => task.id === parseInt(answer));
        if (!answer) {
            clearScreen();
            console.log(INFO('Update cancelled'));
            return displayMenu();
        }

        if (!task) {
            clearScreen();
            console.log(INFO('Task not found'));
            return updateTask();
        }

        askQuestion(HINT(`Write the new task name (leave blank to keep the same)`), (newTaskName) => {
            if (newTaskName) {
                if (tasks.find(task => task.taskName === newTaskName)) {
                    clearScreen();
                    console.log(INFO('A task already exists with that name.'));
                    return updateTask();
                };

                task.taskName = newTaskName;
            };

            saveTasks();
            clearScreen();
            console.log(SUCCESS('Task updated'));
            displayMenu();
        });
    });
};

const toggleTask = () => {
    tasks = loadTasks();

    console.log(`\n${UNDERLINE}${BOLD}Tasks${RESET} (${tasks.length})\n`);

    displayTasks();

    askQuestion(ASK(`Write the ID of the task you want to mark as (un)done\n` + HINT('Leave blank to cancel')), (answer) => {
        const task = tasks.find(task => task.id === parseInt(answer));
        if (!answer) {
            clearScreen();
            console.log(INFO('Update cancelled'));
            return displayMenu();
        }

        if (!task) {
            clearScreen();
            console.log(INFO('Task not found'));
            return toggleTask();
        }

        task.done = !task.done;
        saveTasks();
        clearScreen();
        console.log(SUCCESS('Task marked as (un)done'));
        displayMenu();
    });
};

const deleteTask = () => {
    tasks = loadTasks();

    console.log(`\n${UNDERLINE}${BOLD}Tasks${RESET} (${tasks.length})\n`);

    displayTasks();

    askQuestion(ASK(`Write the id of the task you want to delete`) + HINT('Leave blank to cancel'), (answer) => {
        const task = tasks.find(task => task.id === parseInt(answer));
        if (!answer) {
            clearScreen();
            console.log(INFO('Deletion cancelled'));
            displayMenu();
            return;
        }

        if (!task) {
            clearScreen();
            console.log(INFO('Task not found'));
            return deleteTask();
        }

        tasks = tasks.filter(task => task.id !== parseInt(answer));
        saveTasks();
        clearScreen();
        console.log(SUCCESS('Task deleted'));
        displayMenu();
    });
};

const displayHelp = () => {
    console.log(helpTable.toString());
    anyKeyToContinue();
};

const goodBye = () => {
    console.log(goodByeTable.toString());
    rl.close();
};

const saveTasks = () => {
    fs.writeFileSync('tasks.json', JSON.stringify(tasks));
};

/**----------
 * *  Main
 * ----------*/

main();
