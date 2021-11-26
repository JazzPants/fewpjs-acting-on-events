// Your code here

//log in key press events e.g. enter, shift, arrowleft etc.
document.addEventListener("keydown", 
    function(e) {
    console.log(e.key);
  });

  let dodger = document.getElementById("dodger");

  function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
  }

  function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", "");
    let right = parseInt(rightNumbers, 10);
  
    if (right < 360) {
      dodger.style.left = `${right + 10}px`;
    }
  }


  document.addEventListener("keydown", 
    function(e) {
        if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
  });

  document.addEventListener("keydown", 
  function(e) {
      if (e.key === "ArrowRight") {
      moveDodgerRight();
  }
});

//   document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft" || "a") {
//       let leftNumbers = dodger.style.left.replace("px", ""); //remove px, get string 400
//       let left = parseInt(leftNumbers, 10); //convert to number so we can use it in calculation
//         if(left > 0 ) {
//       dodger.style.left = `${left - 5}px`; //calculate then string interpolate for css styling ___px
//         }
//     }
//   });