var numberOfSquares = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");


easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function () {
    //when clicking button, generate new colors
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    this.textContent = "New colors";
    message.textContent = "";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add inital colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            message.textContent = "Correct!";
            resetButton.textContent = "Play again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Wrong! Try again!";
        }
    });
}

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //add num random colors to array
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    };
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0-255
    var red = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var green = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}