var item_js = document.getElementsByClassName('item_js');
var moreIcon = document.getElementsByClassName('more_menu');
var pop_app_menu_box = document.getElementsByClassName('pop_app_menu_box');
var pop_app_menu = document.getElementsByClassName('pop_app_menu');
var menu_box_nav = document.getElementsByClassName('menu_box_nav');
 // moreIcon[0].style.display='block'; 
 //moreIcon[1].style.display='none'; 
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

// -------------------

var select_js = document.getElementsByClassName('select_js');
var item_js = document.getElementsByClassName('item_js');


function opacity_item(q) {
	pop_app(); 

	console.log(q);	

	for ( var i=0; i <= item_js.length; i++ ) {

	(function(i){

		if(q == i){
			//console.log('border '+i);
			select_js[i].style.borderBottom="2px solid rgba(79, 193, 236, 1)";
		}else{
			select_js[i].style.borderBottom="0px solid rgba(79, 193, 236, 0)";
		}

		if(item_js[i] != undefined){
			if(q == 0){ 
				item_js[i].style.opacity='1';  
			}else if(q == i+1){
		 		item_js[i].style.opacity='1'; 
			}else{
				item_js[i].style.opacity='0.5';
			}
			
		}

	})(i);

		
	}


};






function offset(){

	pop_app_menu_box[0].style.display='none';
	 

  scrollTop = window.pageYOffset || document.documentElement.scrollTop;


if(scrollTop>=100){ 
		 // moreIcon[0].style.display='none'; 
		 moreIcon[0].style.display='block'; 
		 // moreIcon[1].style.animation='opacity_bottom 0.5s ';
     	 menu_box_nav[0].style.boxShadow="0px 10px 22px rgba(117, 206, 240, 0.25)";
	}else{
   	 	 menu_box_nav[0].style.boxShadow="0px 10px 22px rgba(117, 206, 240, 0)";
		 moreIcon[0].style.display='none'; 
		 // moreIcon[0].style.display='block'; 
		 // moreIcon[0].style.animation='opacity_top 0.5s '; 
	 } 

}

function pop_app(){


	pop_app_menu_box[0].style.display='block';

  //console.log(scrollTop);

  if(scrollTop>=100){
		pop_app_menu_box[0].style.marginTop=scrollTop-56+'px';
		//moreIcon[1].style.animation='opacity_bottom 0.5s ';
	}else{
		pop_app_menu_box[0].style.marginTop='0px';
		//moreIcon[0].style.animation='opacity_top 0.5s ';
	}



}


function closePopUp(){
	pop_app_menu_box[0].style.display='none';
}

function openPopUp(){
	pop_app_menu_box[0].style.display='block';
}



pop_app_menu_box[0].addEventListener("click", closePopUp, false); 
window.addEventListener("scroll", offset, false);
pop_app_menu[0].addEventListener("mouseleave", closePopUp, false);



	
for (var i = 0; i <= select_js.length; i++) {
	
	(function(i){
		if(select_js[i] != undefined){
	  	select_js[i].addEventListener("mouseenter", function(){opacity_item(i)}, false);
		}
	})(i);
	

}

for (var i = 0; i < item_js.length; i++) {
	
	(function(i){
		item_js[i].addEventListener("mouseenter", function(){opacity_item(i+1)}, false);
	})(i);
	
}




