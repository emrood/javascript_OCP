function minimum(nbr1, nbr2) {
    var nombre1 = nbr1;
    var nombre2 = nbr2;
    if (nombre1 > nombre2) {
        console.log(nombre2);
    }
    else {
        console.log(nombre1);
    }
}

console.log("Debut du program");
console.log(minimum(4.5, 5));
console.log(minimum(8, 10));
console.log(minimum(18, 15));
console.log(minimum(3, 0));
console.log("C'est fini");

