var perso = {
    nom: 'Aurora',
    sante: 80,
    force: 70,
};

console.log (perso.nom + " a " + perso.sante + " point de vie et " + perso.force + " en force");

//Aurora se blesse

perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force

perso.force = perso.force + 20;

console.log (perso.nom + " a " + perso.sante + " point de vie et " + perso.force + " en force");



