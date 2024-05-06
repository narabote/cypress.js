describe('Покупка аватара', function () {

    it('Проверка е2е с успешной покупкой аватара и его последующей заменой', function () {
         cy.visit('https://pokemonbattle.me/'); //зайти на сайт

         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); //в маил(логин) - ввести правильный логин
         cy.get('#password').type('USER_PASSWORD'); //в поле пароль - ввести правильный пароль
         cy.get('.auth__button').click(); //на кнопку Войти - нажать

         cy.get('.header__btns > [href="/shop"]').click(); //кнопка в раздел Магазин - нажать
         cy.get('.available > button').first().click(); //первый доступный аватар - нажать кнопку Купить

         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111'); //в поле Номер - ввести валидный номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1025'); //в поле Срок - ввести срок действия карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //в поле Код - ввести код cvv карты
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('FIO'); //в поле Срок - ввести срок карты
         cy.get('.pay-btn').click(); //на кнопку Оплатить - нажать

         cy.get('#cardnumber').type('56456'); //в поле Код из пуша(смс) - ввести код
         cy.get('.payment__submit-button').click(); //на кнопку Отправить - нажать

         cy.get('.payment__success1').contains('Покупка прошла успешно'); //на экране успешной покупки - текст соответствует
         cy.get('.payment__success1').should('be.visible'); cy.get('.payment__success1')//экран успешной покупки где написан текст - виден пользователю
 })
})

 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome