package com.assignment.tictactoe.model;

import com.assignment.tictactoe.enums.Player;
import lombok.Data;

@Data
public class Game {
    private String gameId;
    private String status;
    private int[][] board;
    private Player winner;
}
