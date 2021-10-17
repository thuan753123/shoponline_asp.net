/// <reference path="/Assets/admin/libs/angular/angular.js" />

(function () {
    angular.module('AdmShopMobile.products', ['AdmShopMobile.common']).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('products',
            {//Sản Phẩm
                url: "/products",
                templateUrl: "/Areas/Supplier/App/components/products/productListView.html"
            })
            .state('product_add', {
                url: "/product_add",
                templateUrl: "/Areas/Supplier/App/components/products/productAddView.html"
            })
            .state('product_edit', {
                url: "/product_edit/:ProductID",
                templateUrl: "/Areas/Supplier/App/components/products/productEditView.html"
            })
            .state('productcategory', { //Nhà sản xuất
                url: "/productcategory",
                templateUrl: "/Areas/Supplier/App/components/productCategory/productCategoryListView.html"
            })
            .state('productcategory_add', {
                url: "/productcategory_add",
                templateUrl: "/Areas/Supplier/App/components/productCategory/productCategoryAddView.html"
            })
            .state('productcategory_edit', {
                url: "/productcategory_edit/:CategoryID",
                templateUrl: "/Areas/Supplier/App/components/productCategory/productCategoryEditView.html"
            })
            .state('user_edit', {
                url: "/user_edit/:ID",
                templateUrl: "/Areas/Supplier/App/components/users/usersEditView.html"
            })
            .state('orders', {
                url: "/orders",
                templateUrl: "/Areas/Supplier/App/components/orders/ordersListView.html"
            })
            .state('orders_Detail', {
                url: "/orders_Detail/:BillID",
                templateUrl: "/Areas/Supplier/App/components/orders/ordersDetailView.html"
            })
            .state('post', {
                url: "/post",
                templateUrl: "/Areas/Supplier/App/components/post/postListView.html"
            })
            .state('post_add', {
                url: "/post_add",
                templateUrl: "/Areas/Supplier/App/components/post/postAddView.html"
            })
            .state('post_edit', {
                url: "/post_edit/:ID",
                templateUrl: "/Areas/Supplier/App/components/post/postEditView.html"
            }).state('postCategory', {
                url: "/postCategory",
                templateUrl: "/Areas/Supplier/App/components/postCategory/postCategoryListView.html"
            }).state('postCategory_add', {
                url: "/postCategory-add",
                templateUrl: "/Areas/Supplier/App/components/postCategory/postCategoryAddView.html"
            }).state('postCategory_edit', {
                url: "/postCategory_edit/:ArticleCategoryID",
                templateUrl: "/Areas/Supplier/App/components/postCategory/postCategoryEditView.html"
            })
            .state('Statistics', {
                url: "/Statistics",
                templateUrl: "/Areas/Supplier/App/components/Statistics/ThongKeListController.html"
            })
            .state('BieuDo', {
                url: "/BieuDo",
                templateUrl: "/Areas/Supplier/App/components/Statistics/BieuDo.html"
            })
            .state('supplier_edit', {
                url: "/chinh-sua-cong-tac/:ID",
                templateUrl: "/Areas/Supplier/App/components/Supplier/SupplierEditView.html"
            });
    }
})();