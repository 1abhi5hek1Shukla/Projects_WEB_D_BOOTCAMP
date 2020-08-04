var numOfSquares = 6;
var colors;
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();


function init(){
	modeSetup();
	setUpSquares();
	reset();
}
function modeSetup(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				numOfSquares = 3;
			}else{
				numOfSquares = 6;
			}
			reset();
		});
	}
}
function setUpSquares(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				message.textContent = "Correct";
				changeColors(clickedColor);
				h.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again ?";
			}else{
				this.style.backgroundColor = "#232323"
				message.textContent = "Try Again";
			}
		});
	}
}
function reset(){
	colors = generateRandomColor(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];	
		}else{
			squares[i].style.display = "none";
		}
	}
	message.textContent = "";
	h.style.backgroundColor = "steelblue";
	resetButton.textContent = "NEW COLORS";
}

resetButton.addEventListener("click",function(){
	reset();
});
	
function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	var r =  Math.floor(Math.random()*colors.length);
	return colors[r];
}
function generateRandomColor(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return("rgb(" + r +", " + g +", " + b + ")");
}