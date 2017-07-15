var entier = Number(prompt("Entrer un entier entre 0 et 20"));
if ((entier > 20) || (entier < 0)) {
    console.log("ce n'est pas bon, essayer encore");
    entier = Number(prompt("essayer a nouveau"));
}
if ((entier >= 0) && (entier <= 5)) {
    console.log("votre nombre se situe entre 0 et 5");
}
else if ((entier > 5) && (entier <= 10)) {
    console.log("votre nombre se situe entre 6 et 10");
}
else if ((entier >10) && (entier <=15)) {
    console.log("votre nombre se situe entre 16 et 20");
}
else if ((entier > 15) && (entier <=20)) {
    console.log("votre nombre se situe entre 16 et 20");
}