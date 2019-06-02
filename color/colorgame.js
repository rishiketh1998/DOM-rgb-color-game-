let numSquares = 9;
let colors = generateRandomColors(numSquares)
let square = document.querySelectorAll(".square")
let pickedColor = pickcolor();
let colorDisplay = document.querySelector("#colorDisplay")
let messageDisplay = document.querySelector("#message")
let h1 = document.querySelector("h1")
let reset = document.querySelector("#reset")
let mediumBtn = document.querySelector("#mediumBtn")
let hardBtn = document.querySelector("#hardBtn")




colorDisplay.textContent = pickedColor; 

for (let i = 0; i < square.length; i++) {
	//to add colors inside square
	square[i].style.backgroundColor = colors[i];
   // Add click listeners to squares
    square[i].addEventListener("click", function() {
        // Grab color of the clicked square
        let clickedColor = this.style.backgroundColor;
        // Compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Yayy! You got it Right";
            changeColors(clickedColor);
            reset.textContent = "Play Again?"
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Try Again"
        }
    });
}

   
 
  function changeColors(color) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color;
    }
  }
  
  function pickcolor(){
    let random = Math.floor(Math.random() * colors.length);
    return  colors[random];
  }

    function generateRandomColors(num) {
    //make an array
    let arr = [];
    //add num random colors to arr
    for(let i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
    }

    function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
    }
    
 reset.addEventListener("click",function(){
    
    colors = generateRandomColors(numSquares);
    pickedColor = pickcolor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
 }
 h1.style.backgroundColor = "steelblue";
 messageDisplay.textContent = "";
 this.textContent = "New Colors"

})
 
 mediumBtn.addEventListener("click",function(){
    
    hardBtn.classList.remove("selected")
    mediumBtn.classList.add("selected")
    numSquares = 6;
    colors = generateRandomColors(6)
    pickedColor = pickcolor();
    colorDisplay.textContent = pickedColor; 
    for (let i = 0; i < square.length; i++) {
        if(colors[i]){
        square[i].style.backgroundColor = colors[i]
    }else{
        square[i].style.display = "none";
    }
}
})
 


hardBtn.addEventListener("click",function(){
    
    hardBtn.classList.add("selected")
    mediumBtn.classList.remove("selected")
    numSquares = 9;
    colors = generateRandomColors(numSquares)
    pickedColor = pickcolor();
     colorDisplay.textContent = pickedColor; 
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors[i]
        square[i].style.display = "block";
}
})


