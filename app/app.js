var app = angular
		.module("app", ["app.constants", "ui.router"])
		.config(function($stateProvider, foo){
			$stateProvider
			.state(foo.index.state,{
				url: "/index",
				templateUrl: "home/home.html",
				controller: "homeController",
				controllerAs: "homeCtrl"
			})
			.state(foo.game_query.state,{
				url: "/game_query",
				templateUrl: "game_query/game_query.html",
				controller: "gameQueryController",
				controllerAs: "gameQueryCtrl"
			})
		});