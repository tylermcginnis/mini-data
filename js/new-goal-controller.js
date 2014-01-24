angular.module('mini-data.controllers')
  .controller('newGoalCtrl', function($scope){
    $scope.goal = {
      text: '',
      time: 'once',
      every: 'day'
    }
    
    $scope.submitGoal = function(){
      if(!$scope.goal.text) return;
      $scope.goal.text = $scope.goal.text.toLowerCase();
      //submit $scope.goal
      $scope.showGoalsFn();
    }
  });