package dao;

import org.junit.Before;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import ru.valentinnodan.testing.dao.UserDao;
import ru.valentinnodan.testing.dao.UserJdbcDao;

@SpringBootTest
public class UserJdbcDaoTest {

    @Autowired
    UserDao userDao;

    @BeforeEach
    @AfterEach
    private void clearDatabase() {
        String createSql = "CREATE TABLE IF NOT EXISTS USERS " +
                "( NAME VARCHAR(50) not null, " +
                "LOGIN VARCHAR(50) not null primary key);\n" +
                "CREATE TABLE IF NOT EXISTS COINS " +
                "(DATE VARCHAR(50) not null, " +
                "NAME VARCHAR(100) not null, " +
                "VALUE VARCHAR(100) not null, " +
                "LOGIN VARCHAR (50) not null, " +
                "foreign key (LOGIN) references USERS (LOGIN));\n";
        String clearSql = "delete from Users where true;";
    }
}
