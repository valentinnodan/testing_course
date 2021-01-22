package dao;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.testcontainers.containers.MySQLContainer;
import ru.valentinnodan.testing.dao.UserDao;
import ru.valentinnodan.testing.dao.UserJdbcDao;
import ru.valentinnodan.testing.model.User;

import javax.sql.DataSource;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(SpringJUnit4ClassRunner.class)
public class UserJdbcDaoTest{

    public DataSource dataSource() {
        MySQLContainer<?> mysql = new MySQLContainer<>("mysql:5.6.42");
        mysql.start();
        System.out.println(mysql.getJdbcUrl());
        HikariConfig hikariConfig = new HikariConfig();
        hikariConfig.setDriverClassName(mysql.getDriverClassName());
        hikariConfig.setJdbcUrl(mysql.getJdbcUrl());
        hikariConfig.setUsername(mysql.getUsername());
        hikariConfig.setPassword(mysql.getPassword());

        return new HikariDataSource(hikariConfig);
    }
    private UserDao userDao = new UserJdbcDao(dataSource());


    @Test
    public void getUserTest() {
        assertNotNull("User DAO is null.", userDao);
        String testerLogin = "tester";
        String testerName = "Tester";
        User tester = new User(testerLogin, testerName);
        userDao.addUser(tester);
        List<User> result = userDao.getUser("tester");

        assertEquals(1, result.size());
        assertEquals("Tester", result.get(0).getName());
    }
}