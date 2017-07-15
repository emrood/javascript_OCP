var perso = {
    nom: "vibora",
    sante: 60,
    force: 80,

    decrire: function () {
        var description = this.nom + " possede " + this.sante + " point de vie et " + this.force + " en force";
        return description;
    }
};

console.log(perso.decrire());

// vibora prend une balle

perso.sante = perso.sante - 30;

// vibora a prix de la drogue
perso.force = perso.force + 10;

console.log(perso.decrire());