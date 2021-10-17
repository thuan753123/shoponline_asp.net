/// <reference path="/Assets/admin/libs/angular/angular.js" />

(function () {
    angular.module('AdmShopMobile.products', ['AdmShopMobile.common']).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('products',
            {//Sản Phẩm
                url: "/products",
                templateUrl: "/Areas/Admin/app/components/products/productListView.html"
            })
            .state('product_add', {
                url: "/product_add",
                templateUrl: "/Areas/Admin/app/components/products/productAddView.html"
            })
            .state('product_edit', {
                url: "/product_edit/:ProductID",
                templateUrl: "/Areas/Admin/app/components/products/productEditView.html"
            })
            .state('productcategory', { //Nhà sản xuất
                url: "/productcategory",
                templateUrl: "/Areas/Admin/app/components/productCategory/productCategoryListView.html"
            })
            .state('productcategory_add', {
                url: "/productcategory_add",
                templateUrl: "/Areas/Admin/app/components/productCategory/productCategoryAddView.html"
            })
            .state('productcategory_edit', {
                url: "/productcategory_edit/:CategoryID",
                templateUrl: "/Areas/Admin/app/components/productCategory/productCategoryEditView.html"
            })
            .state('users', { //User
                url: "/user",
                templateUrl: "/Areas/Admin/app/components/users/usersListView.html"
            })
            .state('user_add', {
                url: "/user_add",
                templateUrl: "/Areas/Admin/app/components/users/usersAddView.html"
            })
            .state('user_edit', {
                url: "/user_edit/:ID",
                templateUrl: "/Areas/Admin/app/components/users/usersEditView.html"
            })
            .state('orders', {
                url: "/orders",
                templateUrl: "/Areas/Admin/app/components/orders/ordersListView.html"
            })
            .state('orders_Detail', {
                url: "/orders_Detail/:BillID",
                templateUrl: "/Areas/Admin/app/components/orders/ordersDetailView.html"
            })
            .state('post', {
                url: "/post",
                templateUrl: "/Areas/Admin/app/components/post/postListView.html"
            })
            .state('post_add', {
                url: "/post_add",
                templateUrl: "/Areas/Admin/app/components/post/postAddView.html"
            })
            .state('post_edit', {
                url: "/post_edit/:ID",
                templateUrl: "/Areas/Admin/app/components/post/postEditView.html"
            }).state('postCategory', {
                url: "/postCategory",
                templateUrl: "/Areas/Admin/app/components/postCategory/postCategoryListView.html"
            }).state('postCategory_add', {
                url: "/postCategory-add",
                templateUrl: "/Areas/Admin/app/components/postCategory/postCategoryAddView.html"
            }).state('postCategory_edit', {
                url: "/postCategory_edit/:ArticleCategoryID",
                templateUrl: "/Areas/Admin/app/components/postCategory/postCategoryEditView.html"
            })
            .state('Statistics', {
                url: "/Statistics",
                templateUrl: "/Areas/Admin/app/components/Statistics/ThongKeListController.html"
            })
            .state('BieuDo', {
                url: "/BieuDo",
                templateUrl: "/Areas/Admin/app/components/Statistics/BieuDo.html"
            })
            .state('supplier', {
                url: "/supplier",
                templateUrl: "/Areas/Admin/app/components/Supplier/SupplierListView.html"
            })
            .state('checkSupplier', {
                url: "/phe-duyet-cong-tac",
                templateUrl: "/Areas/Admin/app/components/Supplier/SupplierCheckView.html"
            })
            .state('supplier_edit', {
                url: "/chinh-sua-cong-tac/:ID",
                templateUrl: "/Areas/Admin/app/components/Supplier/SupplierEditView.html"
            });
    }
})();