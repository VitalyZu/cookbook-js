angular.module('categoriesList')
    .component('categoriesList', {
        templateUrl: 'categories-list/categories-list.template.html',
        controller: ['$scope', '$rootScope', '$timeout', 'httpservice', function CategoriesListController($scope, $rootScope, $timeout, httpservice) {
            var self = this
            //$rootScope.categoryID = 0;
            console.log($rootScope.categoryID)
            let promise = httpservice
            console.log(promise)
            promise.then(function (resp) {
                console.log(resp.data)
                $scope.categories = resp.data.categories
                console.log($scope.categories)
            })
            $scope.changeCategory = function (id) {
                $rootScope.categoryID = id
            }
        }
        ]
    })