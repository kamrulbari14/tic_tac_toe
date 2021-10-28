package com.assignment.tictactoe.dto;

import com.assignment.tictactoe.enums.Player;
import lombok.Data;

@Data
public class RequestDto {
    private String gameId;
    private Player player1;
    private Player choice;
    private Integer row;
    private Integer column;
}
