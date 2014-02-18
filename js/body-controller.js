angular.module('mini-data.controllers')
  .controller('bodyCtrl', ['$scope', 'firebaseAuth', '$firebase', function($scope, firebaseAuth, $firebase){
    $scope.showMain = true;
    $scope.showGoals = false;
    $scope.showNewGoal = false;
    $scope.mainUser = {};
    // $scope.mainUser.goals = [];

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
      firebaseAuth.client.login('facebook', {
        rememberMe: true
      });
      $scope.mainUser.fbInfo = firebaseAuth.user;
      firebaseAuth.user.child($scope.mainUser.fbInfo.id).set($scope.mainUser);
    };

    $scope.logout = function() {
        firebaseAuth.client.logout();
        $scope.mainUser.fbInfo = firebaseAuth.user;
    };

    $scope.safeApply = function(fn) {
        var phase = this.$root.$$phase;
        if (phase == '$apply' || phase == '$digest') {
            if(fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

    $scope.$on('authEvent', function() {
      $scope.safeApply(function() {
          $scope.mainUser.fbInfo = firebaseAuth.user;
          firebaseAuth.userRef.on('value', function(thing){
            for(var k in thing.val()){
              if(k === firebaseAuth.user.id){
                $scope.mainUser.goals = thing.val()[k].goals;
              }
            }
          });
          $scope.logIn = firebaseAuth.logIn;
      });
    });

    $scope.$on('logout', function(){
      $scope.safeApply(function(){
        $scope.logIn = firebaseAuth.logIn;
      });
    });

  }]);