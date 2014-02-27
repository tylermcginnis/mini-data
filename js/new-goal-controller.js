angular.module('mini-data.controllers')
  .controller('newGoalCtrl', ['$scope', 'firebaseAuth', function($scope, firebaseAuth){
    $scope.goal = {
      text: '',
      time: 'once',
      every: 'day'
    }
    
    $scope.submitGoal = function(){
      var submitGoalToFb = function(id){
        firebaseAuth.userRef.child(id + '/' + 'goals')
          .push($scope.goal, function(error){
            if(error){
              console.log(error);
              alert('An error occured. Please try again.');
            } else{
              console.log('Data Saved');
              $scope.$apply(function(){
                var data = {};
                firebaseAuth.userRef.child(id + '/' + 'goals')
                  .on('value', function(data){
                    data.info = data.val();
                });
                for(var k in data.info){
                      $scope.mainUser.goals.k = data.val()[k]
                }
                $scope.showGoalsFn();
              });
            }
          });
      };

      if(!$scope.goal.text) return;

      $scope.goal.text = $scope.goal.text.toLowerCase();

      $scope.checkIfUserExists($scope.mainUser.fbInfo.id, submitGoalToFb);
    }
  }]);