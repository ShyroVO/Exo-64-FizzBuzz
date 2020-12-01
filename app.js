let chiffre;
let fizz = "fizz";
let buzz = "buzz";

for (chiffre = 1 ; chiffre <= 100 ; chiffre++) {
    if (chiffre % 3 === 0 && chiffre % 5 === 0) {
            console.log(chiffre + " => " + fizz + buzz);
        }

    else if (chiffre % 3 === 0) {
        console.log(chiffre + " => " + fizz);
    }

    else if (chiffre % 5 === 0) {
        console.log(chiffre + " => " + buzz);
    }

    else {
        console.log(chiffre + " => " + chiffre);
    }

}