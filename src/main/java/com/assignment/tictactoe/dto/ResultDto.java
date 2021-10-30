package com.assignment.tictactoe.dto;

import lombok.Data;

@Data
public class ResultDto {
    private Boolean win;
    private Boolean draw;
    private String winningCell;
}
