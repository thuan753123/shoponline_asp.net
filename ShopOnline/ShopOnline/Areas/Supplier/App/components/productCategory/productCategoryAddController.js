(function (app) {
    app.controller('productCategoryAddController', productCategoryAddController);
    function productCategoryAddController($scope, $http, commonService, apiService, notificationService, $state) {
        //init object Product
        $scope.proCateCate = {
        };
        //Auto create alias to Product Name
        $scope.GetSeoTitle = GetSeoTitle;
        //init object Ckediter
        $scope.CkediterInit = CkediterInit;
        //init object Ckfider
        $scope.ChooseImage = ChooseImage;
        $scope.initMoreImg = initMoreImg;
        $scope.reset = reset;
        //event add Product
        $scope.Create = Create;

        function GetSeoTitle() {
            $scope.proCate.Alias = commonService.getSeoTitle($scope.proCate.ProductName);
            $scope.proCate.MetaTitle = $scope.proCate.ProductName;
        }
        function CkediterInit() {
            var dt = commonService.Start();
            CKEDITOR.replace("new_Detail");
            CKEDITOR.replace("new_Specifications");
            dt.finish();
        }
        function ChooseImage() {
            var finder = new CKFinder();
            finder.selectActionFunction = function (fileUrl) {
                $scope.$apply(function () {
                    $scope.proCate.ProductImage = fileUrl;
                })
            }
            finder.popup();
        }
        function initMoreImg() {
            var html = "";
            var val = parseInt($("#moreImg").val(), 10);
            if (val > 0) {
                for (i = 0; i < val; i++) {
                    html += '<div class="col-sm-3"><div class="form-group"><label class="control-label">Product Image</label><button class="btn btn-success btn-labeled fa fa-upload fa-lg" id="btnImg_' + i + '" onclick="callImg(' + i + ')" >Chọn ảnh</button><input type="text" class="form-control" id="img_' + i + '" disabled /></div></div>';
                }
            }
            $("#bodyMoreImg").html(html);
        }
        function callImg(i) {
            var finder = new CKFinder();
            finder.selectActionFunction = function (fileUrl) {
                $("#img_" + i).val(fileUrl);
            }
            finder.popup();
        }
        function reset() {
            $("#bodyMoreImg").attr("src", "#");
            $("#img1").empty();
            CKEDITOR.instances['new_Description'].setData("");
        }
        function GetMoreImg() {
            var moreImg = "";
            var val = parseInt($("#moreImg").val(), 10);
            if (val > 0) {
                for (i = 0; i < val; i++) {
                    if (i == val - 1) {
                        moreImg += $("#img_" + i).val();
                    } else {
                        moreImg += $("#img_" + i).val() + ",";
                    }
                }
            }
            return moreImg;
        }
        function Create() {
            var dt = commonService.Start();
            $scope.proCate.MoreImages = GetMoreImg();
            $scope.proCate.ModifiedBy = "Đình Phúc";
            $scope.proCate.CreatedBy = "Đình Phúc";
            $scope.proCate.Detail = CKEDITOR.instances['new_Detail'].getData();
            $scope.proCate.Specifications = CKEDITOR.instances['new_Specifications'].getData();

            apiService.post('products/', $scope.proCate,
                function (result) {
                    notificationService.displaySuccess(result.data.Name + ' đã được thêm mới.');
                    $state.go('products');
                }, function (error) {
                    notificationService.displayError('Thêm mới không thành công.');
                });
            dt.finish();
        }

        //Run init
        CkediterInit();
    }
})(angular.module('AdmShopMobile.products'));