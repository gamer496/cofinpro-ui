app.controller("gameQueryController", function($scope, $rootScope, $log, $location, requestService, foo){

	$scope.doShow = false;

	var successCallBack = function(response){
		var data = response.data["datas"];
		s = new Set();
		for(var i = 0; i < data.length; i++){
			s.add(data[i]);
		}
		$scope.datas = Array.from(s);
		$scope.doShow = true;
		$log.info(response);
	};

	var failureCallBack = function(reason){
		console.log("could not fetch data. There might be an issue with connectivity.")
		$log.info(reason);
	};

	var getData = function(){
		return {user: $scope.user, content: $scope.content};
	};

	$scope.submitTry = function(){
		var resp = requestService.post(foo.server_url + "/game_query", getData(), {}, successCallBack, failureCallBack);
	};
	
});