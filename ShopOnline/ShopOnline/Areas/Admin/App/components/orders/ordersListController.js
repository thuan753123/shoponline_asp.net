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
        function parseJsonDate(jsonDateString) {
            return new Date(parseInt(jsonDateString.replace('/Date(', '')));
        }
        //xóa
        function GetData() {
            var dt = commonService.Start();
            apiService.get('GetBills', null, function (result) {
                if (result.data.status) {
                    $scope.lstData = result.data.lstdata;
                    for (i = 0; i < $scope.lstData.length; i++) {
                        if ($scope.lstData[i].Gender == true) {
                            $scope.lstData[i].Gender = 'Nam'
                        } else {
                            $scope.lstData[i].Gender = 'Nữ'
                        }

                        $scope.lstData[i].BuyDate = parseJsonDate($scope.lstData[i].BuyDate)

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
                    apiService.post('DelBill?id=' + id, null, function (result) {
                        notificationService.displaySuccess("Xóa thành công");
                        GetData();
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