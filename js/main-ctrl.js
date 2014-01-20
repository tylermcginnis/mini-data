angular.module('mini-data.controllers')
  .controller('mainCtrl', ['$scope', function($scope){
    var getTimeInfo = function(){
      var now = new Date();
      var hours = now.getHours();
      var period = 'AM';
      var minutes = now.getMinutes();
      if(hours === 0){
        hours = 12;
      }
      if(hours > 12){
        hours -= 12;
        period = 'PM';
      }
      minutes < 10 && (minutes = '0' + minutes);
      return hours + ':' + minutes + period; 
    }

    var getDateInfo = function(){
      var monthObj = {
        0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June',
        6: 'July', 7: 'August', 8: 'September', 9: 'October', 10: 'November', 11: 'December'
      }

      var now = new Date();
      var day = now.getDate();
      var month = monthObj[now.getMonth()];
      var year = now.getFullYear();

      return month + ' ' + day + 'th, ' + year;
    }

    $scope.time = getTimeInfo();

    setInterval(function(){
      $scope.$apply(function(){
        $scope.time = getTimeInfo();
      });
    }, 10000);

    $scope.date = getDateInfo();
  }]);