function direBonjour(prenom, nom) {
    var mesaj = ("Bonjour, " + prenom + " " + nom + "!");
    return mesaj;
}

var nom1 = prompt("Quel est ton nom ?");
var prenom1 = prompt("Quel est ton prenom ?");

console.log("Executons");
var solution = direBonjour(prenom1, nom1);
console.log(solution);
console.log("fin");