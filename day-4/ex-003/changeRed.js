/*Write a file `changeRed.js` to be included in the `change_red.html` 
file joined to the mission.

Like it says on the page, you will make it that whenever the mouse hovers 
over the square, it will become red.

Again, you must not modify the HTML file.*/
window.onload = function () {
    var element = document.getElementById('square')
    element.onmouseover = function () {
        this.style.background='red';
    };
    element.onmouseout = function () {
        this.style.background='blue'
    }
}