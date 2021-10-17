(function (app) {
    app.controller('supplierEditController', function ($scope, $http, $stateParams, commonService, apiService, notificationService, $state)
    {
        $scope.supp = {};
        $scope.Update = Update;
        function getData() {
            var dt = commonService.Start();
            apiService.get("suppliers/get?id=" + $stateParams.ID, null, function (result) {
                for(var i=0;i<result.data.length;i++)
                {
                    if(result.data[i].ID==$stateParams.ID)
                    {
                        $scope.supp = result.data[i];
                        break;
                    }
                }
                
            }, function (error) {
                notificationService.displayError(error.data);
            });
            dt.finish();
        }
        getData();
        function Update()
        {
            var dt = commonService.Start();
            apiService.put('suppliers/'+$stateParams.ID, $scope.supp,
                function (result) {
                    notificationService.displaySuccess('Sửa thành công: ' + $scope.supp.Name);
                    $state.go('supplier');
                }, function (error) {
                    notificationService.displayError('Sửa không thành công.');
                });
            dt.finish();
        }
    })
}(angular.module('AdmShopMobile.products')));