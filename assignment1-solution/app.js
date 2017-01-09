(function() {
  'use strict';

  angular.module("LunchCheck", [])

  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject =['$scope'];

  function LunchCheckController($scope) {
    $scope.listOfItems = "";
    $scope.message = "";

    $scope.lunchChecker = function() {
      var temp = LunchaAdvice($scope.listOfItems);
      $scope.message = temp;
    };
    // based on number of item this function retuns the message
    function LunchaAdvice(string){
      var numberOfIteams = calculateLunchAmount(string);
      var advice = "";
      if (numberOfIteams <= 0){
        advice = "Please enter data first";
      } else if (numberOfIteams > 3) {
        advice = "Too much!";
      } else {
        advice = "Enjoy!";
      }
      return advice;
    };

    //it calculates food items thats entered in the texstbox
    //return total number of items that user entered.
    //this function avoids null or spaces after commas
    function calculateLunchAmount(string){
      var items = string.split(",");
      var totalIteams = 0;
      for (var i = 0; i < items.length; i++){
        //avoiding null values or spaces from texstbox
        if (items[i] == null || items[i] == " " || items[i] == ""){
          continue;
        }
        totalIteams++;
      }
      return totalIteams;
    };

  }
})();
