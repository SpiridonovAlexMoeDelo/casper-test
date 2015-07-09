exports.create = function (project){
    casper.thenOpen(SITE + '/Biz/PrimaryDocuments/AddProject.aspx', function() {
        casper.test.assertTitle('Моё дело - Новый договор', 'New project page opened');

        this.fill('form', {
            projectContractInput: project.number,
            clientNameInput: project.kontragent,
            projectNameInput: project.name
        });
        this.clickLabel('Сохранить');
    });
};

exports.open = function (projectNumber) {
    casper.thenOpen(SITE + '/Biz/PrimaryDocuments/FirmProjects.aspx', function () {
        casper.test.assertTextExists('Всего договоров: 1', 'Project total count = 1');

        var linkSelector = '#projectTable a';
        casper.test.assertSelectorHasText(linkSelector, projectNumber, 'Project table has link');
        this.click(linkSelector);
    });
};