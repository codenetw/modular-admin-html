var wssocket = function(callback, func)
{
	var socket = new WebSocket("ws://127.0.0.1:2012/" + func);

	socket.onmessage = function(event) {
		callback(event.data);
	};

	socket.onopen = function() {
		socket.send('init');
		console.log("Соединение установлено.");
	};

	socket.onclose = function(event) {
		if (event.wasClean)
			console.log('Соединение закрыто, причина : '+ event.reason);
		 else
			console.log('Обрыв соединения');
	};

	socket.onerror = function(error) {
		console.log("Ошибка " + error);
	};

	return socket;
};
