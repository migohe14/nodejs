const fs = require('fs');
const licitaciones = require('./listadoLicitaciones.json')

// console.log(licitaciones.contratos.contrato[0])
var length = licitaciones.contratos.contrato.length;
var licitacionSinPublicidad = []

for(var i = 0; i < length; i++) {
    if(licitaciones.contratos.contrato[i].ProcedimientoLicitacion === "Negociado sin  publicidad"){
        
        licitacionSinPublicidad.push(licitaciones.contratos.contrato[i])
        
    } 
}

// console.log(licitacionSinPublicidad)

var licitacionSinPublicidadString = JSON.stringify(licitacionSinPublicidad)



fs.writeFile('./licitacionSinPublicidad.json', licitacionSinPublicidadString, function(err) {
    if(err){
        console.log(err)
    } else {
        console.log('Archivo creado')
    }
} )