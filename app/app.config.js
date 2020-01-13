angular.
    module('cookBook').
    config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/recipes', {
                    template: '<categories-list></categories-list><recipes-list></recipes-list>'
                }).
                when('/recipes/:id', {
                    template: '<recipe-detail></recipe-detail>'
                }).
                otherwise('/recipes');
        }
    ]);