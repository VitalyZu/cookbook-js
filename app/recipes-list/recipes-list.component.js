angular.module('recipesList')
    .component('recipesList', {
        templateUrl: 'recipes-list/recipes-list.template.html',
        controller: ['$scope', '$rootScope', '$timeout', 'httpservice', function RecipesListController($scope, $rootScope, $timeout, httpservice) {
            var self = this
            $scope._ = _
            console.log($rootScope.categoryID)
            $scope.isLoaded = $rootScope.isLoaded
            let promise = httpservice
            console.log(promise)
            promise.then(function (resp) {
                $scope.recipes = resp.data.recipes
                self.categories = resp.data.categories
                console.log($scope.categories)
            }) 
        }
        ]
    })