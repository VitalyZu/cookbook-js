'use strict';
angular.module('cookBook', ['categoriesList'])
  .constant('_', window._)
  .run(function ($http, $rootScope) {
    $rootScope.isLoaded = false
    $http.get('http://127.0.0.1:8887/base.json')
      .then(response => {
        $rootScope.data = response.data
        $rootScope.isLoaded = true
      })
  })

