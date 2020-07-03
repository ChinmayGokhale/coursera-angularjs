(function (){
    'use strict';

    angular.module("LunchCheck", []).controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    $scope.message=""
    $scope.checkIfTooMuch = function () {
        // const items = $scope.lunchItems.split(',');
        // console.log(items);
        if($scope.lunchItems === ""){
            $scope.message = "Please enter data first";
        }
        else if ($scope.lunchItems.split(',').length > 3){
            $scope.message = "Too Much!";
        }
        else if ($scope.lunchItems.split(',').length <= 3){
            $scope.message = "Enjoy!";
        }
    }
}
})();