angular.module('categoriesList')
    .component('categoriesList', {
        templateUrl: 'categories-list/categories-list.template.html',
        controller: ['$scope', '$rootScope','$timeout', function CategoriesListController($scope, $rootScope,$timeout) {
            var self = this
            this.isLoaded = $rootScope.isLoaded
            $rootScope.categoryID = 0;
            $scope.$on('json-loaded', function (e, v) {
                console.log('recipes loaded')
                $timeout(function () {
                $scope.recipes = v.recipes
                self.categories = v.categories})
            })
            console.log(this)
            $scope.changeCategory = function (id) {
                $rootScope.categoryID = id
            }
        }
        ]
    })