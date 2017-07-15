var numero = Number(prompt("Entrez un nombre et nous allons vous donnez sa table de multiplication"));
var i;
var multi;
console.log("voici la table de multiplication");
for (i = 0; i <= 10; i++) {
    multi = numero * i;
    console.log(numero + " " + "*" + " " + i + " " + "=" + " " + multi);
}