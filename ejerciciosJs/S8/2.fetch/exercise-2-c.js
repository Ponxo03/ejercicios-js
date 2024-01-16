const baseUrl = 'https://api.nationalize.io?name=';
 


let button$$ = document.querySelector("button");

button$$.addEventListener("click", clickAqui);

let input$$ = document.querySelector("input");

function clickAqui(){
    
    fetch( baseUrl + input$$.value)
    .then(reponse => reponse.json())
    .then(resData =>neWdata (resData)
    );
  
}

neWdata = ({country, name}) => {
    console.log(country);
    for (const datos of country) {
        let p = document.createElement("p");
        let button = document.createElement('button');
        p.textContent =`El nombre ${name} tiene un ${datos.probality * 22} porciento de ser ${datos.country_id} ET `;
        document.body.appendChild(p);
        p.appendChild(button);
        button.textContent = 'X';
        p.addEventListener('click', () => p.remove());

    }

}
clickAqui();