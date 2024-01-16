const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];



for (const usuario of users) {
  let suma = 0;
  let contador = 0;
  for (const sonido in usuario.favoritesSounds) {
    // console.log(usuario.favoritesSounds)
    // console.log(usuario.favoritesSounds[sonido])
    // --> no funciona -->> console.log(usuario.favoritesSounds.name)
    suma += usuario.favoritesSounds[sonido].volume;
    contador++;
  
    
  }

  const mediaVolumen = suma / contador;
  console.log(usuario.name,mediaVolumen)
}


  