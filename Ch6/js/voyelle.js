function nbrVoyelle(mot) {
    var i;
    var compteur1 = 0;
    var compteur2 = 0;
    var mot1 = (mot.toLowerCase());
    console.log(mot1);
    
    for (i = 0; i <= mot1.length; i++) {
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
console.log(nbrVoyelle("Martine"));
console.log(nbrVoyelle("Josue"));
console.log(nbrVoyelle("Viviane"));
console.log(nbrVoyelle("Kilometre"));