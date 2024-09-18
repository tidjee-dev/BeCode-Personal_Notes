# BlackJack in the Console

This project is a simple **BlackJack game** that runs in the terminal, built using **Node.js**. Players compete against the bank to score as close to 21 as possible without going over.

## Project Overview

This project was created as part of the _Junior Developer_ formation @BeCode. It's designed to be played in a terminal or console and features:

- Interactive menu to start a game, view the leaderboard, reset the leaderboard, or exit.
- Randomized card drawing for both player and bank.
- Score tracking and a leaderboard system stored in a `scores.json` file.
- Use `cli-table3` to simply create tables in the console.

### Features

1. **Play BlackJack**: Try to beat the bank by getting as close as possible to 21.
2. **Leaderboard**: View a sorted leaderboard with player names, scores, and the date of the game.
3. **Reset Leaderboard**: Option to reset the leaderboard to start fresh.
4. **Exit Game**: Quit the game anytime.

## Installation

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the game**:

   ```bash
   npm start
   ```

## How to Play

- **Start the game**:
  - Enter your name and start drawing cards.
  - Aim to get as close to **21** without going over.
- **Game commands**:
  - Draw a card by entering `y` when prompted.
  - Hold by entering `n` and let the bank play.
  - At the end of the game, the winner will be determined.
- **Game options**:
  - Press `1` to play, `l` to view the leaderboard, `r` to reset the leaderboard, and `q` to exit.

## Code Overview

### Important Files

- **`main.js`**: Main file containing the game logic.
- **`scores.json`**: Stores the leaderboard data (created automatically).

### Key Functions

1. **`startGame`**: Initializes the game and displays the main menu.
2. **`play`**: Handles the player's turn and scoring.
3. **`gameLoop`**: Main game loop that continues until the player or bank wins.
4. **`checkWinner`**: Determines the winner based on scores.
5. **`saveScore`**: Saves the game results to `scores.json`.
6. **`readLeaderboard`**: Reads and displays the leaderboard.
7. **`resetLeaderboard`**: Resets the leaderboard data.

## Leaderboard

The leaderboard is sorted by player name and scores. Each entry contains:

- **Player name**
- **Date and time of the game**
- **Winner (either the player or the bank)**
- **Player's score**
- **Bank's score**
