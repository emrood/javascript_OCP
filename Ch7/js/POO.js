var stylo = {
    type: "bille",
    couleur: "vert",
    marque: "bic"
};

console.log(stylo.couleur);
console.log(stylo.marque);
console.log(stylo['type']);

function MonObjet() {
    var plume = {
        type: "bille",
        couleur: "blue",
        marque: "papermate"
    };
    return plume.couleur;
}

var Objet1 = MonObjet();
console.log(Objet1);

console.log("\n Mon style a " + stylo.type + " " + stylo.marque + " ecrit en " + stylo.couleur );

stylo.couleur = "rouge";
stylo.marque = "papermate";

console.log("\n Mon style a " + stylo.type + " " + stylo.marque + " ecrit en " + stylo.couleur );

stylo.prix = "2.5"

console.log("Il coute " + stylo.prix + " " + "euros");