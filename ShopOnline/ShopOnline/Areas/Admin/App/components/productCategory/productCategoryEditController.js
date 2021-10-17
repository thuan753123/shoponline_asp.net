(function (app) {
    app.controller('producerEditController', producerEditController);

    function producerEditController($scope, $stateParams, $http) {
        // Init Data get
        $scope.nsx;
        $scope.InitData = function () {
            var getdata = $http.get("../Dashboard/getAllProducerByID?MaNSX=" + $stateParams.MaNSX);
            getdata.then(function (NhaSanXuat) {
                $scope.nsx = NhaSanXuat.data;
                $.niftyNoty({
                    type: 'success',
                    message: 'Sửa nhà sản xuất: ' + $scope.nsx.TenNSX,
                    container: 'floating',
                    timer: 5000
                });
            }, function () {
                toastr.error('Error in getting records');
            });
        }
        $scope.InitData();
       
        // function sửa nhà sản xuất
        $scope.UpdateProducer = function () {
            var response = $http({
                method: "post",
                url: "../Dashboard/UpdateProducer",
                data: JSON.stringify($scope.nsx),
                dataType: "json"
            });
            response.then(function (msg) {
                $.niftyNoty({
                    type: 'success',
                    message: msg.data,
                    container: 'floating',
                    timer: 5000
                });
            }, function () {
                $.niftyNoty({
                    type: 'danger',
                    message: 'Lỗi',
                    container: 'floating',
                    timer: 3000
                });
            });
        }
    };
})(angular.module('AdmShopMobile.products'));