var meteo= prompt("Quel temps il fait a jacmel aujourd'Hui");
switch (meteo) {
    case "soleil":
        console.log("C'est l'heure d'aller a la plage");
        break;
    case "vent":
        console.log("si j'etais vous, je porterai des vetements chauds");
        break;
    case "pluie":
        console.log("vous auriez un parapluie chez vous par hazard?");
        break;
    case "neige":
        console.log("essayer de rester chez vous pour une fois");
        break;
    default:
        console.log("Je n'ai rien compris de ce que vous dite");
}