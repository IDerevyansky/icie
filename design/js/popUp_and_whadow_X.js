var item_js = document.getElementsByClassName('item_js');
var moreIcon = document.getElementsByClassName('more_menu');
var pop_app_menu_box = document.getElementsByClassName('pop_app_menu_box');
var pop_app_menu = document.getElementsByClassName('pop_app_menu');
var menu_box_nav = document.getElementsByClassName('menu_box_nav');
 // moreIcon[0].style.display='block'; 
 //moreIcon[1].style.display='none'; 
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;


// mouseenter = slider_main[0].addEventListener("mouseenter", () => { }, false);
// mouseleave = slider_main[0].addEventListener("mouseleave", () => { }, false);

// -------------------

var select_js = document.getElementsByClassName('select_js');
var item_js = document.getElementsByClassName('item_js');

for (let i = 0; i <= select_js.length; i++) {
	
	if(select_js[i] != undefined){
		select_js[i].addEventListener( "mouseenter", () =>{opacity_item(i);} );
	}
}

for (let i = 0; i < item_js.length; i++) {
	item_js[i].addEventListener( "mouseenter", () =>{opacity_item(i+1);} );
}




var opacity_item = (q) => {
	pop_app();
	

	
	


	for (let i = 0; i <= item_js.length; i++) {


		if(q == i){
			select_js[i].style.borderBottom="2px solid #23B2E7";
		}else{
			select_js[i].style.borderBottom="0px solid #23B2E7";
		}


		if(item_js[i] != undefined){

			if(q == 0){ 
				item_js[i].style.opacity="1"; 
			}else if(q == i+1){
		 		item_js[i].style.opacity="1"; 
			}else{
				item_js[i].style.opacity="0.5";	
			}
			
		}
		

	


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


// moreIcon[0].addEventListener("click", pop_app, false); 
// moreIcon[1].addEventListener("click", pop_app, false);
pop_app_menu_box[0].addEventListener("click", closePopUp, false); 
pop_app_menu[0].addEventListener("click", openPopUp, false);
window.addEventListener("scroll", offset, false);
pop_app_menu[0].addEventListener("mouseleave", closePopUp, false);


