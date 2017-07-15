function carreParfait(nombre) {
    var info = (nombre);
    var operation = info*info;
    return operation;
}
var i;
for (i = 0; i <= 100; i+=5) {    
    console.log(carreParfait(i));
}