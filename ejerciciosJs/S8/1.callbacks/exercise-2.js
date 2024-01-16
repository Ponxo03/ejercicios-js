const userAnwsers = [];

    
    function confirmExample(description){
    
     return confirm(description);
}

    function promptExample(description){

     return prompt(description);
}

    function father(description, callback){

    const resutlado = callback(description);
    
    userAnwsers.push(callback(description));

}
father('hola',confirmExample);
father('dew',promptExample);
father('buenas',confirmExample);
father('adios',promptExample);

console.log(userAnwsers);