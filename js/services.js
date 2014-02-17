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
          $rootScope.$apply(function(){
            $rootScope.logIn = true;
          });
          auth.user = user;
          auth.fbuser = FBuser;
          console.log('Youre logged in');
      } else {
          console.log('User is not logged in');
          $rootScope.$apply(function(){
            $rootScope.logIn = false;
          });
      }
    });
		return auth;
	}]);