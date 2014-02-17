angular.module('mini-data.services')
	.factory('firebaseAuth', ['$rootScope', function($rootScope) {

		var FBref = new Firebase('https://minidata.firebaseio.com');
    var FBuser = new Firebase('https://minidata.firebaseio.com/users');

    var auth = new FirebaseSimpleLogin(FBref, function(error, user) {
      if (error) {
          // an error occurred while attempting login
          console.log(error);
      } else if (user) {
          // user authenticated with Firebase
          auth.user = user;
          auth.fbuser = FBuser;
      } else {
          // user is logged out
      }
    });
		return auth;
	}]);