angular.module('recipesList')
    .component('recipesList', {
        templateUrl: 'recipes-list/recipes-list.template.html',
        controller: ['$scope', '$rootScope','$timeout', function RecipesListController($scope, $rootScope,$timeout) {
            $scope.isLoaded = $rootScope.isLoaded
            $scope.$on('json-loaded', function (e, v) {
                console.log('recipes loaded')
                $timeout(function () {
                $scope.recipes = v.recipes
                $scope.categories = v.categories})
            })
        }
        ]
    })