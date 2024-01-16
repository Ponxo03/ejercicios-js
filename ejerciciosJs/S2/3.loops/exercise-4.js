const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]

const sinGato =[];

for (const resultado of toys) {
   if(!resultado.name.includes('gato')){
    sinGato.push(resultado)
  
   }
}
console.log(sinGato);