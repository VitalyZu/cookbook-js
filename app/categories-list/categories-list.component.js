angular.module('categoriesList')
    .component('categoriesList', {
        templateUrl: 'categories-list/categories-list.template.html',
        controller: ['$scope', '$rootScope','$timeout', function CategoriesListController($scope, $rootScope,$timeout) {
            var self = this
            this.isLoaded = $rootScope.isLoaded
            $rootScope.categoryID = 0;
            
            $scope.base = $rootScope.base
            console.log($scope.base)
            $scope.base.then(resp=>{
                console.log(resp)
                $scope.categories = resp.categories
            })
            
            
            console.log(this)
            $scope.changeCategory = function (id) {
                $rootScope.categoryID = id
            }
        }
        ]
    })