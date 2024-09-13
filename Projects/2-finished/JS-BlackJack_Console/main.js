/**==============================================================
 * *                         BLACKJACK 
 *---------------------------------------------------------------*
 *  Author: Tidjee
 *  Date: 2024-09-13
 *  Github: https://github.com/tidjee-dev
 *  Description: Small project to play BlackJack in the console 
 *  made during my Junior Dev formation @BeCode. 
 *==============================================================**/

const readline = require('readline');
const fs = require('fs');
const TABLE = require('cli-table3');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**-----------------
 **    Variables
 *------------------ */

let playerName = '';
let playerScore = 0;
let bankScore = 0;

// * Colors
const RESET = '\x1b[0m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RED = '\x1b[31m';
const BLUE = '\x1b[34m';
const CYAN = '\x1b[36m';

/**-----------------
 * *    Tables
 *------------------ */

const displayTitleScreen = () => {
    const menuTable = new TABLE({
        head: ['Menu'],
        colWidths: [40],
        colAligns: ['center'],
        style: {
            head: ['blue'],
            border: ['grey'],
            compact: true
        }
    });

    menuTable.push(
        ['1. Play'],
        [''],
        ['l. Leaderboard'],
        ['r. Reset leaderboard'],
        ['q. Exit'],
    );

    const titleTable = new TABLE({
        head: ['BlackJack!'],
        colWidths: [60],
        colAligns: ['center'],
        style: {
            head: ['blue', 'bold'],
            border: ['yellow'],
            compact: true
        },
        chars: {
            'top': '═',
            'top-mid': '╤',
            'top-left': '╔',
            'top-right': '╗',
            'bottom': '═',
            'bottom-mid': '╧',
            'bottom-left': '╚',
            'bottom-right': '╝',
            'left': '║',
            'left-mid': '╟',
            'mid': '─',
            'mid-mid': '┼',
            'right': '║',
            'right-mid': '╢',
            'middle': '│'
        }
    });

    titleTable.push(
        [`Welcome to BlackJack game in terminal.\n`],
        [`Get as close to 21 as you can without going over!\n`],
        [`So, are you able to ...\n`],
        [`${YELLOW}BEAT THE BANK!${RESET}`],
        [`\nGLHF!\n`],
        [menuTable.toString()],
        [``],
        [`Made in JavaScript by Tidjee\n`],
        [`Source code available at:`],
        [`${CYAN}https://github.com/tidjee-dev\n${RESET}`]
    );

    console.log(titleTable.toString());
}

const leaderboardTable = (scores) => {
    const table = new TABLE({
        head: ['Name', 'Date', 'Winner', 'Player Score', 'Bank Score'],
        colWidths: [15, 25, 15, 15, 15],
        style: {
            head: ['green'],
            border: ['yellow'],
        }
    });

    scores.forEach(score => {
        table.push([
            score.name,
            score.date,
            score.winner,
            score.playerScore,
            score.bankScore
        ]);
    });

    console.log(table.toString());
}

const goodbyeMenu = () => {
    const goodbyeTable = new TABLE({
        head: ['GOODBYE'],
        colWidths: [60],
        colAligns: ['center'],
        style: {
            head: ['red'],
            border: ['white'],
            compact: true
        }
    });

    goodbyeTable.push(
        ['\nThank you for playing!'],
        ['See you next time!\n']
    );

    console.log(goodbyeTable.toString());
}

/**-----------------
 * *    Functions
 *------------------ */

const startGame = () => {
    console.clear();
    displayMenu();
}

const displayMenu = () => {
    displayTitleScreen();
    displayMenuOptions();
}

const displayMenuOptions = () => {
    rl.question('\nChoose an option: ', (option) => {
        switch (option) {
            case '1':
                console.clear();
                play();
                break;
            case 'l':
                console.clear();
                readLeaderboard();
                break;
            case 'r':
                console.clear();
                resetLeaderboard();
                break;
            case 'q':
                console.clear();
                goodbyeMenu();
                rl.close();
                break;
            default:
                console.clear();
                console.log(`\nInvalid option... ${CYAN}please try again${RESET} \n`);
                displayMenu();
                break;
        }
    });
}

const anyKeyToContinue = () => {
    rl.question('\nPress any key to continue ... ', () => {
        console.clear();
        displayMenu();
    });
}

const gameLoop = () => {
    if (playerScore === 21 || bankScore === 21) {
        checkWinner();
    }

    rl.question('\nDo you want another card? (y/n): ', (answer) => {
        switch (answer.toLowerCase()) {
            case 'y':
                const newCard = getRandomNumber(1, 11);
                playerCard += newCard;
                console.log(`\nYou got: ${newCard}`);
                console.log(`\nYour total: ${playerCard}`);
                if (playerCard >= 21) {
                    checkWinner();
                    saveScore(playerCard, bankScore);
                    retry();
                    break;
                } else {
                    gameLoop();
                }
                break;
            case 'n':
                checkWinner();
                saveScore(playerCard, bankScore);
                retry();
                break;
            default:
                console.log(`\nInvalid option ... ${CYAN}Use 'y' or 'n'${RESET}`);
                gameLoop();
        }
    });
}

const checkWinner = () => {
    switch (true) {
        case (playerCard === 21):
            console.log(`${GREEN}\nBlackJack! Player wins!${RESET}`);
            retry();
            break;
        case (playerCard > 21):
            console.log(`${RED}\nBusted! Bank wins!${RESET}`);
            retry();
            break;
        case (bankScore === 21):
            console.log(`${RED}\nBank wins!${RESET}`);
            retry();
            break;
        case (playerCard > bankScore):
            console.log(`${GREEN}\nPlayer wins!${RESET}`);
            retry();
            break;
        case (bankScore > playerCard):
            console.log(`${RED}\nBank wins!${RESET}`);
            retry();
            break;
        default:
            gameLoop();
            break;
    }
    // saveScore(playerCard, bankScore);
}

const play = () => {
    console.clear();

    // Ask player for name
    rl.question('\nEnter your name: ', (name) => {
        console.log(`\nHello, ${name}!`);

        playerName = name;

        bankScore = getRandomNumber(16, 21);
        playerCard = getRandomNumber(1, 11);

        console.log(`\nPlayer: ${playerCard}`);
        gameLoop();
    });
}

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const retry = () => {
    rl.question('\nDo you want to play again? (y/n): ', (answer) => {
        switch (answer.toLowerCase()) {
            case 'y':
                play();
                break;
            case 'n':
                console.clear();
                displayMenu();
                break;
            default:
                console.log('Invalid option');
                retry();
        }
    });
}

const createJSON = () => {
    fs.writeFileSync('scores.json', JSON.stringify([]));
}

const saveScore = (playerScore, bankScore) => {
    if (!fs.existsSync('scores.json')) {
        createJSON();
    }

    const scores = JSON.parse(fs.readFileSync('scores.json'));
    // date with hh:mm:ss
    const date = new Date().toLocaleString();
    // const date =new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
    scores.push({
        name: playerName,
        date: date,
        winner: playerScore >= bankScore ? playerName : 'Bank',
        playerScore: playerScore,
        bankScore: bankScore
    });
    fs.writeFileSync('scores.json', JSON.stringify(scores, null, 2));
}

const readLeaderboard = () => {
    if (!fs.existsSync('scores.json')) {
        createJSON();
    }

    console.log(`\n${GREEN}Leaderboard${RESET}\n`);
    let scores = JSON.parse(fs.readFileSync('scores.json'));

    scores.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return b.playerScore - a.playerScore;
    });

    leaderboardTable(scores);

    anyKeyToContinue();
}

const eraseLeaderboard = () => {
    createJSON();
    console.log(`\n${GREEN}Leaderboard reset!${RESET}\n`);
    displayMenu();
}

const resetLeaderboard = () => {
    rl.question('\nAre you sure you want to reset the leaderboard? (y/n): ', (answer) => {
        switch (answer.toLowerCase()) {
            case 'y':
                eraseLeaderboard();
                break;
            case 'n':
                console.log(`\n${YELLOW}Leaderboard not reset!${RESET}\n`);
                displayMenu();
                break;
            default:
                console.log(`\nInvalid option ... ${CYAN}Use 'y' or 'n'!${RESET}`);
                resetLeaderboard();
        }
    });
}

/**-----------------
 * *    Main
 *------------------ */

startGame();