package com.assignment.tictactoe.model;

import com.assignment.tictactoe.enums.Player;
import lombok.Data;

@Data
public class Game {
    private String gameId;
    private String status;
    private int[][] board;
    private String winner;
    private String message;
    private Player turn;
    private int[] winningCell;
}
