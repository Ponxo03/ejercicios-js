 fetch('https://api.agify.io?name=michael')
    .then(reponse => reponse.json())
    .then(resData =>{
        console.log(resData)
    });

