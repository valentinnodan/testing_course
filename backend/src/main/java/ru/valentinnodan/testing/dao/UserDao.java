package ru.valentinnodan.testing.dao;

import ru.valentinnodan.testing.model.Coin;
import ru.valentinnodan.testing.model.User;

import java.util.List;

public interface UserDao {
    int addUser(User user);
    List<User> getUser(String login);
    int addCoin(String login, Coin coin);
    List<Coin> getCoins(String login);
}
