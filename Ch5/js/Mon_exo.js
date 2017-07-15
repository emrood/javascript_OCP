function emrood1(nom, prenom, age) {
    var info = ("Info client: " + nom + " " + prenom + ", " + age );
    return info;
}

console.log("Voici les informations dont nous disposons");
var i;
for (i = 1; i <= 5; i++) {
    var name = prompt("Quel est votre nom?");
    var firstname = prompt("Quel est votre nom");
    var yourage = prompt("QUel est votre age?");
    var complete = emrood1(name, firstname, yourage);
    console.log(complete);
}
console.log("Merci !!");