(function (app) {
    app.controller('productAddController', productAddController);
    function productAddController($scope, $http, commonService, apiService, notificationService, $state) {
        var UrlGetDataforeign = "../Dashboard/getAllProducer";
        //init object Product
        $scope.pro = {
        };
        //Auto create alias to Product Name
    
        //init object Ckfider
        $scope.ChooseImage = ChooseImage;
        //event add Product
        $scope.Create = Create;

    
       
        function ChooseImage() {
            var finder = new CKFinder();
            finder.selectActionFunction = function (fileUrl) {
                $scope.$apply(function () {
                    $scope.pro.Images = fileUrl;
                })
            }
            finder.popup();
        }
      
      
        function Create() {
            var dt = commonService.Start();
            apiService.post('PostProduct', $scope.pro,
                function (result) {
                    notificationService.displaySuccess($scope.pro.Name + ' đã được thêm mới.');
                    $state.go('products');
                }, function (error) {
                    notificationService.displayError('Thêm mới không thành công.');
                });
            dt.finish();
        }

    }
})(angular.module('AdmShopMobile.products'));