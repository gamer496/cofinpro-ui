app.factory("requestService", function($http, $window, $rootScope){

	var getData = function(data, prev_response){
		if(prev_response.hasOwnProperty("user_token")){
			data.user_token = prev_response["user_token"];
		}
		return JSON.stringify(data);
	}


	return{
		get: function(url, successCallBack, failureCallBack){
			return $http({
				method: "GET",
				url: url
			}).then(successCallBack, failureCallBack);
		},

		post: function(url, data, prev_response, successCallBack, failureCallBack){
			return $http({
				method: "POST",
				url: url,
				data: getData(data,prev_response),
			}).then(successCallBack, failureCallBack);
		}
	};
});