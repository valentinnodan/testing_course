package ru.valentinnodan.testing.dao;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import ru.valentinnodan.testing.model.Coin;
import ru.valentinnodan.testing.model.User;

import javax.sql.DataSource;
import java.util.List;

public class UserJdbcDao extends JdbcDaoSupport implements UserDao {
    public UserJdbcDao(DataSource dataSource) {
        super();
        setDataSource(dataSource);
        String initSql = "CREATE TABLE IF NOT EXISTS USERS " +
                "( NAME VARCHAR(50) not null, " +
                "LOGIN VARCHAR(50) not null primary key);\n" +
                "CREATE TABLE IF NOT EXISTS COINS " +
                "(DATE VARCHAR(50) not null, " +
                "NAME VARCHAR(100) not null, " +
                "VALUE VARCHAR(100) not null, " +
                "LOGIN VARCHAR (50) not null, " +
                "foreign key (LOGIN) references USERS (LOGIN));\n";
        getJdbcTemplate().update(initSql);
    }

    @Override
    public int addUser(User user) {
        String sql = "INSERT INTO USERS (NAME, LOGIN) VALUES (" +
                "'" + user.getName() + "'" +
                ", " +
                "'" +user.getLogin() + "'" +
                ");";
        return getJdbcTemplate().update(sql);
    }

    @Override
    public List<User> getUser(String login) {
        String sql = "SELECT * " +
                "FROM USERS " +
                "WHERE USERS.LOGIN = \"" +
                login +
                "\";";
        return getJdbcTemplate().query(sql, new BeanPropertyRowMapper(User.class));
    }

    @Override
    public int addCoin(String login, Coin coin) {
        String sql = "INSERT INTO COINS (DATE, NAME, VALUE, LOGIN) VALUES (?, ?, ?, ?);";
        return getJdbcTemplate().update(sql, coin.getDate(), coin.getName(), coin.getValue(), login);

    }

    @Override
    public List<Coin> getCoins(String login) {
        String sql = "SELECT * " +
                "FROM COINS " +
                "WHERE COINS.LOGIN = \"" +
                login +
                "\";";
        return getJdbcTemplate().query(sql, new BeanPropertyRowMapper(Coin.class));
    }
}
