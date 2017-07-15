function calculatrice(nbr1, signe, nbr2) {
    var nombre1 = nbr1;
    var nombre2 = nbr2;
    var operateur = signe;
    var operation;
    if (operateur === "+") {
        operation = (nombre1 + nombre2);
        console.log(operation);
    }
    else if (operateur === "-") {
        operation = (nombre1 - nombre2);
        console.log(operation);
    }
    else if (operateur === "*") {
        operation = (nombre1 * nombre2);
        console.log(operation);
    }
}
console.log("Debut des operations");
console.log(calculatrice(5,"+",8));
console.log(calculatrice(2,"*",2));
console.log(calculatrice(18,"-",3));
console.log(calculatrice(9,"+",1));
console.log(calculatrice(4,"*",12));
console.log("Fin des operations");