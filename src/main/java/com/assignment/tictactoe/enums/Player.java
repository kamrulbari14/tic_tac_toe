package com.assignment.tictactoe.enums;

public enum Player {
    CROSS(1), CIRCLE(2);

    private Integer value;

    Player(Integer value) {
        this.value = value;
    }

    public Integer getValue() {
        return value;
    }
}
