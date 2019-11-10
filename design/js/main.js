
function switchSubMenu(smid){
	$('.sub_menu').hide();
	$('.sm_'+smid).show();
}
function currentSubMenu(){
	$('.sub_menu').hide();
	$('.sm_'+curPage).show();
}

$(document).ready( function() {
	var elem = document.getElementById('content');
	elem.addEventListener('mouseover', function() { currentSubMenu() }, false);
	elem = document.getElementById('footer_box');
	elem.addEventListener('mouseover', function() { currentSubMenu() }, false);
});
