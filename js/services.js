angular.module('mini-data.services')
	.factory('firebaseAuth', ['$rootScope', function($rootScope) {

		var FBref = new Firebase('https://minidata.firebaseio.com');
    
    var auth = {};

    auth.userRef = new Firebase('https://minidata.firebaseio.com/users');

    auth.broadcastAuthEvent = function(inp) {
      (inp === 'out') && $rootScope.$broadcast('logout');
      (inp === 'in') && $rootScope.$broadcast('authEvent');
    };
    
    auth.client = new FirebaseSimpleLogin(FBref, function(error, user) {
      if (error) {
          console.log(error);
      } else if (user) {
          console.log('User is logged in');
          auth.user = user;
          auth.logIn = true;
          auth.broadcastAuthEvent('in');
      } else {
          console.log('User is not logged in');
          auth.logIn = false;
          auth.broadcastAuthEvent('out');
      }
    });

		return auth;
	}]);