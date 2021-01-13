#Чеклист по заданиям
##1. Frontend
Main
- [x] создать папку `client`
- [x] создать приложение на React
- [x] несколько страниц с роутингом
- [x] сервис, общающийся с Node.js бекендом
- [x] unit, component, e2e тесты

Advanced
- [x] авторизация
- [x] тесты для проверки авторизации
- [ ] несколько наборов тестов

Bonus
- [x] рассмотреть 2 фреймворка: Mocha и Jest
- [x] написать примеры с каждым для своего приложения
- [x] короткие заметки об отличиях
- [x] сделать активными GitHub pages
##2. E2e Tests
Main
- [ ] 5 тестов на Playwright
- [ ] 5 тестов на Cypress

Advanced
- [ ] тесты без логина

Bonus
- [ ] скриншот-тестирование и запись видео
- [ ] статья в блог
##3. Backend. Unit testing. Component testing
Main
- [ ] сервис Java + Spring + DB
- [ ] как минимум 1 контроллер
- [ ] unit tests
- [ ] component tests
- [ ] TestContainers для теста с DB
- [ ] Mockito
- [ ] README про ненаписанные тесты

Advanced
- [ ] взаимодействие сервиса и Frontend приложения
- [ ] тесты на авторизацию
- [ ] Spring Test Configuration, которые можно переключать при помощи флага при запуске тестов
- [ ] генерация тестовой документации через Asci Doctor(Spring Rest Docs)

Bonus
- [ ] функциональность с Kafka/RabbitMQ streams
- [ ] компонентные тесты на эту функциональность
##4. CI/CD
Main
- [ ] GitHub action для запуска тестов на UI и Backend по пушу из master в ветку

Advanced
- [ ] GitHub action для деплоя приложения UI+BE на Azure/Vercel/Яндекс Облако

Bonus
- [ ] Kubernetes в Azure/Яндекс Облаке для разворачивания среды
## Reporting
Bonus
- [ ]  Allure reporting для написанных тестов

## Contract tests
Bonus
- [ ]  Pact-тесты к сервису.
## A11Y
Bonus
- [ ]  протестировать сайт на а11y с помощью инструментов от Mozilla и Lighthouse
- [ ]  пофиксить проблемы
- [ ]  сделать автоматический тест с axe
##5. Selenium
Main
- [ ] e2e тесты, используя Selenide

Advanced
- [ ] настроить запуск тестов с Selenoid

Bonus
- [ ] настроить генерацию отчетов с Allure report, сделав полный сетап в GitHub: e2e тесты с selenide запускаются с использованием Selenoid на разных окружениях(браузерах) параллельно и собирают отчет с помощью Allure Report.
- [ ] написать статью про сетап
##6.Performance
Main
- [ ] пройти воркшоп

Advanced
- [ ] настроить CI с Github actions

Bonus
- [ ] настроить генерацию отчетов с Allure report