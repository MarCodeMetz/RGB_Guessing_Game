var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //modeButtons eventListeners
    setUpModeButtons();
    setUpSquares();
    reset();
};

function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "EASY") {
                numberOfSquares = 3;
            } else {
                numberOfSquares = 6;
            }
            reset();
        });
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
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
}

function reset() {
    //when clicking button, generate new colors
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New colors";
    message.textContent = "";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function () {
    reset();
});

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