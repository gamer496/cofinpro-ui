app.controller("homeController", function($scope, $rootScope, $log, $location, requestService, foo){

	var successCallBack = function(response){
		var data = response.data;
		$scope.msg = data["msg"];
		$log.info(data);
	};

	var failureCallBack = function(reason){
		console.log("could not make request. There might be an issue with connectivity.")
		$log.info(reason);
	};

	var getData = function(){
		return {};
	}

	var resp = requestService.post(foo.server_url + "/index", getData(), {}, successCallBack, failureCallBack);
})