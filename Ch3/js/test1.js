var jour = prompt("Quel jour on est aujourd'hui");
switch (jour) {
    case "lundi":
        console.log("demain sera mardi, c'est chouette");
        break;
    case "mardi":
        console.log("demain est mercredi. Berk!!");
        break;
    case "mercredi":
        console.log("demain sera jeudi, quel galere");
        break;
    case "jeudi":
        console.log("demain 'est vendredi. le weekend approche enfin!!");
        break;
    case "vendredi":
        console.log("demain sera samedi,Youpiii");
        break;
    case "samedi":
        console.log("demain c'est dimanche. M'pral manje vyan poul!!");
        break;
    case "dimanche":
        console.log("demain sera lundi; AU SECOURRRSSS!!!");
        break;
    default:
        console.log("C'est quoi ca??? t'as pas fait le primaire");
}