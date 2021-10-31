package com.assignment.tictactoe.service.impl;

import com.assignment.tictactoe.dto.RequestDto;
import com.assignment.tictactoe.dto.Response;
import com.assignment.tictactoe.dto.ResultDto;
import com.assignment.tictactoe.enums.GameStatus;
import com.assignment.tictactoe.enums.Player;
import com.assignment.tictactoe.model.Game;
import com.assignment.tictactoe.service.GameService;
import com.assignment.tictactoe.storage.InMemoryStorage;
import com.assignment.tictactoe.util.ResponseBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.UUID;

@Service
public class GameServiceImpl implements GameService {

    @Override
    public Response playGame(RequestDto requestDto) {
        if (requestDto.getPlayer() != null && requestDto.getGameId() == null) {
            Game game = new Game();
            game.setBoard(new int[3][3]);
            game.setGameId(UUID.randomUUID().toString());
            game.setStatus(GameStatus.NEW.getValue());
            game.setMessage(requestDto.getPlayer() + "'s turn !!");
            game.setTurn(requestDto.getPlayer());
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
            if (board[requestDto.getRow()][requestDto.getColumn()] == 0 && requestDto.getChoice() == game.getTurn()) {
                board[requestDto.getRow()][requestDto.getColumn()] = requestDto.getChoice().getValue();
                game.setStatus(GameStatus.IN_PROGRESS.getValue());
                if (requestDto.getChoice() == Player.CIRCLE) {
                    game.setMessage(Player.CROSS + "'s turn !!");
                    game.setTurn(Player.CROSS);
                } else if (requestDto.getChoice() == Player.CROSS) {
                    game.setMessage(Player.CIRCLE + "'s turn !!");
                    game.setTurn(Player.CIRCLE);
                }
            } else if (board[requestDto.getRow()][requestDto.getColumn()] != 0) {
                game.setMessage("Already inserted!!");
            } else {
                game.setMessage("It's not your turn now !!");
            }

            ResultDto xResult = checkWinner(game.getBoard(), Player.CROSS);
            ResultDto oResult = checkWinner(game.getBoard(), Player.CIRCLE);

            if (xResult.getWin()) {
                game.setWinner(Player.CROSS + "(X) Wins!");
                game.setWinningCell(xResult.getWinningCell());
                game.setMessage("Game Over!");
                game.setStatus(GameStatus.FINISHED.getValue());
            } else if (oResult.getWin()) {
                game.setWinner(Player.CIRCLE + "(O) Wins!");
                game.setWinningCell(oResult.getWinningCell());
                game.setMessage("Game Over!");
                game.setStatus(GameStatus.FINISHED.getValue());
            }
            if (!xResult.getWin() && !oResult.getWin() && (xResult.getDraw() || oResult.getDraw())) {
                game.setWinner("Draw!");
                game.setMessage("Game Over!");
                game.setStatus(GameStatus.FINISHED.getValue());
            }

            InMemoryStorage.getInstance().setGame(game);
            return ResponseBuilder.getSuccessResponse(HttpStatus.OK, "The result is here", game);
        }
        return ResponseBuilder.getFailureResponse(HttpStatus.INTERNAL_SERVER_ERROR, "There is some logical error");
    }

    private ResultDto checkWinner(int[][] board, Player choice) {
        ResultDto result = new ResultDto();
        result.setWin(false);
        result.setDraw(false);
        int[] boardArray = new int[9];
        int counterIndex = 0, drawCounter = 0;
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[i].length; j++) {
                boardArray[counterIndex] = board[i][j];
                counterIndex++;
                if (board[i][j] != 0) {
                    drawCounter++;
                    if (drawCounter == 9) {
                        result.setDraw(true);
                    }
                }
            }
        }
        int[][] winCombinations = {{0, 1, 2}, {3, 4, 5}, {6, 7, 8}, {0, 3, 6}, {1, 4, 7}, {2, 5, 8}, {0, 4, 8}, {2, 4, 6}};
        for (int i = 0; i < winCombinations.length; i++) {
            int counter = 0;
            for (int j = 0; j < winCombinations[i].length; j++) {
                if (boardArray[winCombinations[i][j]] == choice.getValue()) {
                    counter++;
                    if (counter == 3) {
                        result.setWin(true);
                        result.setWinningCell(Arrays.toString(winCombinations[i]));
                    }
                }
            }
        }
        return result;
    }
}
