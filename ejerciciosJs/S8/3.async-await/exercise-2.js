 async function getCharacters () {
    try{
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if(response){
            const personajes = await response.json();
            console.log(personajes);

        }
    }catch (error){
        console.log("Error del personaje",error);
    }

 }

 getCharacters();