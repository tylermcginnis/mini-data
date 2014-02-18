angular.module('mini-data.controllers')
  .controller('newGoalCtrl', ['$scope', 'firebaseAuth', function($scope, firebaseAuth){
    $scope.goal = {
      text: '',
      time: 'once',
      every: 'day'
    }
    
    $scope.submitGoal = function(){
      if(!$scope.goal.text) return;
      $scope.goal.text = $scope.goal.text.toLowerCase();
      $scope.mainUser.goals.push($scope.goal);
      firebaseAuth.userRef.child($scope.mainUser.fbInfo.id).set($scope.mainUser);
      $scope.showGoalsFn();
    }
  }]);