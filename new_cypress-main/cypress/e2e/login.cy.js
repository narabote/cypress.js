describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); //зайти на сайт

         cy.get('#mail').type('german@dolnikov.ru'); //в маил(логин) - ввести правильный логин
         cy.get('#pass').type('iLoveqastudio1'); //в поле пароль - ввести правильный пароль
         cy.get('#loginButton').click(); //на кнопку Войти - нажать

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //на экране успешной авторизации - текст соответствует значению
         cy.get('#messageHeader').should('be.visible'); //экран успешной авторизации где написан текст - виден пользователю

         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть значок крестика (чтобы закрыть окно успенш.авторизац.) - виден пользователю
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //кнопка Забыли пароль - ее цвет соответствует значению
     })

     it('Верный логин и не верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зайти на сайт

        cy.get('#mail').type('german@dolnikov.ru'); //в маил(логин) - ввести правильный логин
        cy.get('#pass').type('iLoveqastudio11'); //в поле пароль - ввести не правильный пароль
        cy.get('#loginButton').click(); //на кнопку Войти - нажать

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //на экране ошибка авторизации - текст соответствует значению
        cy.get('#messageHeader').should('be.visible'); //экран ошибки авторизации где написан текст - виден пользователю

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть значок крестика (чтобы закрыть окно ошибки авторизац.) - виден пользователю
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //кнопка Забыли пароль - ее цвет соответствует значению
    })

    it('Проверка валидации логина, что есть @', function () {
        cy.visit('https://login.qa.studio/'); //зайти на сайт

        cy.get('#mail').type('germandolnikov.ru'); //в маил(логин) - ввести не правильный логин (без @)
        cy.get('#pass').type('iLoveqastudio1'); //в поле пароль - ввести правильный пароль
        cy.get('#loginButton').click(); //на кнопку Войти - нажать

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //на экране ошибка авторизации - текст соответствует значению
        cy.get('#messageHeader').should('be.visible'); //экран ошибки авторизации где написан текст - виден пользователю

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть значок крестика (чтобы закрыть окно ошибки авторизац.) - виден пользователю
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //кнопка Забыли пароль - ее цвет соответствует значению
    })

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //зайти на сайт

        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //кнопка Забыли пароль - ее цвет соответствует значению
        cy.get('#forgotEmailButton').click(); //на кнопку Забыли пароль - нажать

        cy.get('#mailForgot').type('german@dolnikov.ru'); //в маил(логин) для восстановления - ввести правильный логин
        cy.get('#restoreEmailButton').click(); //на кнопку Отправить код - нажать


        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //на экране успешного отправления пароля на почту - текст соответствует значению
        cy.get('#messageHeader').should('be.visible'); //экран успешной отправки пароля на почту, где написан текст - виден пользователю

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть значок крестика (чтобы закрыть окно успенш.отправки пароля) - виден пользователю
    })

    it('Не верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зайти на сайт

        cy.get('#mail').type('german@dolnikov1.ru'); //в маил(логин) - ввести не правильный логин
        cy.get('#pass').type('iLoveqastudio1'); //в поле пароль - ввести правильный пароль
        cy.get('#loginButton').click(); //на кнопку Войти - нажать

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //на экране ошибка авторизации - текст соответствует значению
        cy.get('#messageHeader').should('be.visible'); //экран ошибки авторизации где написан текст - виден пользователю

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть значок крестика (чтобы закрыть окно ошибки авторизац.) - виден пользователю
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //кнопка Забыли пароль - ее цвет соответствует значению
    })

    it('Верный логин и верный пароль с ожиданием', function () {
        cy.visit('https://login.qa.studio/'); //зайти на сайт

        cy.get('#mail').type('german@dolnikov.ru'); //в маил(логин) - ввести правильный логин
        cy.get('#pass').type('iLoveqastudio1'); //в поле пароль - ввести правильный пароль
        cy.get('#loginButton').click(); //на кнопку Войти - нажать

        cy.wait(500); //ожидание

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //на экране успешной авторизации - текст соответствует значению
        cy.get('#messageHeader').should('be.visible'); //экран успешной авторизации где написан текст - виден пользователю

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть значок крестика (чтобы закрыть окно успенш.авторизац.) - виден пользователю
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //кнопка Забыли пароль - ее цвет соответствует значению
    })
    
    it('Верный логин с разным регистром и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зайти на сайт

        cy.get('#mail').type('GerMan@Dolnikov.ru'); //в маил(логин) - ввести правильный логин с разным регистром
        cy.get('#pass').type('iLoveqastudio1'); //в поле пароль - ввести правильный пароль
        cy.get('#loginButton').click(); //на кнопку Войти - нажать

        cy.wait(500); //ожидание

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //на экране ошибка авторизации - текст соответствует значению
        cy.get('#messageHeader').should('be.visible'); //экран ошибки авторизации где написан текст - виден пользователю

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть значок крестика (чтобы закрыть окно ошибки авторизац.) - виден пользователю
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //кнопка Забыли пароль - ее цвет соответствует значению
 })
})

 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 