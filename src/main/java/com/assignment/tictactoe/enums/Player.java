package com.assignment.tictactoe.enums;

public enum Player {
    X(1), O(2);

    private Integer value;

    Player(Integer value) {
        this.value = value;
    }

    public Integer getValue() {
        return value;
    }
}
