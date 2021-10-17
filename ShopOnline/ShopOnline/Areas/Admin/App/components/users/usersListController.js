(function (app) {
    app.controller('userListController', function ($scope, $http, commonService, apiService, notificationService) {
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

        function GetData() {
            var dt = commonService.Start();
            apiService.get('Users', null, function (result) {
                $scope.lstData = result.data;
            }, function (error) {
                notificationService.displayError(error.data);
            });
            dt.finish();
        }
        //xóa
        function Delete(id, name) {
            bootbox.confirm("Bạn chắc chắn muốn xóa : <b>" + name + "</b> ?", function (result) {
                if (result) {
                    var dt = commonService.Start();
                    apiService.del('Users/' + id, null, function (result) {
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