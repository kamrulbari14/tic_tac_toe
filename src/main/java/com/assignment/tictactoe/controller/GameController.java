package com.assignment.tictactoe.controller;

import com.assignment.tictactoe.dto.RequestDto;
import com.assignment.tictactoe.dto.Response;
import com.assignment.tictactoe.service.GameService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GameController {

    private final GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @PostMapping("/game")
    private Response game(@RequestBody RequestDto requestDto) {
        return gameService.playGame(requestDto);
    }
}
