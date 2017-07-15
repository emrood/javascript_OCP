function inverse(mot) {
    var i;
    var inversion = "";
    for (i = 0; i < mot.length; i++){
        inversion = mot[i] + inversion;
    }
    console.log(inversion);
}
function Nvoyelle(mot){
    var a;
    var compt1 = 0;
    var compt2 = 0;
    var minus = (mot.toLowerCase());
    for (a = 0; a < mot.length; a++) {
        if ( (minus[a] === "a") ||  (minus[a] === "e") || (minus[a] === "i") || (minus[a] === "o") || (minus[a] === "u") || (minus[a] === "y")) {
            compt1++;
        }
        else {
            compt2++;
        }
    }
    console.log("Le nombre de voyelles de ce mot est: " + compt1);
    console.log("Le nombre de consomnes de ce mot est: " + compt2);
    
}
function LeetSpeak(mot) {
    var e;
    var speak = (mot.toLowerCase());
    console.log(speak);
    for (e = 0; e < mot.length; e++) {
        if (speak[e] === "a"){
            speak[e] = ("4");
        }
    }
    console.log("Le mot en leet speak: ");
    console.log(speak);

}
var mot = prompt("Entrez un mot quelconque svp");
console.log ("Le mot contient : " + mot.length + " " + "caracteres");
console.log ("Il s'ecrit en majuscule : " + mot.toUpperCase());
console.log ("...et en minuscule: " + mot.toLowerCase());
console.log("L'inverse de ce mot est: ");
console.log(inverse(mot));
console.log(Nvoyelle(mot));
console.log(LeetSpeak(mot));
var e;
console.log("sur une colonne on obtient: ")
for (e = 0; e < mot.length; e++) {
    console.log(mot[e]);
}
console.log("Et voila!!!");