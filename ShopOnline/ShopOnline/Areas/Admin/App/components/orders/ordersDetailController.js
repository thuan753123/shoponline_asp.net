(function (app) {
    app.controller('ordersDetailController', function ($scope, $stateParams,$http, commonService, apiService, notificationService) {
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
            apiService.get('GetBill/' + $stateParams.BillID, null, function (result) {
                if (result.data.status)
                {
                    $scope.lstData = result.data.obj.BillDetails;
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
                    apiService.del('bill/' + id, null, function (result) {
                        notificationService.displayError("Xóa thành công");
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