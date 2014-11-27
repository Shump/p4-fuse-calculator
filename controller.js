

// Taken from:
// https://github.com/arantius/persona-fusion-calculator/blob/gh-pages/app.js
//recipe.cost += (27 * level * level) + (126 * level) + 2147;

two_way_table = [
  [null,'Fool','Magician','Priestess','Empress','Emperor','Hierophant','Lovers','Chariot','Justice','Hermit','Fortune','Strength','Hanged Man','Death','Temperance','Devil','Tower','Star','Moon','Sun','Judgement'],
  ['Fool','Fool','Temperance','Death','Moon','Death','Chariot','Empress','Sun','Magician','Strength','Magician','Magician','Strength','Hermit','Hierophant','Temperance','Star','Empress','Emperor','Devil','Hanged Man'],
  ['Magician','Temperance','Magician','Moon','Justice','Strength','Devil','Death','Temperance','Strength','Empress','Lovers','Justice','Sun','Emperor','Strength','Sun','Hanged Man',null,'Star','Chariot','Lovers'],
  ['Priestess','Death','Moon','Priestess','Hermit','Empress','Sun','Emperor','Hierophant','Hermit','Death','Hanged Man','Justice','Moon','Magician','Hierophant','Justice','Magician','Emperor','Star','Devil','Sun'],
  ['Empress','Moon','Justice','Hermit','Empress','Moon','Death','Justice','Justice','Magician','Magician','Star','Hierophant','Temperance','Chariot','Devil','Priestess','Hermit','Chariot','Temperance','Priestess','Priestess'],
  ['Emperor','Death','Strength','Empress','Moon','Emperor','Empress','Justice','Temperance','Devil','Priestess','Lovers','Hermit','Empress','Moon','Sun','Moon','Star','Death','Magician','Chariot','Lovers'],
  ['Hierophant','Chariot','Devil','Sun','Death','Empress','Hierophant','Death','Sun','Temperance','Justice','Priestess','Sun','Death','Devil','Magician','Emperor','Hanged Man','Moon','Empress','Strength','Chariot'],
  ['Lovers','Empress','Death','Emperor','Hanged Man','Justice','Death','Lovers','Hierophant','Priestess','Magician','Star','Emperor','Moon','Star','Hierophant','Hierophant','Star','Hermit','Hanged Man','Devil','Strength'],
  ['Chariot','Sun','Temperance','Hierophant','Justice','Temperance','Sun','Hierophant','Chariot','Temperance','Justice','Devil','Magician','Death','Hermit','Magician','Moon','Hanged Man','Hierophant','Sun','Strength','Temperance'],
  ['Justice','Magician','Strength','Hermit','Magician','Devil','Temperance','Priestess','Temperance','Justice','Strength','Lovers','Temperance','Priestess','Strength','Hermit','Magician','Lovers','Moon','Strength','Temperance','Lovers'],
  ['Hermit','Strength','Empress','Death','Magician','Priestess','Justice','Magician','Justice','Strength','Hermit','Empress','Hierophant','Moon','Sun','Magician','Justice','Death','Justice','Empress','Temperance','Star'],
  ['Fortune','Magician','Lovers','Hanged Man','Star','Lovers','Priestess','Star','Devil','Lovers','Empress','Fortune','Star','Death','Hermit','Devil','Emperor','Chariot','Emperor','Lovers','Priestess','Hanged Man'],
  ['Strength','Magician','Justice','Justice','Hierophant','Hermit','Sun','Emperor','Magician','Temperance','Hierophant','Star','Strength','Hierophant','Hanged Man','Sun','Hermit','Hanged Man','Emperor','Justice','Temperance',null],
  ['Hanged Man','Strength','Sun','Moon','Temperance','Empress','Death','Moon','Death','Priestess','Moon','Death','Hierophant','Hanged Man','Priestess','Death','Justice','Hermit','Empress','Priestess','Devil','Empress'],
  ['Death','Hermit','Emperor','Magician','Chariot','Moon','Devil','Star','Hermit','Strength','Sun','Hermit','Hanged Man','Priestess','Death','Chariot','Star','Lovers','Lovers','Priestess','Empress',null],
  ['Temperance','Hierophant','Strength','Hierophant','Devil','Sun','Magician','Hierophant','Magician','Hermit','Magician','Devil','Sun','Death','Chariot','Temperance','Hermit','Star','Hierophant','Hanged Man','Hermit',null],
  ['Devil','Temperance','Sun','Justice','Priestess','Moon','Emperor','Hierophant','Moon','Magician','Justice','Emperor','Hermit','Justice','Star','Hermit','Devil','Emperor','Emperor','Empress','Hierophant',null],
  ['Tower','Star','Hanged Man','Magician','Hermit','Star','Hanged Man','Star','Hanged Man','Lovers','Death','Chariot','Hanged Man','Hermit','Lovers','Star','Emperor','Tower','Hanged Man','Priestess','Chariot',null],
  ['Star','Empress',null,'Emperor','Chariot','Death','Moon','Hermit','Hierophant','Moon','Justice','Emperor','Emperor','Empress','Lovers','Hierophant','Emperor','Hanged Man','Star','Emperor','Moon',null],
  ['Moon','Emperor','Star','Star','Temperance','Magician','Empress','Hanged Man','Sun','Strength','Empress','Lovers','Justice','Priestess','Priestess','Hanged Man','Empress','Priestess','Emperor','Moon','Strength',null],
  ['Sun','Devil','Chariot','Devil','Priestess','Chariot','Strength','Devil','Strength','Temperance','Temperance','Priestess','Temperance','Devil','Empress','Hermit','Hierophant','Chariot','Moon','Strength','Sun',null],
  ['Judgement','Hanged Man','Lovers','Sun','Priestess','Lovers','Chariot','Strength','Temperance','Lovers','Star','Hanged Man',null,'Empress',null,null,null,null,null,null,null,'Judgement']
];

three_way_table = [
  [null,'Fool','Magician','Priestess','Empress','Emperor','Hierophant','Lovers','Chariot','Justice','Hermit','Fortune','Strength','Hanged Man','Death','Temperance','Devil','Tower','Star','Moon','Sun','Judgement'],
  ['Fool','Fool','Fortune','Lovers','Judgement','Empress','Tower','Devil','Lovers','Chariot','Strength','Judgement','Empress','Star','Star','Justice','Lovers','Fortune','Hermit','Empress','Empress','Temperance'],
  ['Magician','Fortune','Magician','Fortune','Sun','Death','Judgement','Temperance','Emperor','Chariot','Empress','Strength','Tower','Fortune','Fool','Sun','Chariot','Emperor','Hierophant','Sun','Fortune','Sun'],
  ['Priestess','Lovers','Fortune','Priestess','Temperance','Justice','Empress','Hanged Man','Magician','Hermit','Magician','Strength','Empress','Chariot','Chariot','Lovers','Hermit','Moon','Empress','Empress','Fool','Temperance'],
  ['Empress','Judgement','Sun','Temperance','Empress','Fool','Priestess','Fool','Emperor','Death','Fool','Strength','Fool','Sun','Hierophant','Emperor','Fool','Judgement','Fool','Moon','Lovers','Star'],
  ['Emperor','Empress','Death','Justice','Fool','Emperor','Chariot','Devil','Tower','Devil','Moon','Priestess','Hermit','Hierophant','Strength','Devil','Death','Chariot','Sun','Strength','Devil','Hanged Man'],
  ['Hierophant','Tower','Judgement','Empress','Priestess','Chariot','Hierophant','Hanged Man','Judgement','Magician','Lovers','Hanged Man','Moon','Star','Magician','Emperor','Moon','Emperor','Lovers','Magician','Magician','Fool'],
  ['Lovers','Devil','Temperance','Hanged Man','Fool','Devil','Hanged Man','Lovers','Hierophant','Magician','Hierophant','Hanged Man','Fool','Justice','Hanged Man','Fortune','Tower','Judgement','Hierophant','Hanged Man','Justice','Emperor'],
  ['Chariot','Lovers','Emperor','Magician','Emperor','Tower','Judgement','Hierophant','Chariot','Temperance','Priestess','Temperance','Magician','Devil','Devil','Moon','Emperor','Hierophant','Magician','Fool','Priestess','Tower'],
  ['Justice','Chariot','Chariot','Hermit','Death','Devil','Magician','Magician','Temperance','Justice','Emperor','Priestess','Priestess','Star','Devil','Magician','Priestess','Chariot','Sun','Star','Judgement','Sun'],
  ['Hermit','Strength','Empress','Magician','Fool','Moon','Lovers','Hierophant','Priestess','Emperor','Hermit','Judgement','Justice','Death','Magician','Devil','Death','Empress','Death','Temperance','Tower','Temperance'],
  ['Fortune','Judgement','Strength','Strength','Strength','Priestess','Hanged Man','Hanged Man','Temperance','Priestess','Judgement','Fortune','Priestess','Fool','Moon','Tower','Tower','Magician','Magician','Strength','Chariot','Fool'],
  ['Strength','Empress','Tower','Empress','Fool','Hermit','Moon','Fool','Magician','Priestess','Justice','Priestess','Strength','Star','Empress','Emperor','Lovers','Devil','Devil','Hierophant','Tower','Temperance'],
  ['Hanged Man','Star','Fortune','Chariot','Sun','Hierophant','Star','Justice','Devil','Star','Death','Fool','Star','Hanged Man','Devil','Justice','Justice','Fortune','Sun','Magician','Empress','Fool'],
  ['Death','Star','Fool','Chariot','Hierophant','Strength','Magician','Hanged Man','Devil','Devil','Magician','Moon','Empress','Devil','Death','Fool','Lovers','Justice','Fortune','Hanged Man','Empress','Strength'],
  ['Temperance','Justice','Sun','Lovers','Emperor','Devil','Emperor','Fortune','Moon','Magician','Devil','Tower','Emperor','Justice','Fool','Temperance','Justice','Judgement','Hierophant','Hanged Man','Fortune','Chariot'],
  ['Devil','Lovers','Chariot','Hermit','Fool','Death','Moon','Tower','Emperor','Priestess','Death','Tower','Lovers','Justice','Lovers','Justice','Devil','Star','Fortune','Death','Lovers','Death'],
  ['Tower','Fortune','Emperor','Moon','Judgement','Chariot','Emperor','Judgement','Hierophant','Chariot','Empress','Magician','Devil','Fortune','Justice','Judgement','Star','Tower','Hermit','Hanged Man','Death','Lovers'],
  ['Star','Hermit','Hierophant','Empress','Fool','Sun','Lovers','Hierophant','Magician','Sun','Death','Magician','Devil','Sun','Fortune','Hierophant','Fortune','Hermit','Star','Death','Chariot','Lovers'],
  ['Moon','Empress','Sun','Empress','Moon','Strength','Magician','Hanged Man','Fool','Star','Temperance','Strength','Hierophant','Magician','Hanged Man','Hanged Man','Death','Hanged Man','Death','Moon','Death','Hermit'],
  ['Sun','Empress','Fortune','Fool','Lovers','Devil','Magician','Justice','Priestess','Judgement','Tower','Chariot','Tower','Empress','Empress','Fortune','Lovers','Death','Chariot','Death','Sun','Chariot'],
  ['Judgement','Temperance','Sun','Temperance','Star','Hanged Man','Fool','Emperor','Tower','Sun','Temperance','Fool','Temperance','Fool','Strength','Chariot','Death','Lovers','Lovers','Hermit','Chariot','Judgement']
];

var persona4App = angular.module('persona4App', []);

persona4App.controller('testController', ['$scope', '$http', 
  function($scope, $http) {
    $scope.orderProp = 'level';
    $scope.cur_window = 'list';
    

    $http.get('personas.json').success(function(data) {
      $scope.personas = data;
    });
}]);

