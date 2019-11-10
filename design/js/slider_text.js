var nextBtn = document.getElementById('next');
var backBtn = document.getElementById('back');

var items_text = document.getElementsByClassName('item');
var len_text = items_text.length;
var num = 0;
items_text[num].style.display='block';


nextBtn.addEventListener("click", next, false);
backBtn.addEventListener("click", back, false);

function next(event) {

  num++;
  num>=len_text?num=0:'';
  for(var i=0; i<len_text; i++){
    if(num == i){
       items_text[i].style.display='block';
       items_text[i].style.animation='opacity_right 0.8s ';
       }else{
      items_text[i].style.display='none';
    }
  } 
   
}



function back(event) {

  num--;
  num<0?num+=len_text:'';
  for(var i=0; i<len_text; i++){
    if(num == i){
       items_text[i].style.display='block';
      items_text[i].style.animation='opacity_left 0.8s ';
       }else{
      items_text[i].style.display='none';
    }
  } 
  
} 
 