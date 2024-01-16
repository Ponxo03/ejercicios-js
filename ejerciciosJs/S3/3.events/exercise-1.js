const boton$$ =document.getElementById("btnToClick");


boton$$.addEventListener("click",function(event){
console.log("Clik",event);
})
boton$$.textContent = "Clik";

console.log(boton$$)