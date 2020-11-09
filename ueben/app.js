(function () {
  'use strict';
  var x = "hello";
  angular.module('myFirstApp', [])
  .controller("MyFirstController", function ($scope) {
     $scope.name = "Dominic ist mein name";
     $scope.sayHello = function () {
       return "Hello,  " + $scope.name ;
     };

  })
  .controller("NameCalculatorController", function ($scope) {
    $scope.name = "Test";
    $scope.totalValue = 0;
    $scope.recalcTotalValue = function () {
      console.log("Restart Recalc")
      var totalNameValue = calculateNumericForString($scope.name);
      $scope.totalValue = totalNameValue;
    };
  });
  function calculateNumericForString(string) {
    console.log("Calc for " + string + " (" + string.length + ")" );
     var totalStringValue = 0;
     for (var i = 0; i < string.length; i++) {
       console.log("totalStringValue" + totalStringValue);
       totalStringValue += string.charCodeAt(i);
     }
     return totalStringValue;
  }
})();
