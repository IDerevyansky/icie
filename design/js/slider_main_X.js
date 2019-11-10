var items, len, slider, btnForward, btnRevers, translate, scale, step=[], scale_memory=[], translate_memory=[], del, push, set, slider_main, mouseenter, mouseleave, corusel, preloader, preloader_line, ms;

slider_main = document.getElementsByClassName('slider_main');
items 	    = document.getElementsByClassName('item_slide');
btnForward  = document.getElementById('rightBtn');    
btnRevers   = document.getElementById('leftBtn'); 
len   	    = items.length-1;
translate   = 0;
scale       = 1;


	for (var i = 0; i < items.length; i++) {
			step[i]=i+1;
		}


	for (var i = 0; i < items.length; i++) {


			items[i].style.zIndex   = step[len-i];
			items[i].style.position = 'absolute';
	
			if (items[i].style.zIndex > items.length-3) {
					items[i].style.opacity   = '1';
					items[i].style.transform = 'translate3d(0px, '+translate+'px, 0px) scale('+scale+')';
				} else {
					items[i].style.opacity   = '0';
					items[i].style.transform = 'translate3d(0px, 60px, 0px) scale(0.8)';
				}

			scale_memory[i]     =scale.toFixed(1);
			translate_memory[i] =translate;
			scale-=0.1;
			translate+=30;


		}

		scale_memory.reverse();
		translate_memory.reverse();



class Slider{

	
	
	
		forward(){

		
		function splice_push(q){
			del = q.splice(0,1);
			push = q.push(del);
			return push;
		}

		splice_push(step);
		splice_push(scale_memory);
		splice_push(translate_memory);


		
	


			for (var i = 0; i < items.length; i++) {
				
				

				items[i].style.zIndex=step[len-i];

				if (items[i].style.zIndex > items.length-3) {

					items[i].style.opacity   ='1';
					items[i].style.transform = 'translate3d(0px, '+translate_memory[len-i]+'px, 0px) scale('+scale_memory[len-i]+')';

				} else {
					items[i].style.opacity   ='0';
					items[i].style.transform = 'translate3d(0px, 60px, 0px) scale(0.8)';

				}
				
			}

	
	 
			
		}


		revers(){

		function splice_unshift(q){
			del  = q.splice(len,1);
			push = q.unshift(del);
			return push;
		}

		splice_unshift(step);
		splice_unshift(scale_memory);
		splice_unshift(translate_memory);

	


			for (var i = 0; i < items.length; i++) {
		
				items[i].style.zIndex=step[len-i];
					
				if (items[i].style.zIndex > items.length-3) {
					items[i].style.opacity='1';
					items[i].style.transform = 'translate3d(0px, '+translate_memory[len-i]+'px, 0px) scale('+scale_memory[len-i]+')';
				} else {
					items[i].style.opacity='0';
					items[i].style.transform = 'translate3d(0px, 60px, 0px) scale(0.8)';
				}

			}


			
		}



}



//Вызов метода по клику 
slider 			   = new Slider();
btnForward.onclick = () => slider.forward();
btnRevers.onclick  = () => slider.revers();


//Вызов метода по таймеру
preloader_line     = document.getElementsByClassName('preloaderLine');
ms 			       = 4000;
preloader 	       = (s) => { preloader_line[0].style.animation ="progress "+s+"ms infinite ease-in-out"; };
corusel 	       = (param) => { param == true?clearInterval(set):set = setInterval(() => { slider.forward(); }, ms); };

preloader(ms); 
corusel(false);

mouseenter 	       = slider_main[0].addEventListener("mouseenter", () => { corusel(true); preloader_line[0].style.display ="none"; }, false);
mouseleave         = slider_main[0].addEventListener("mouseleave", () => { corusel(false); preloader_line[0].style.display ="block"; }, false);

