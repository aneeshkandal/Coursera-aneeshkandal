(function () {
  'use strict'

  angular.module('NameCheck', [])
  .controller('NameCheckController', NameCheckController);

  NameCheckController.$inject = ['$scope'];

  function NameCheckController($scope) {
    $scope.result='';
    $scope.Names='';

  $scope.NameCheck = function () {
    if($scope.Names.trim().length == 0) {
      $scope.isEmpty = true;
      }
    else {
      $scope.isEmpty = false;

      var splitNames = $scope.Names.split(',');
      var checkName = splitNames.filter(function(Name){
        return Name.trim() != '';
      })

      if(checkName.length <= 3) {
        $scope.result = "Registered";
      }
      else {
        $scope.result = "Error";
      }

      }
    };
  }
})();
