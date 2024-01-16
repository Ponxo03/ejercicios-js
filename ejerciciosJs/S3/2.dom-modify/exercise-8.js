const div$$ =document.querySelectorAll('div')[1];

const p = document.createElement("p");

p.textContent = 'voy en medio';

document.body.insertBefore(p, div$$);

console.log(div$$)

