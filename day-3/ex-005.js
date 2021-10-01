/*Write a function `groupFamilies` that takes an array of objects with `name` and `surname` keys.

It will return an object with surnames as keys, and the associated names in an array.*/

function groupFamilies(arr) {
    //creating an object to receive later the surnames and names. 
    let objSurname = {}

    //creating a list of arr's surnames
    let listOfSurnames = []

    //passing through all the objects in the arr, the looping above it's going to push to listOfSurnames the surnames without repeating them,
    // and also adding which surname as a Key in objSurname
    for (i = 0; i < arr.length; i++) {
        let surnameToCheck = arr[i].surname
        listOfSurnames.includes(surnameToCheck) ?  0 : listOfSurnames.push(surnameToCheck) && (objSurname[surnameToCheck] = [])
    }

    //creating a double loop. The first one to get inside which of the arr's groups. And the other one to get inside of which group.
    //The first loop  
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < listOfSurnames.length; j++) {
            arr[i].surname.includes(listOfSurnames[j]) ? objSurname[listOfSurnames[j]].push(arr[i].name) : 0
        }
    }

    //making the results printable 
    const prt = JSON.stringify(objSurname)
    console.log(prt)
}

groupFamilies([{"name": "Barack", "surname": "Obama"}, {"name": "Michelle", "surname": "Obama"}])
groupFamilies([{"name": "Barack", "surname": "Obama"}, {"name": "Michelle", "surname": "Obama"}, {"name": "Donald", "surname": "Trump"}])