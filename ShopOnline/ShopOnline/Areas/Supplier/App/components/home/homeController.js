(function (app) {
    app.controller('homeController', homeController);

    function homeController() {
        Morris.Area({
            element: 'statisticProduct',
            data: [{
                period: 'January',
                dl: 77,
                up: 25
            }, {
                period: 'February',
                dl: 127,
                up: 58
            }, {
                period: 'March',
                dl: 115,
                up: 46
            }, {
                period: 'April',
                dl: 239,
                up: 57
            }, {
                period: 'May',
                dl: 46,
                up: 75
            }, {
                period: 'June',
                dl: 97,
                up: 57
            }, {
                period: 'July',
                dl: 105,
                up: 70
            }, {
                period: 'August',
                dl: 115,
                up: 106
            }, {
                period: 'September',
                dl: 239,
                up: 187
            }, {
                period: 'October',
                dl: 246,
                up: 215
            }],
            gridEnabled: false,
            gridLineColor: 'transparent',
            behaveLikeLine: true,
            xkey: 'period',
            ykeys: ['dl', 'up'],
            labels: ['Visitor', 'Pageview'],
            lineColors: ['#045d97'],
            pointSize: 0,
            pointStrokeColors: ['#045d97'],
            lineWidth: 0,
            resize: true,
            hideHover: 'auto',
            fillOpacity: 0.7,
            parseTime: false
        });
        Morris.Area({
            element: 'userAnalytic',
            data: [{
                period: 'January',
                dl: 77,
                up: 25
            }, {
                period: 'February',
                dl: 127,
                up: 58
            }, {
                period: 'March',
                dl: 115,
                up: 46
            }, {
                period: 'April',
                dl: 239,
                up: 57
            }, {
                period: 'May',
                dl: 46,
                up: 75
            }, {
                period: 'June',
                dl: 97,
                up: 57
            }, {
                period: 'July',
                dl: 105,
                up: 70
            }, {
                period: 'August',
                dl: 115,
                up: 106
            }, {
                period: 'September',
                dl: 239,
                up: 187
            }, {
                period: 'October',
                dl: 246,
                up: 215
            }],
            gridEnabled: false,
            gridLineColor: 'transparent',
            behaveLikeLine: true,
            xkey: 'period',
            ykeys: ['dl', 'up'],
            labels: ['Visitor', 'Pageview'],
            lineColors: ['#045d97'],
            pointSize: 0,
            pointStrokeColors: ['#045d97'],
            lineWidth: 0,
            resize: true,
            hideHover: 'auto',
            fillOpacity: 0.7,
            parseTime: false
        });
    }
})(angular.module('AdmShopMobile'));