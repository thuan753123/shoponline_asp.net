(function (app) {
    app.controller('usersAddController', usersAddController);
    function usersAddController($scope, $http, commonService, apiService, notificationService, $state) {
        var UrlGetDataforeign = "../Dashboard/getAllProducer";
        //init object
        $scope.u = {
        };
        $scope.ChooseImage = ChooseImage;
        $scope.reset = reset;
        $scope.CheckValid = CheckValid;


        function CheckValid() {
            $scope.validPass = angular.equals($scope.acc.Password, $scope.acc.RePassword);
            if ($scope.validPass) {
                $("#errpass").addClass("ng-hide");
                $(':input[type="submit"]').prop('disabled', false);
            } else {
                $("#errpass").removeClass("ng-hide");
                $(':input[type="submit"]').prop('disabled', true);
            }

        }
        function initComponent() {
            var dt = commonService.Start();
            $('#NgaySinh .input-group.date').datepicker({ autoclose: true });
            $('#LookAcc .input-group.date').datepicker({ autoclose: true });
            $scope.boolToStrGender = function (arg) { return arg ? 'Nam' : 'Nữ' };
            $scope.boolToStrPhoneConfirmed = function (arg) { return arg ? 'Đã xác thực' : 'Chưa xác thực' };
            $scope.boolToStrMailConfirmed = function (arg) { return arg ? 'Đã xác thực' : 'Chưa xác thực' };
            $scope.boolToStrStatus = function (arg) { return arg ? 'Khích hoạt' : 'Vô hiệu hóa' };
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
            dt.finish();
        }

        $scope.Create = Create;
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
        function Create() {
            var dt = commonService.Start();
            apiService.post('users/', $scope.u,
                function (result) {
                    notificationService.displaySuccess(result.data.Name + ' đã được thêm mới.');
                    $state.go('users');
                }, function (error) {
                    notificationService.displayError('Thêm mới không thành công.');
                });
            dt.finish();
        }
        initComponent();
        //Run init
      
    }
})(angular.module('AdmShopMobile.products'));
