# RPG in the Console (JS)

## Project Overview

This project is a **RPG game** designed to run in the terminal, developed using **Node.js**.

In this game, players create a character by choosing a name and a class. The chosen class determines the character's attributes, influencing how they perform in combat. The available classes are: `Dwarf`, `Elf`, `Human`, `Mage`, `Rogue`, and `Warrior`.

As players explore the game world, they will encounter enemies, each assigned a random class. Combat is turn-based, and players can attack enemies while managing their own health. Players can use potions and items to heal themselves, bolster their defenses or increase their attack.

The game continues until the player either defeats all enemies of this world or is defeated themselves. Players must strategically manage their resources and combat skills to survive and achieve victory.

The number of enemies of a world is defined by the difficulty level. The difficulty level is set by the player, and the number of enemies increases as the difficulty level increases.

At the end of a game, the player receives an amount of gold that is used to buy items and potions in the shop. The amount of gold increases as the difficulty level increases.

## Stack

- **NodeJS**
  - `cli-table3` (for formatting tables in the console)

## Functionality

### Game Mode

- **Story mode**: Play the game in story mode. The player must defeat all enemies of this world in order to go to the next one. Once a world is beaten, the player automatically retreives an amount of his health.
- **Survival mode**: Play the game in survival mode. The enemies spawn never stop, unless the player dies.

### Difficulty

- **Easy**: 5 enemies/world
- **Medium**: 10 enemies/world
- **Hard**: 15 enemies/world
- **Insane**: 20 enemies/world
- **Hardcore**: 25 enemies/world

### Player

- **Name**: The name of the player character.
- **Class**: The class of the player character, which influences attributes.
- **Inventory**: Items the player has.
  - **Potions**: Amount of potions the player has.
  - **Items**: Amount of items the player has.
  - **Gold**: Amount of gold the player has.

### Enemy

- **Name**: The name of the enemy.
- **Class**: The class of the enemy, determined randomly.

### Classes Stats

- **Health**: Amount of health points.
- **Attack**: Amount of damage the character can inflict.
- **Defence**: Amount of damage the character can mitigate.

### Potions

Potions are one-time use items.

- **Health Potion**: Restores health points.
- **Defence Potion**: Increases defense temporarily.

### Items

Usage of an item is random and depends on the item remaining durability.

The more durability an item has, the less often it can be used.

- **Sword**: Increases attack temporarily.
- **Shield**: Increases defense temporarily.
- **Helmet**: Increases health temporarily.
- **Armor**: Increases defense temporarily.
- **Magic Ring**: Increases attack and defense. Expensive but has no durability.

### Shop

- **Buy**: Purchase items from the shop.
- **Sell**: Sell items to the shop.

## Menus

### Main Menu

- **Start**: Play the game.
- **Leaderboard**: View the top players or high scores.
- **Help**: Display instructions or game controls.
- **Exit**: Quit the game.

### Start Game

- **New Game**: Start a new game.
- **Load Game**: Load a saved game.

### New Game

- **Name**: The name of the player character.
- **Class**: The class of the player character, which influences attributes.
- **Game Mode**: Select the game mode.
- **Difficulty**: The difficulty of the game, which influences the number of enemies.

### Load Game

- **Load Game**: Load a saved game.

### Game Over

- **Play Again**: Start a new game.
- **Leaderboard**: View the top players or high scores.
- **Return to Main Menu**: Return to the main menu.

### Leaderboard

- **View Leaderboard**: View the top players or high scores.
- **Reset Leaderboard**: Clear the leaderboard data.
- **Return to Main Menu**: Return to the main menu.

### Help

- **Help**: Display instructions or game controls.
- **Return to Main Menu**: Return to the main menu.

## Data

### Difficulty Levels

|    Level | Enemies/World | Gold/Enemy killed | Max potions | Max potions per type of potion | Retreives health |
| -------: | :-----------: | :---------------: | :---------: | :----------------------------: | :--------------: |
|     Easy |       5       |        10         |     10      |               5                |       +50%       |
|   Medium |      10       |         4         |      7      |               3                |       +30%       |
|     Hard |      15       |         2         |      5      |               2                |       +10%       |
|   Insane |      20       |         1         |      2      |               1                |        -         |
| Hardcore |      25       |         1         |      -      |               -                |        -         |

### Character Classes

|    Name | Health | Attack | Defence |
| ------: | :----: | :----: | :-----: |
|   Dwarf |  100   |   20   |   15    |
|     Elf |   80   |   25   |   10    |
|   Human |   90   |   15   |   20    |
|    Mage |   70   |   30   |    5    |
|   Rogue |   85   |   18   |   12    |
| Warrior |  120   |   22   |   25    |

### Player Potions

|    Name | Cost |    Health     |    Defence     |     Attack     |
| ------: | :--: | :-----------: | :------------: | :------------: |
|  Health |  10  | +20% (1 turn) |       -        |       -        |
| Defence |  15  |       -       | +10% (5 turns) |       -        |
|  Attack |  25  |       -       |       -        | +20% (5 turns) |

### Player Items

|               Name | Cost | Health | Defence | Attack | Durability |    Shop Price    |
| -----------------: | :--: | :----: | :-----: | :----: | :--------: | :--------------: |
|              Sword |  30  |   -    |    -    |  +15%  |     10     |        -         |
|             Shield |  20  |   -    |  +20%   |   -    |     20     |        -         |
|             Helmet |  15  |   -    |  +10%   |   -    |     15     |        -         |
|              Armor |  30  |   -    |  +25%   |   -    |     20     |        -         |
|         Magic Ring | 550  |  +15%  |  +10%   |  +10%  |     -      |        -         |
| Merchant's charter | 1000 |   -    |    -    |   -    |     -      | -50% (permanent) |

> durability: how many times the item can be used (attack sent or received)

## Save Data in JSON

To retreive data from an old not finished game.

### Structure of JSON save file

In an array, each element is a new game.

```json
[
  {
    "gameID": "",
    "playerName": "",
    "playerClass": "",
    "gameMode": "",
    "difficulty": "",
    "inventory": [
      "gold": 0,
      "magicRing": false,
      "merchantCharter": false,
      {
        "potionName": "",
        "quantity": 0,
        "remainingTurns": 0
      },
      {
        "itemName": "",
        "itemDurability": 0
      }
    ],
    "playerStats": {
      "playerHealth": 0,
      "playerAttack": 0,
      "playerDefence": 0
    },
    "currentWorld": {
      "remainingEnemies": 0
    }
  }
]
```

### Structure of JSON leaderboard data

```json
[
  {
    "player1": {
      "name": "",
      "date": "",
      "class": "",
      "gameMode": "",
      "difficulty": "",
      "enemiesDefeated": {
        "enemyClassName": 0
      }
    }
  }
]
```
