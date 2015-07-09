(function () {

    createMock('/Accounting/ClosingDocumentsTable/GetTable', {
        "List": [
            {
                "Name": "1",
                "KontragentName": "23",
                "Date": "08.07.2015",
                "Summ": 180,
                "DocumentType": 2
            }
        ],
        "SumCount": {
            "CountStatement": 1,
            "SumStatement": 180
        },
        "Status": true
    });

    function createMock(url, mockObj){
        $(document).ready(function(){
            $.ajaxPrefilter(function( options, originalOptions, jqXHR) {
                if(options.url == url) {
                    options.success = function(){
                        return originalOptions.success(mockObj);
                    };
                }
            });
        });
    }
})();