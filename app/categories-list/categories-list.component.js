angular.module('categoriesList')
    .component('categoriesList', {
        templateUrl: 'categories-list/categories-list.template.html',
        controller: ['$scope', '$rootScope', '$timeout', 'httpservice',`$filter`, function CategoriesListController($scope, $rootScope, $timeout, httpservice,$filter) {
            var self = this
            //$rootScope.categoryID = 0;
            let promise = httpservice
            promise.then(function (resp) {
                $scope.categories = resp.data.categories
                $scope.recipes = resp.data.recipes
                $rootScope.a = ($filter('filter')($scope.recipes, $rootScope.searchValue)).length
            })
            $scope.changeCategory = function (id, index) {
                $rootScope.categoryID = id
                $rootScope.page = 1
                $rootScope.categoryActive.name = index;
                $rootScope.pageActive.page = 1
            }
        }
        ]
    })