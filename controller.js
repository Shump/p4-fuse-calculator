

// Taken from:
// https://github.com/arantius/persona-fusion-calculator/blob/gh-pages/app.js
//recipe.cost += (27 * level * level) + (126 * level) + 2147;


var persona4App = angular.module('persona4App', []);

persona4App.controller('testController', ['$scope', '$http', 
  function($scope, $http) {
    $scope.orderProp = 'level';
    $scope.cur_window = 'list';
    

    $http.get('personas.json').success(function(data) {
      $scope.personas = data;
    });
}]);

