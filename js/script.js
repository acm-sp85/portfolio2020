

function changeCursor(){
	var x = event.clientX;
	var contenedor = document.getElementById("container")

	if (x > contenedor.clientWidth/2){
		contenedor.style.cursor = "e-resize";
	}else {
		contenedor.style.cursor = "w-resize";
	
	}

}

function whereClick() {
	var contenedor = document.getElementById("container")
	contenedor.addEventListener("click" , leftOrRight , true);
	


}

function leftOrRight(){

	var x = event.clientX;
	
	console.log("position x:" , x);
	console.log("image width:" , container.clientWidth);
	

	if (x > container.clientWidth/2){
		forward();
	}else {
		backward();
	}

}

//ADDING NAVIGATION WITH KEYSTROKES
document.onkeydown = function teclas() {
    switch (window.event.keyCode) {
        case 37:
         console.log('Left key is pressed')
         backward(); 
         break;
        case 38:
         console.log('Up  key is pressed')
         forward(); 
         break;
        case 39:
		console.log('Right key is pressed')
		forward(); 
         break;
        case 40:
		console.log('Down key is pressed')
		backward(); 
        break;
    }
};


//INCREASES THE COUNTER WHEN CLICKING, RESETS COUNTER AT THE END OF ARRAY
function forward() {

if ( counter < 4){
  counter++;
  elmnt.src = fotos[counter];

} else {

  counter = 0;
  elmnt.src = fotos[counter];
}
   
}

//DECREASES THE COUNTER WHEN CLICKING, FORCES COUNTER THE LAST IN THE ARRAY IF COUNTER EQUALS 0
function backward(){

if ( counter == 0 ){
  counter = 4;
  elmnt.src = fotos[counter];

} else {

  counter--;
  elmnt.src = fotos[counter];

}
   
}