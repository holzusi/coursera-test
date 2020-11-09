(function () {
  'use strict';
  var x = "hello";
  angular.module('myFirstApp', [])
  .controller("MyFirstController", function ($scope) {
     $scope.name = "Dominic ist mein name";
     $scope.sayHello = function () {
       return "Hello,  " + $scope.name ;
     };

  });
})();
