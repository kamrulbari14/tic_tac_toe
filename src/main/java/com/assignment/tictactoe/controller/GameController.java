package com.assignment.tictactoe.controller;

import com.assignment.tictactoe.dto.RequestDto;
import com.assignment.tictactoe.dto.Response;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GameController {
    @PostMapping("/game")
    private Response game(@RequestBody RequestDto requestDto) {
        String[][] board = {{null, null, null},
                {null, null, null},
                {null, null, null}};
        board[requestDto.getRow()][requestDto.getColumn()] = requestDto.getValue();
        System.out.println(board.toString());
        return Response.builder().content(board).build();
    }
}
