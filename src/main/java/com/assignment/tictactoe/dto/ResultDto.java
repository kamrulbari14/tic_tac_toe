package com.assignment.tictactoe.dto;

import lombok.Data;

import java.util.List;

@Data
public class ResultDto {
    List<List<String>> board;
}
