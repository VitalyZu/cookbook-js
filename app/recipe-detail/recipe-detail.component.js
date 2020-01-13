angular.module('recipeDetail')
    .component('recipeDetail', {
        templateUrl: 'recipe-detail/recipe-detail.template.html',
        controller: ['$scope', '$routeParams','$rootScope', 'httpservice', function RecipesDetailController($scope, $routeParams,$rootScope, httpservice) {
            console.log($rootScope.categoryID)
            let promise = httpservice
            promise.then(function (resp) {
                $scope.recipes = resp.data.recipes
                $scope.recipe = _.find($scope.recipes, { 'id': Number($routeParams.id) })
            })
            $scope.backHandler = function(){
                console.log($rootScope.categoryID)
            }
        }
        ]
    })