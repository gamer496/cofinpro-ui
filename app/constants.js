var states = {
	index: {"name": "Index", "state": "index"},
	game_query: {"name": "Game Query", "state": "game_query"}
};

angular.module("app.constants", [])
	.constant("foo", {
		server_url: "http://localhost:5000",
		client_url: "http://localhost:8000",
		index: states.index,
		game_query: states.game_query,
		navBarAttris: [states.index, states.game_query]
	})