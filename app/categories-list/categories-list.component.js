angular.module('categoriesList')
    .component('categoriesList', {
        templateUrl: 'categories-list/categories-list.template.html',
        controller: ['$scope', '$rootScope', '$timeout', 'httpservice', function CategoriesListController($scope, $rootScope, $timeout, httpservice) {
            var self = this
            //$rootScope.categoryID = 0;
            let promise = httpservice
            promise.then(function (resp) {
                $scope.categories = resp.data.categories
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