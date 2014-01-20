angular.module('mini-data.controllers')
  .controller('bodyCtrl', ['$scope',function($scope){
    $scope.showMain = true;
    $scope.showGoals = false;
    $scope.showNewGoal = false;

    $scope.showGoalsFn = function(){
      $scope.showMain = false;
      $scope.showGoals = true;
      $scope.showNewGoal = false;
    }

    $scope.showNewGoalFn = function(){
      $scope.showMain = false;
      $scope.showGoals = false;
      $scope.showNewGoal = true;
    }

    $scope.showMainFn = function(){
      $scope.showMain = true;
      $scope.showGoals = false;
      $scope.showNewGoal = false;
    }

  }]);