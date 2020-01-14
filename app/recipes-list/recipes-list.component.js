angular.module('recipesList')
    .component('recipesList', {
        templateUrl: 'recipes-list/recipes-list.template.html',
        controller: ['$scope', '$rootScope', '$timeout', 'httpservice', function RecipesListController($scope, $rootScope, $timeout, httpservice) {
            var self = this
            $scope._ = _
            $scope.isLoaded = $rootScope.isLoaded
            let promise = httpservice
            promise.then(function (resp) {
                $scope.recipes = resp.data.recipes
                self.categories = resp.data.categories
                
                //HEIGHT
                $timeout(function () {
                    let htmlCollection = document.getElementsByClassName('card-body')
                    let htmlArray = Array.from(htmlCollection)
                    let heightArray = []
                    _.forEach(htmlArray, function (item) {
                        heightArray.push(item.offsetHeight)
                    })
                    $scope.maxHeight = _.max(heightArray)
                    for (let i = 0; i < htmlCollection.length; i++) {
                        console.log(htmlCollection[i].style.height)
                        htmlCollection[i].style.height = `${$scope.maxHeight}px`
                    }
                })


            })

        }
        ]
    })