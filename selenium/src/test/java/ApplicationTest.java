import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.Selectors.*;
import static com.codeborne.selenide.Condition.*;
import static com.codeborne.selenide.CollectionCondition.*;

public class ApplicationTest {
    @BeforeEach
    public void auth() {
        open("http://localhost:3000/authorize");
        $("#authorization-login").setValue("tester");
        $("#authorization-button").click();
    }

    @Test
    public void shouldGreet() {
        $("#greeting").shouldHave(text("Hello, Tester!"));
    }
    @Test
    public void linkToHomePage() {
        $("#App-header-link").click();
        $("#home-greeting").shouldHave(text("Hello, Tester!"));
        $("#link-to-budget").shouldHave(text("To budget"));
    }

    @Test
    public void budgetCheckCoins() {
        $("#App-header-link").click();
        $("#home-greeting").shouldHave(text("Hello, Tester!"));
        $("#link-to-budget").click();
        $("#budget-greeting").shouldHave(text("Insert new coin, Tester!"));
    }
}
