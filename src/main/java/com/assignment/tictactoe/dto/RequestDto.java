package com.assignment.tictactoe.dto;

import lombok.Data;

@Data
public class RequestDto {
    private String palyer1;
    private String value;
    private int row;
    private int column;
}
