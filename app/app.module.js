'use strict';
angular.module('cookBook', ['categoriesList', 'ngRoute'])
  .constant('_', window._)
  .run( function ($http, $rootScope, $timeout) {
    $rootScope.isLoaded = false
    $http.get('http://127.0.0.1:8887/base.json')
      .then(response => {
        setTimeout(function(){

          $timeout(function() { // anything you want can go here and will safely be run on the next digest.
            $rootScope.data = response.data
            $rootScope.isLoaded = true
            $rootScope.$broadcast('tag',response.data)
          })

        },2000)
        
        
      })
  })
  
  
  

