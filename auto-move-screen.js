let scrollerId;
let paused = true;
let speed = 3;
let interval = speed*5;

function startScroll(){
    let id = setInterval(function(){
         window.scrollBy(0,2);
          if(
            window.innerHeight + window.scrollY ==
            document.body.offsetHeight
        ) {

        stopScroll();
    }
            },interval);
          return id;
    }

    function stopScroll(){
        clearInterval(scrollerId);
    }
            
            document.body.addEventListener('keypress', function(event){
            if (event.which==13 || event.keyCode ==13){

        if (paused == true) {
            scrollerId = startScroll();
            paused = false;
        }else{
        stopScroll();
        paused = true;
        }
}
                
});
