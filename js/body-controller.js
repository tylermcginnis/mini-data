angular.module('mini-data.controllers')
  .controller('bodyCtrl', ['$scope', 'firebaseAuth', '$firebase', function($scope, firebaseAuth, $firebase){
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

    $scope.login = function() {
      firebaseAuth.login();
    };

    $scope.logout = function() {
        firebaseAuth.logout();
    };

    $scope.isLoggedIn = function() {
        return !!$scope.user;
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
            $scope.user = firebaseAuth.user;
            
        });
    });

  }]);