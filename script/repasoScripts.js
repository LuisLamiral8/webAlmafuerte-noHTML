var v = new Array(10, 50, 2, 35, 80);
/*
var prueba= v.filter(clasificar);
function clasificar(valor){
    if(valor>30)return valor;
}
var prueba= v.filter(function(valor){
    if valor>=30)return valor;});
var prueba= v.map(function(valor){return valor*3+2});
*/
v.sort(function(valor, valor2){
    if(valor==valor2) return 0;
    else if(valor<valor2)return -1;
    else return 1; })

    console.log(v);