function adjustHeight(){
	var body = document.body;
	var html = document.documentElement;
	var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

	var diff = 0;
	if(height > document.body.clientHeight ){
		diff = height - document.body.clientHeight;
		var oldHeightStr = $('#content').css('height');
		var oldHeightInt = parseInt(oldHeightStr.substring(0, oldHeightStr.length - 2) , 10);
		var newHeight = oldHeightInt + parseInt(diff , 10 );
		$('#content').css('height', newHeight);
	}
}
adjustHeight();