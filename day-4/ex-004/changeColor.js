/*Write a file `changeColor.js` to be included in the `change_color.html` 
file joined to the mission.

Like the h3 tag on the page says, you will make it that whenever the mouse hovers over a 
color name, the square takes the corresponding color.

## Example

see changeColor.gif*/

window.onload = function () {
    var square = document.getElementById('square') //square element

    //SOLUTION 1.
    function changeTheColor(arg) { //arg is the color string.
        var color = document.getElementById(arg) //var color gets the desired div (the div is an html object)
        //(e.g. color blue is <div id="blue">BLUE</div>)
        
        //color.onmouseover is the function that when the mouse is over the html object (e.g. BLUE)
        //it's going to do something, in that case: square.style.background=objText
        color.onmouseover = function () {
            square.style.background = arg; 
        };
    }

    changeTheColor('red')
    changeTheColor('yellow')
    changeTheColor('green')
    changeTheColor('black')
    changeTheColor('blue')
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