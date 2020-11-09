(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller("LunchCheckController", LunchCheckController);

var ok = "Enjoy!";
var wrong = "Too much!";
var noData = "Please enter data first";

LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
     $scope.inputValues = null;
     $scope.message = null;
     $scope.createMessage = function () {
      $scope.message = inputToMessage($scope.inputValues);
     };
   }


  function  inputToMessage(string) {
    if(string == undefined || string.length === 0) {
      return noData;
    }
    if(string.split(",").length > 3 ){
      return wrong;
    }
    return ok;
  }

  })();
