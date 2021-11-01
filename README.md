# Tic Tac Toe Game Documentation
This is a project of completing an assignment which was to make a game named **Tic Tac Toe**.

## Live link of the game
***Click the link to play:***  [TicTacToeGame.com](https://game-tic-tac-toe-kamrul.herokuapp.com/)

## `Project Details`
***The most important thing about this project is the *backend* and the *frontend* is running as a single domain on a single server.
And on `heroku` only the .jar file is deployed.***
* The project is build with **Spring Boot** and **React** where *Spring Boot* is used for **Backend** and *React* for **Frontend**.
* Tried to satisfy all the possible requirements as understood.
* The game is deployed on [heroku.com](https://game-tic-tac-toe-kamrul.herokuapp.com)
* The project is build by following the best practices which are maintained in production level software.
* There is no database used for this game. Rather than that an in memory storage is maintained which is build with singleton pattern java class.
* A unique ID  is maintained for each game which will provide multiple games running simultaneously without getting any conflicts.

## `Validations`
Here are some validations mentioned which are maintained in the game.
1. We have to choose the first player that who will provide the first turn in the game.
2. All the dynamic *messages* or *game status* is provided by the API response.
3. There is a message section which is made conditional according to different situations in the game.
4. Players can't insert same sign back to back which is handled from both **backend** and **frontend.**
5. Players can't give input to same cell twice.
6. When one game is finished, players can't give any input to the finished game which is also handled from both **backend** and **frontend.**

***All of this conditions have an individual message which is provided in the API response. And this messages will guide anyone through the game whoever is playing the game for the first time.***

## `Scopes of this project` ##

**Here are some scopes mentioned which can be developed in future.**
 
* The game can have user access.
* This game might have database to store large amount of game data. The user wise game history can be kept there.
* It can be developed as an online multi-player game also.

### `Run on Local pc/laptops` ###
To run this project locally all we have to do is follow these steps:

1. At first we have to go to the **ui** folder of the project which is in the **src** directory.
2. Then first we have to run **yarn** from terminal and then **yarn build**.
3. Then we can just run our spring boot project and the game will be available on **localhost:5639**