angular.module('mini-data.controllers')
  .controller('goalsDataCtrl', function($scope){
    $scope.dummyData = [
      {
        goal: 'lose 5 pounds',
        time: 'once',
        every: 'week'
      },
      {
        goal: 'Lose 5 Pounds',
        time: 'once',
        every: 'week'
      },
      {
        goal: 'Lose 5 Pounds',
        time: 'once',
        every: 'week'
      },
      {
        goal: 'Lose 5 Pounds',
        time: 'once',
        every: 'week'
      }
    ]
  });