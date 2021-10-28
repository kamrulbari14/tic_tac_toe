package com.assignment.tictactoe.enums;

public enum GameStatus {
    NEW("New game"), IN_PROGRESS("Match is in progress"), FINISHED("Match was finished");

    private String value;

    GameStatus(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
