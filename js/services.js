angular.module('mini-data.services')
  .factory('sharedState', function(){
    return {
      showMain: true,
      showGoals: false,
      showNewGoal: false,
    }
  });