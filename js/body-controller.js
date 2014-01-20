angular.module('mini-data.controllers')
  .controller('bodyCtrl', ['$scope', 'sharedState',function($scope, sharedState){
    $scope.showMain = sharedState.showMain;
    $scope.showGoals = sharedState.showGoals;
    $scope.newGoal = sharedState.showNewGoal;
  }]);