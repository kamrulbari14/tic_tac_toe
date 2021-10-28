package com.assignment.tictactoe.service;

import com.assignment.tictactoe.dto.RequestDto;
import com.assignment.tictactoe.dto.Response;

public interface GameService {
    Response playGame(RequestDto requestDto);
}
