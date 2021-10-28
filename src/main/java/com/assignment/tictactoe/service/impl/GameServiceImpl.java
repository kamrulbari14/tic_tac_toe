package com.assignment.tictactoe.service.impl;

import com.assignment.tictactoe.dto.RequestDto;
import com.assignment.tictactoe.dto.Response;
import com.assignment.tictactoe.enums.GameStatus;
import com.assignment.tictactoe.enums.Player;
import com.assignment.tictactoe.model.Game;
import com.assignment.tictactoe.service.GameService;
import com.assignment.tictactoe.storage.InMemoryStorage;
import com.assignment.tictactoe.util.ResponseBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class GameServiceImpl implements GameService {

    @Override
    public Response playGame(RequestDto requestDto) {
        if (requestDto.getPalyer1() != null && requestDto.getGameId() == null) {
            Game game = new Game();
            game.setBoard(new int[3][3]);
            game.setGameId(UUID.randomUUID().toString());
            game.setStatus(GameStatus.NEW.getValue());
            InMemoryStorage.getInstance().setGame(game);
            return ResponseBuilder.getSuccessResponse(HttpStatus.OK, "New game created", game);
        }

        if (requestDto.getGameId() != null && requestDto.getRow() != null && requestDto.getColumn() != null) {
            if (!InMemoryStorage.getInstance().getGames().containsKey(requestDto.getGameId())) {
                return ResponseBuilder.getFailureResponse(HttpStatus.BAD_REQUEST, "Game Doesn't exists");
            }

            Game game = InMemoryStorage.getInstance().getGames().get(requestDto.getGameId());
            if (game.getStatus().equals(GameStatus.FINISHED.getValue())) {
                return ResponseBuilder.getFailureResponse(HttpStatus.BAD_REQUEST, GameStatus.FINISHED.getValue());
            }

            int[][] board = game.getBoard();
            board[requestDto.getRow()][requestDto.getColumn()] = requestDto.getChoice().getValue();
            game.setStatus(GameStatus.IN_PROGRESS.getValue());

            Boolean xWinner = checkWinner(game.getBoard(), Player.X);
            Boolean oWinner = checkWinner(game.getBoard(), Player.O);

            if (xWinner) {
                game.setWinner(Player.X);
                game.setStatus(GameStatus.FINISHED.getValue());
            } else if (oWinner) {
                game.setWinner(Player.O);
                game.setStatus(GameStatus.FINISHED.getValue());
            }

            InMemoryStorage.getInstance().setGame(game);
            return ResponseBuilder.getSuccessResponse(HttpStatus.OK, "The result is here", game);
        }
        return ResponseBuilder.getFailureResponse(HttpStatus.INTERNAL_SERVER_ERROR, "There is some logical error");
    }

    private Boolean checkWinner(int[][] board, Player choice) {
        int[] boardArray = new int[9];
        int counterIndex = 0;
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[i].length; j++) {
                boardArray[counterIndex] = board[i][j];
                counterIndex++;
            }
        }
        int[][] winCombinations = {{0, 1, 2}, {3, 4, 5}, {6, 7, 8}, {0, 3, 6}, {1, 4, 7}, {2, 5, 8}, {0, 4, 8}, {2, 4, 6}};
        for (int i = 0; i < winCombinations.length; i++) {
            int counter = 0;
            for (int j = 0; j < winCombinations[i].length; j++) {
                if (boardArray[winCombinations[i][j]] == choice.getValue()) {
                    counter++;
                    if (counter == 3) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
