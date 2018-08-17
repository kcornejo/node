let nombre = 'Deadpool';
let real = 'Wade Wilson';


//console.log(nombre + ' ' + real);
//console.log(`${nombre } ${real}`);

//let nombreCompleto = nombre + ' ' + real;
//let nombreTemplate = `${nombre} ${real}`;
//console.log(nombreCompleto);
//console.log(nombreTemplate);
//console.log(nombreCompleto == nombreTemplate);
//console.log(nombreCompleto === nombreTemplate);
function getNombre() {
    return `${nombre} ${real}`;
}
console.log(`${getNombre()}`);