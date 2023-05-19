console.log("ststs");
isStick();
window.addEventListener('scroll', function(e) {
    console.log('Underlying element scroll event bubbled'); // never happens
    isStick();
  });
  

  function isStick(){
    const element = document.getElementById("aa");
    if(element){
      let r =  element.getBoundingClientRect();
      console.log("r",r); 
      if(r.top <= 0 ){
        this.document.body.classList.add('isSticked');
      } else {
       this.document.body.classList.remove('isSticked');
      }
    }

  } 

