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
    };
    

}