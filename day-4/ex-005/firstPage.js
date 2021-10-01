/*Write a file `firstPage.js` to be included in the `first_page.html` file joined to the mission.

Your JavaScript code will change the current title to "My first (dynamic) webpage".

You will also add 2 events handlers:
- when the user clicks on "Then", an alert should display "The Beatles (January 13, 1969)"
- when the user clicks on "Now", an alert should display "Carly Rae Jepsen (March 1, 2012)"
*/

window.onload = function() {
    //getting the text in <title> and changing it 
    document.getElementsByTagName('title')[0].innerHTML = 'My first (dynamic) webpage' 

    //getting the h2 objects
    var elementThen = document.getElementsByTagName('h2')[0]
    var elementNow = document.getElementsByTagName('h2')[1]
    
    //function to THEN
    elementThen.onclick = function() {
        alert('The Beatles (January 13, 1969)');
    }

    //function to NOW
    elementNow.onclick = function() {
        alert('Carly Rae Jepsen (March 1, 2012)');
    }
}