/*Write a file `changeColor.js` to be included in the `change_color.html` 
file joined to the mission.

Like the h3 tag on the page says, you will make it that whenever the mouse hovers over a 
color name, the square takes the corresponding color.

## Example

see changeColor.gif*/

window.onload = function () {
    var blue = document.getElementById('blue')
    var red = document.getElementById('red')
    var yellow = document.getElementById('yellow')
    var green = document.getElementById('green')
    var black = document.getElementById('black')
    var square = document.getElementById('square')

    //SOLUTION 1.
    function changeTheColor(arg) {
        //arg is and object (e.g. arg blue is <div id="blue">BLUE</div>)
        //so arg.onmouseover is the function to when the mouse is over the object (e.g. blue)
        //it's going to do something, in that case: square.style.background=objText
        //objText is the text inside the object (e.g. is BLUE in <div id="blue">BLUE</div>)
        var objText = arg.innerText
        arg.onmouseover = function () {
            square.style.background = objText;
        };
    }

    changeTheColor(red)
    changeTheColor(yellow)
    changeTheColor(green)
    changeTheColor(black)
    changeTheColor(blue)
}

/* SOLUTION 2.
blue.onmouseover = function () {
    square.style.background='blue';
};

red.onmouseover = function () {
    square.style.background='red';
};

yellow.onmouseover = function () {
    square.style.background='yellow';
};

green.onmouseover = function () {
    square.style.background='green';
};

black.onmouseover = function () {
    square.style.background='black';
};*/