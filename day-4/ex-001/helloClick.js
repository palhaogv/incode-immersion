/*Write a file `helloClick.js` to be included in the `hello_click.html` file 
joined to the mission.
You will make it that whenever the user clicks the button, 
it logs the words "Well, hello there!" in the console.

You must not modify the HTML file, all your code goes in `helloClick.js`!*/
window.onload = function () {
    var test = document.getElementById("hello")
    test.onclick = function () {
        console.log("Well, hello there!");
    };
}

