const baseUrl = 'https://api.nationalize.io?name=';

let button$$ = document.querySelector("button");

button$$.addEventListener("click", clickAqui);

let input$$ = document.querySelector("input");

function clickAqui(){
    
    fetch( baseUrl + input$$.value)
    .then(reponse => reponse.json())
    .then(resData =>{ console.log(resData)
    });
  
}
clickAqui();


