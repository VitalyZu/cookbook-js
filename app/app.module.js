'use strict';
angular.module('cookBook', ['categoriesList', 'recipesList', 'ngRoute', 'core'])
  .constant('_', window._)
  .run(function ($http, $rootScope, $timeout,$q) {
    $rootScope.isLoaded = false
    var deferred = $q.defer();

  

   
      deferred.resolve('Hello, ' + name + '!');
  
      deferred.reject('Greeting ' + name + ' is not allowed.');
    
 
    $http.get('http://127.0.0.1:8887/base.json')
      .then(response => {
        /*      console.log(response)
            // $timeout(function () { // anything you want can go here and will safely be run on the next digest.
               console.log('http start')
               $rootScope.resp = response
               console.log($rootScope.resp)
               let data = response.data
               $rootScope.isLoaded = true
               $rootScope.$broadcast('json-loaded', data)
               $rootScope.data = data
               
               console.log('http end')
         
         //  }) */
        var deferred = $q.defer();
        deferred.resolve(response.data);
        $rootScope.base = deferred.promise;
        console.log($rootScope)
      })
  })




