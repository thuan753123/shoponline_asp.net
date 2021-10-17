(function (app) {
    app.controller('ordersListController', function ($scope, $http, commonService, apiService, notificationService) {
        $scope.pageSize = 5;
        $scope.GetData = GetData;
        $scope.Delete = Delete;
        $("#input-search").keypress(function () {
            $scope.pageSize = $scope.lstData.length;
        });
        $("#input-search").focusout(function () {
            if ($("#input-search").val() == "") {
                $scope.pageSize = 5;
                return;
            }
        });
        //xóa
        function GetData() {
            var dt = commonService.Start();
            apiService.get('bills', null, function (result) {
                $scope.lstData = result.data;
                for (i = 0; i < $scope.lstData.length; i++)
                {
                    if ($scope.lstData[i].Gender == true) {
                        $scope.lstData[i].Gender = 'Nam'
                    } else {
                        $scope.lstData[i].Gender = 'Nữ'
                    }
                }
               

            }, function (error) {
                notificationService.displayError(error.data);
            });
            dt.finish();
        }
        function Delete(id, name) {
            bootbox.confirm("Bạn chắc chắn muốn xóa sản phẩm: " + name + " ?", function (result) {
                if (result) {
                    var dt = commonService.Start();
                    apiService.del('bills/' + id, null, function (result) {
                        notificationService.displaySuccess("Xóa thành công");
                    }, function (error) {
                        notificationService.displayError(error.data);
                    });
                    dt.finish();
                }
            });
        }
        GetData();
    });
})(angular.module('AdmShopMobile.products'));