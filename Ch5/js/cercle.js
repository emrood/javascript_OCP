function perimetre(rayon) {
    var ray = rayon;
    var perim = (2 * Math.PI * ray);
    return perim;
}
function surface(rayon) {
    var aire = rayon;
    var surf = (Math.PI * (aire * aire));
    return surf;
}
console.log("commencons...");
var rayon1 = Number(prompt("Entrez le rayon de votre cercle"));
var perimetre1 = perimetre(rayon1);
var surface1 = surface(rayon1);
console.log("Le perimetre de votre cercle est: ");
console.log(perimetre1 + " " + "m");
console.log("L'aire de votre cercle est");
console.log(surface1 + " " + "m2");
console.log("merci !!! :-)");