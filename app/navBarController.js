app.controller("navBarController", function($http, $state, foo, $scope, $rootScope, $stateParams){
	$scope.attris = foo.navBarAttris;
});