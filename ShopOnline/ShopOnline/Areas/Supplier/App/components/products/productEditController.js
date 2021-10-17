(function (app) {
    app.controller('productEditController', productEditController);
    function productEditController($scope, $stateParams, $http, commonService, apiService, notificationService, $state) {
        var UrlGetDataforeign = "../Dashboard/getAllProducer";

        //init object Product
        $scope.pro = {
        };
        //Auto create alias to Product Name
        $scope.GetSeoTitle = GetSeoTitle;
        //init object Ckediter
        $scope.CkediterInit = CkediterInit;
        //init object Ckfider
        $scope.ChooseImage = ChooseProductImage;
        $scope.initMoreImg = initMoreImg;
        $scope.reset = reset;
        //event add Product
        $scope.initData = initData;

        $scope.Update = Update;

        function GetSeoTitle() {
            $scope.pro.Alias = commonService.getSeoTitle($scope.pro.ProductName);
            $scope.pro.MetaTitle = $scope.pro.ProductName;
        }
        function CkediterInit() {
            CKEDITOR.replace("new_Detail");
            CKEDITOR.replace("new_Specifications");
        }
        function ChooseProductImage() {
            var finder = new CKFinder();
            finder.selectActionFunction = function (fileUrl) {
                $scope.$apply(function () {
                    $scope.pro.ProductImage = fileUrl;
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

        function initData() {
         var dt = commonService.Start();
           
         apiService.get('products/' + $stateParams.ProductID, null, function (result) {
             CkediterInit();
                $scope.pro = result.data;
                CKEDITOR.instances["new_Detail"].setData($scope.pro.Detail);
                CKEDITOR.instances["new_Specifications"].setData($scope.pro.Specifications);
               
            }, function (error) {
                notificationService.displayError(error.data);
            });
            dt.finish();
        }
        function Update() {
            var dt = commonService.Start();
            $scope.pro.MoreImages = GetMoreImg();
            $scope.pro.ModifiedBy = "Đình Phúc";
            $scope.pro.CreatedBy = "Đình Phúc";
            $scope.pro.Detail = CKEDITOR.instances['new_Detail'].getData();
            $scope.pro.Specifications = CKEDITOR.instances['new_Specifications'].getData();

            apiService.put('products/', $scope.pro,
                function (result) {
                    notificationService.displaySuccess('Sửa thành công: ' + $scope.pro.ProductName);
                    $state.go('products');
                }, function (error) {
                    notificationService.displayError('Thêm mới không thành công.');
                });
            dt.finish();
        }

        //Run init
       
        initData();

    }
})(angular.module('AdmShopMobile.products'));