function pyramid(base) {
    j = 0
   // let k = 0;
    for (let i = 0; i <= base; i++) {
        var output = '';
        for (j; j < ((base - 1) / 2); j -= 2) output += ' '; 
        for (let k = 0; k <= i; k++) output += '#';
        for (j = 0; j <  base -1/2; j++) output += ' ';
        console.log(output);
    }
}

pyramid(9)
