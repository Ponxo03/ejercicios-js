const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'},
 {isVisited:false, name: 'Seul'}];
 
 const ciudades = cities.map( city => {
 if(city.isVisited == true) {
   return city.name = ( city.name + " " +"visitando");


}
 
return city.name;


});

console.log(ciudades);