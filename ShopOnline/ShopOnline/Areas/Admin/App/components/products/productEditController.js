(function (app) {
    app.controller('productEditController', productEditController);
    function productEditController($scope, $stateParams, $http, commonService, apiService, notificationService, $state) {
        var UrlGetDataforeign = "../Dashboard/getAllProducer";

        //init object Product
        $scope.pro = {
        };
        $scope.ChooseImage = ChooseProductImage;
        //event add Product
        $scope.initData = initData;

        $scope.Update = Update;


        function ChooseProductImage() {
            var finder = new CKFinder();
            finder.selectActionFunction = function (fileUrl) {
                $scope.$apply(function () {
                    $scope.pro.Images = fileUrl;
                })
            }
            finder.popup();
        }

        function initData() {
            var dt = commonService.Start();
            apiService.get('GetProduct/' + $stateParams.ProductID, null, function (result) {
                if (result.data.status) {
                    $scope.pro = result.data.obj;
                }

            }, function (error) {
                notificationService.displayError(error.data);
            });
            dt.finish();
        }
        function Update() {
            var dt = commonService.Start();
            apiService.post('PutProduct', $scope.pro,
                function (result) {
                    notificationService.displaySuccess('Sửa thành công: ' + $scope.pro.Name);
                    $state.go('products');
                }, function (error) {
                    notificationService.displayError('Thêm mới không thành công.');
                });
            dt.finish();
        }

        //Run init

        initData();

    }
})(angular.module('AdmShopMobile.products'));