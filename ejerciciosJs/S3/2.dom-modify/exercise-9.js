const elemento$$ = document.querySelectorAll('.fn-insert-here');

elemento$$.forEach(inter => {
    let p$$ = document.createElement('p');
    p$$.textContent = 'Voy dentro';
    inter.appendChild(p$$)
    
});
