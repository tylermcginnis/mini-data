angular.module('mini-data.controllers')
  .controller('goalsDataCtrl', function($scope){
    $scope.dummyData = [
      {
        goal: 'lose 5 pounds',
        time: 'once',
        every: 'week'
      },
      {
        goal: 'read a book',
        time: 'twice',
        every: 'year'
      },
      {
        goal: 'skate',
        time: '4x',
        every: 'month'
      },
      {
        goal: 'make a website',
        time: 'once',
        every: 'year'
      }
    ]
  });