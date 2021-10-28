package com.assignment.tictactoe.enums;

public enum GameStatus {
    NEW("New Game Started"), IN_PROGRESS("Match In Progress!"), FINISHED("Match Is Finished!");

    private String value;

    GameStatus(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
