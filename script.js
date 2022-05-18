
function addition(nbre1, nbre2){
    return nbre1 + nbre2;
}
function soustraction(nbre1, nbre2){
    return nbre1 - nbre2;
}
function mutliplication(nbre1, nbre2){
    return nbre1 * nbre2
}
function division(nbre1, nbre2){
    try {
        return nbre1 / nbre2;
    } catch (error) {
        alert(error);
    }
}

do {
    var reponse = Number(prompt("Quelle operation voulez-vous effectuer ? \n \n 1- Addition \n 2- Soustraction \n 3- Multiplication \n 4- Division \n"));
} while (reponse != 1 && reponse != 2 && reponse != 3 && reponse != 4);
do {
    var nombre1 = Number(prompt("Donnez le premier nombre"));
    var nombre2 = Number(prompt("Donnez le deuxieme nombre"));
} while (isNaN(nombre1) || isNaN(nombre2));
switch (reponse) {
    case 1:
        alert(addition(nombre1, nombre2));
        break;
    case 2:
        alert(soustraction(nombre1, nombre2));
        break
    case 3:
        alert(mutliplication(nombre1, nombre2));
        break
    case 4: 
        alert(division(nombre1, nombre2));
        break
    default:
        alert("operation impossible");
        break;
}
