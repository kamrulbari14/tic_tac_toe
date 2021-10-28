package com.assignment.tictactoe.controller;

import com.assignment.tictactoe.annotations.ApiController;
import com.assignment.tictactoe.dto.RequestDto;
import com.assignment.tictactoe.dto.Response;
import com.assignment.tictactoe.service.GameService;
import com.assignment.tictactoe.util.UrlConstraint;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@ApiController
@RequestMapping(value = UrlConstraint.TicTacToe.ROOT)
public class GameController {

    private final GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @PostMapping
    private Response playGame(@RequestBody RequestDto requestDto) {
        return gameService.playGame(requestDto);
    }
}
