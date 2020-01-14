'use strict';
angular.module('cookBook', ['categoriesList', 'recipesList', 'recipeDetail', 'ngRoute', 'core'])
  .constant('_', window._)
  .run(function ($rootScope) {
    $rootScope.categoryID = 0
    $rootScope.categoryActive = { 'name': "all" }
    $rootScope.page = 1
    $rootScope.onPage = 10
    $rootScope.pageActive = { 'page': 1 }
  })
  .factory('httpservice', function ($q, $http) {
    var deferred = $q.defer();
    deferred.resolve($http.get('http://127.0.0.1:8887/base.json'));
    return deferred.promise;
  })




