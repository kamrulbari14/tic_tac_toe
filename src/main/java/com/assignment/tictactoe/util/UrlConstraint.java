package com.assignment.tictactoe.util;

public final class UrlConstraint {
    private UrlConstraint() {
    }

    private static final String VERSION = "/v1";
    private static final String API = "/api";

    public static class TicTacToe {
        public static final String ROOT = VERSION + API + "/playGame";
    }
}