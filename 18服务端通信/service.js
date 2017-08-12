angular.module('myApp.service',[])
      .factory('HitService', function($q, $http){
          var service = {
              count : function(){
                  var d = $q.defer();
                  $http.get('/hits')
                       .then(function(data, status){
                            d.resolve(data.hits);
                       }, function(data, status){
                            d.reject(data);
                       });
                       return d.promise;
              },
              registerHit : function(){
                  var d = $q.defer();
                  $http.post('/hit',{})
                       .then(function(data, status){
                          d.resolve(data.hits);
                       }, function(data, status){
                          d.reject(data);
                       });
                       return d.promise;
              }
          };
          return service;
      })
