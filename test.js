var SITE = 'http://localhost:4303';

var md = {
    tester: require("./utils/tester"),
    project: require("./utils/project")
};

casper.test.begin('Closing documents table display on edit project page', function suite(test) {
    var projectData = {
        number: new Date().getTime(),
        kontragent: 'Контрагент',
        name:    '123'
    };

    casper.on('page.resource.received', function(){
        this.page.injectJs('mocks/statementForProject.js');
    });

    md.tester.createBizUser();
    md.project.create(projectData);
    md.project.open(projectData.number);

    casper.waitForSelector('#mainSalesTable .mdTableRow', function() {
        this.clickLabel('Закрывающие документы');
        this.capture('./screenshots/closingTableOnProjectPage.png');
        test.assertExists('.mdTableRow', 'Sale closing table has some row');
    }, onTimeOut);

    casper.run(function() {
        test.done();
        phantom.exit();
    });

    function onTimeOut(){
        this.capture('./screenshots/timeout.png');
        this.echo('Timeout', 'ERROR');
    }
});