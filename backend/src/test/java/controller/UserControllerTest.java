package controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import ru.valentinnodan.testing.controller.UserController;
import ru.valentinnodan.testing.dao.UserDao;
import ru.valentinnodan.testing.model.User;

import java.awt.*;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = UserController.class)
@AutoConfigureMockMvc
@AutoConfigureRestDocs(outputDir = "target/snippets")
//@WebMvcTest(UserController.class)
public class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserDao userDao;

    private final ObjectMapper mapper = new ObjectMapper();

    @Test
    public void testGetUser() throws Exception {
        String testerLogin = "tester";
        String testerName = "Tester";
        User tester = new User(testerLogin, testerName);

        when(userDao.getUser(testerLogin)).thenReturn(Collections.singletonList(tester));

        String expectedContent =
                mapper.writeValueAsString(tester);
        mockMvc.perform(get("/api/authorize?login=" + testerLogin))
                .andExpect(status().isOk()).andDo(document("auth"));
//                .andExpect(content().string(expectedContent));
    }
}
