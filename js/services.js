angular.module('mini-data.services')
	.factory('firebaseAuth', ['$rootScope', function($rootScope) {
		var auth = {};

		var FBref = new Firebase('https://minidata.firebaseio.com');

		auth.broadcastAuthEvent = function() {
		    $rootScope.$broadcast('authEvent');
		};

	  auth.client = new FirebaseSimpleLogin(FBref, function(error, user) {
		    if (error) {
		    } else if (user) {
		        auth.user = user;
		        auth.broadcastAuthEvent();
		    } else {
		        auth.user = null;
		        auth.broadcastAuthEvent();
		    }
		});

		auth.login = function() {
		    this.client.login('facebook');
		};

		auth.logout = function() {
		    this.client.logout();
		};

		return auth;
	}]);