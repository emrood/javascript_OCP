var mot = prompt("Entrez un mot quelconque svp");
console.log ("Le mot " + mot + " "+ "contient" + " "+ mot.length + " " + "caracteres")
console.log ("Il s'ecrit en majuscule: " + mot.toUpperCase());
console.log ("Il s'ecrit en minuscule: " + mot.toLowerCase());
console.log ("Et sur une colonne on obtient: ");
var i;
for (i = 0; i < mot.length; i++){
    console.log(mot[i]);
}
function nbrVoyelle(mot) {
    var i;
    var compteur1 = 0;
    var compteur2 = 0;
    var mot1 = (mot.toLowerCase());
    console.log(mot1);
    
    for (i = 0; i < mot1.length; i++) {
        if ((mot1[i] === "a") || (mot1[i] === "e") || (mot1[i] === "i") || (mot1[i] === "o") || (mot1[i] === "u") || (mot1[i] === "y")) {
            compteur1++;
        }
        else {
            compteur2++;
        }
        
    }
    console.log("Le nombre de voyelle est: " + compteur1);
    console.log("Le nombre de consonne est: " + compteur2);  
}
console.log(nbrVoyelle(mot));
var inverse = "";
var e;
for (e = 0; e < mot.length; e++) {
    inverse = mot[e] + inverse;
    
}
console.log(inverse);