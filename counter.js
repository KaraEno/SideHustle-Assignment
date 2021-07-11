const count = document.getElementById("counter");
var counter = 0;
  function increase(){
    if (counter < 50){
    counter += 1;
    }
    count.innerHTML = counter;
  }
 function decrease(){
 	if(counter > 0){
 	counter--;
 	}
 	count.innerHTML = counter;
 }
