package ru.valentinnodan.testing.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.valentinnodan.testing.dao.UserDao;
import ru.valentinnodan.testing.model.Coin;
import ru.valentinnodan.testing.model.User;

import java.util.List;

@RestController
public class UserController {
    private final UserDao userDao;
    private final ObjectMapper mapper = new ObjectMapper();

    @Autowired
    public UserController(UserDao userDao) {
        this.userDao = userDao;
    }

    @GetMapping("/api/authorize")
    public User getUser(@RequestParam("login") String login) {
        return userDao.getUser(login).get(0);
    }

    @PostMapping("/api/budget")
    public List<Coin> addCoin(@RequestParam("userLogin") String login,
                              @RequestParam("date") String date,
                              @RequestParam("name") String name,
                              @RequestParam("value") String value) {
        userDao.addCoin(login, new Coin(date, name, value));
        return userDao.getCoins(login);
    }

    @PostMapping("/api/register")
    public User addUser(@RequestParam("login") String login,
                          @RequestParam("name") String name) {
        userDao.addUser(new User(login, name));
        return userDao.getUser(login).get(0);
    }

    @GetMapping("/api/budget")
    public List<Coin> getCoins(@RequestParam("userLogin") String login) {
        return userDao.getCoins(login);
    }
}
