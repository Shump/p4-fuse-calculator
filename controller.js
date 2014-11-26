
var persona4App = angular.module('persona4App', []);

persona4App.controller('testController', ['$scope', '$http', 
  function($scope, $http) {
    $scope.orderProp = 'Lv';
    $scope.cur_window = 'list';
    

    $http.get('personas.json').success(function(data) {
      $scope.personas = data;
    });
}]);

