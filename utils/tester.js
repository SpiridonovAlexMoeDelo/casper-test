exports.createBizUser = function() {
    casper.start(SITE + "/tester", function () {
        casper.clickLabel('УСН+ЕНВД "Максимальный"', 'a');
    });

    casper.then(function () {
        casper.test.assertTextExists('Новый пользователь успешно создан', 'User created');
    });
};