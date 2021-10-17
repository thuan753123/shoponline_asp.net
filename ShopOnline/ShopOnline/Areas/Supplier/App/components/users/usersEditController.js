(function (app) {
    app.controller('usersEditController', usersEditController);
    function usersEditController($scope, $stateParams, $http, commonService, apiService, notificationService, $state) {
        var UrlGetDataforeign = "../Dashboard/getAllProducer";

        //init object Product
        $scope.u = {
        };

        $scope.ChooseImage = ChooseImage;
        $scope.reset = reset;
        $scope.initComponent = initComponent;
        //event
        $scope.initData = initData;
        $scope.Update = Update;

        function initComponent() {
            $scope.boolToStrGender = function (arg) { return arg ? 'Nam' : 'Nữ' };
            $scope.boolToStrPhoneConfirmed = function (arg) { return arg ? 'Đã xác thực' : 'Chưa xác thực' };
            $scope.boolToStrMailConfirmed = function (arg) { return arg ? 'Đã xác thực' : 'Chưa xác thực' };
            $scope.boolToStrStatus = function (arg) { return arg ? 'Khích hoạt' : 'Vô hiệu hóa' };
        }

        function ChooseImage() {
            var finder = new CKFinder();
            finder.selectActionFunction = function (fileUrl) {
                $scope.$apply(function () {
                    $scope.u.LinkAvt = fileUrl;
                })
            }
            finder.popup();
        }

        function reset() {
            $("#img1").empty();
        }

        function initData() {
            var dt = commonService.Start();
            apiService.get('users/' + $stateParams.ID, null, function (result) {
                $scope.listRole = [{
                    id: 1,
                    Name: "Quản Trị"
                }, {
                    id: 2,
                    Name: "Cộng Tác"
                }, {
                    id: 3,
                    Name: "Người dùng"
                }];
                $scope.u = result.data;
                $scope.u.DateOfBirth = new Date($scope.u.DateOfBirth);
            }, function (error) {
                notificationService.displayError(error.data);
            });
            dt.finish();
        }
        function Update() {
            var dt = commonService.Start();
            apiService.put('users/', $scope.u,
                function (result) {
                    notificationService.displaySuccess('Sửa thành công: ' + $scope.u.Name);
                    $state.go('users');
                }, function (error) {
                    notificationService.displayError('Thêm mới không thành công.');
                });
            dt.finish();
        }

        //Run init
        initComponent();
        initData();
    }
})(angular.module('AdmShopMobile.products'));