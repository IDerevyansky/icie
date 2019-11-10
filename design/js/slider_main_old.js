var nextBtn_main = document.getElementById('rightBtn');
var backBtn_main = document.getElementById('leftBtn');

var items_slides = document.getElementsByClassName('item_slide');
var len_main = items_slides.length;
var num_main = 0;
items_slides[num_main].style.display='block';


nextBtn_main.addEventListener("click", next_main, false);
backBtn_main.addEventListener("click", back_main, false);

function next_main(event) {

  num_main++;
  num_main>=len_main?num_main=0:'';
  for(var i=0; i<len_main; i++){
    if(num_main == i){
       items_slides[i].style.display='block';
       items_slides[i].style.animation='opacity_top 0.8s ';
       }else{
      items_slides[i].style.display='none';
    }
  } 
   
}



function back_main(event) {

  num_main--;
  num_main<0?num_main+=len_main:'';
  for(var i=0; i<len_main; i++){
    if(num_main == i){
       items_slides[i].style.display='block';
	   console.log('work_back');
	   items_slides[i].style.animation='opacity_bottom 0.8s ';
       }else{
      items_slides[i].style.display='none';
    }
  } 
  
} 