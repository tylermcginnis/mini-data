angular.module('mini-data.controllers')
  .controller('goalsDataCtrl', ['$scope', 'firebaseAuth', '$firebase', function($scope, firebaseAuth, $firebase){
    $scope.goalData = $scope.mainUser.goals;
  }]);