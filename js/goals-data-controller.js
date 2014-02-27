angular.module('mini-data.controllers')
  .controller('goalsDataCtrl', ['$scope', 'firebaseAuth', '$firebase', function($scope, firebaseAuth, $firebase){
    $scope.goalData = $scope.mainUser.goals;

    $scope.removeGoal = function(index){
      var theGoals = {};
      firebaseAuth.userRef.child($scope.mainUser.fbInfo.id + '/' + 'goals')
        .on('value', function(data){
          theGoals.data = data.val();
        });

        var count = 0;
        
        for(var k in theGoals.data){
          if(count === index){
            $scope.safeApply(function(){
              firebaseAuth.userRef.child($scope.mainUser.fbInfo.id + '/' + 'goals' + '/' + k).remove();
            })
          }
          count++;
        }
    }
  }]);