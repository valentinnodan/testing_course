package ru.valentinnodan.testing.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.valentinnodan.testing.dao.UserDao;
import ru.valentinnodan.testing.model.Coin;
import ru.valentinnodan.testing.model.User;

import java.util.List;

@Controller
public class UserController {
    private final UserDao userDao;

    private final ObjectMapper mapper = new ObjectMapper();

    @Autowired
    public UserController(UserDao userDao) {
        this.userDao = userDao;
    }

    @GetMapping("/api/authorize")
    public String getUser(@RequestParam("login") String login) throws JsonProcessingException {
        return mapper.writeValueAsString(userDao.getUser(login).get(0));
    }

    @PostMapping("/api/budget")
    public String addCoin(@RequestParam("userLogin") String login,
                              @RequestParam("date") String date,
                              @RequestParam("name") String name,
                              @RequestParam("value") String value) throws JsonProcessingException {
        userDao.addCoin(login, new Coin(date, name, value));
        return mapper.writeValueAsString(userDao.getCoins(login));
    }

    @PostMapping("/api/register")
    public String addUser(@RequestParam("login") String login,
                          @RequestParam("name") String name) throws JsonProcessingException {
        userDao.addUser(new User(login, name));
        return mapper.writeValueAsString(userDao.getUser(login).get(0));
    }

    @GetMapping("/api/budget")
    public String getCoins(@RequestParam("userLogin") String login) throws JsonProcessingException {
        return mapper.writeValueAsString(userDao.getCoins(login));
    }
}
