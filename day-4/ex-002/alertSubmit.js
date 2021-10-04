/*Write a file `alertSubmit.js` to be included in the `alert_submit.html` file joined to the mission.

You will make it that whenever the user clicks on the submit button, 
it triggers an alert with the words "You have submitted the form!".

Again, you must not modify the HTML file, all your code goes in `alertSubmit.js`!*/

window.onload = function () {
    var element = document.getElementsByTagName('form')[0]
    element.onclick = function () {
        alert("You have submitted the form!");
    };
}