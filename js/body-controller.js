angular.module('mini-data.controllers')
  .controller('bodyCtrl', ['$scope', 'firebaseAuth', '$firebase', function($scope, firebaseAuth, $firebase){
    $scope.showMain = true;
    $scope.showGoals = false;
    $scope.showNewGoal = false;
    $scope.mainUser = {};
    $scope.mainUser.goals = [];
    $scope.loggedIn = false;

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

    $scope.login = function() {
      firebaseAuth.login('facebook', {
        rememberMe: true
      });
      $scope.mainUser.fbInfo = firebaseAuth.user;
      $scope.loggedIn = true;
      firebaseAuth.fbuser.child($scope.mainUser.fbInfo.id).set($scope.mainUser);
    };

    $scope.logout = function() {
        firebaseAuth.logout();
        $scope.mainUser.fbInfo = firebaseAuth.user;
        $scope.loggedIn = false;
    };

    $scope.isLoggedIn = function() {
        return $scope.loggedIn;
    };

  }]);