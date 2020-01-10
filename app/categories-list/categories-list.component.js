angular.module('categoriesList')
    .component('categoriesList', {
        templateUrl: 'categories-list/categories-list.template.html',
        controller: ['$scope', '$rootScope','$route', function CategoriesListController($scope, $rootScope,$route) {
            this.arr = [1,2,3]
            setTimeout(()=>{
                
                this.arr.push(4)
                $route.reload()},1000)
            setTimeout(()=>console.log(this.arr),2000)
        }
        ]
    })