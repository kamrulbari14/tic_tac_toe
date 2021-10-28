package com.assignment.tictactoe.storage;

import com.assignment.tictactoe.model.Game;

import java.util.HashMap;
import java.util.Map;

public class InMemoryStorage {
    private static Map<String, Game> games;
    private static InMemoryStorage instance;

    private InMemoryStorage() {
        games = new HashMap<>();
    }

    public static synchronized InMemoryStorage getInstance() {
        if (instance == null) {
            instance = new InMemoryStorage();
        }
        return instance;
    }

    public Map<String, Game> getGames() {
        return games;
    }

    public void setGame(Game game) {
        games.put(game.getGameId(), game);
    }
}
