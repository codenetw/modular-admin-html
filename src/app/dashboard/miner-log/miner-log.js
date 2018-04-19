$(function() {

    var $dashboardLog = $('#dashboard-log');
    var socket;
    if (!$dashboardLog.length) {
        return false;
    }

    function drawLog() {
		$dashboardLog.empty();
		socket = wssocket(function( responce ){
			$dashboardLog.append(responce+"</br>");
		},'log');
    }

    drawLog();

    $(window).unload(function(){
		socket.close();
	});

    $(document).on("themechange", function(){
		drawLog();
    });
});
