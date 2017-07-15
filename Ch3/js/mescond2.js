var a = Number(prompt("Nous allons ressoudre ax2+bx+c,\n svp entrez a: "));
var b = Number(prompt("Maintenant, entrez b: "));
var c = Number(prompt("Pour finir, Entez c: "));
var delta1;
var x;
var x1;
var x2;
if (a = 0) {
        console.log("On a une equation du premier degre");
        if (b = 0) {
            console.log("Infinite de solution"); 
                   }
        else {
            if (c = 0) {
                console.log("x = 0");
                       }
            else {
                x = (- c) / b;
                console.log(x);
            
                 }
             }
    
     }
else {
    delta1 = (b * b) - (4 * a * c);
    if (delta1 < 0) {
        console.log("impossible");
    }
    else if (delta1 = 0) {
        x1 = b / (2 * a);
        x2 = b / (2 * a);
        console.log("la valeur de x1 est: " + x1);
        console.log("la valeur de x2 est: " + x2);
    }
    else if (delta1 > 0) {
        x1 = ((- b) - (delta1 / 2)) / (2 * a);
        x2 = ((- b) + (delta1 / 2)) / (2 * a);
        console.log("la valeur de x1 est: " + x1);
        console.log("la valeur de x2 est: " + x2);
    }
}
