var anglais = Number(prompt("Entrer votre note d'anglais"));
var math = Number(prompt("Entrer votre note de math"));
var fran = Number(prompt("Entrer votre note de francais"));
var bio = Number(prompt("Entrer votre note de biologie"));
var physique = Number(prompt("Entrer votre note de physique"));
var philo =  Number(prompt("ENtrer votre note de philosophie"));
var somme;
somme = 0;
somme = somme + anglais + math + fran + bio + physique + philo;
var moyenne;
moyenne = (somme / 6) / 2;
if (moyenne > 6) {
    if (moyenne >= 8) {
        console.log("Felicitation, vous avez obtenue une moyenne superieure a 8");
        console.log(moyenne);
    }
    else {
        console.log("Bravo, vous etes admis en classe superieure");
        console.log(moyenne);
    }
}
else {
    if (moyenne >= 4) {
        console.log("Vous devez refaire la classe");
        console.log(moyenne);
    }
    else {
        console.log("Nous sommes desole, mais nous ne pouvons plus vous garder");
        console.log(moyenne);
    }
}