angular.module('categoriesList')
    .component('categoriesList', {
        templateUrl: 'categories-list/categories-list.template.html',
        controller: ['$scope', '$rootScope', '$route', '$timeout', function CategoriesListController($scope, $rootScope, $route, $timeout) {
            $scope.isLoaded = $rootScope.isLoaded
            console.log($rootScope)
            $timeout(function () { // anything you want can go here and will safely be run on the next digest.
                $scope.$apply(function () {
                    // Обворачиваем функцией $apply
                    $scope.data = $rootScope.data;
                    console.log($scope.data)
                });
            })
            $scope.$on('tag',function(e,v){
                console.log(v)
                $scope.base = v 
                console.log($scope)
            })

            console.log($scope)

        }
        ]
    })