const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

const contenedor = document.body;

countries.forEach(ciudad = > {
    const contenedor$$ = document.createElement('div');
    contenedor$$.classList.add('contenedor');

    const titulo$$ = document.createComment('h4');
    titulo$$.textContent = ciudad.title;

    const imgElement = document.createElement('img');
    imgElement.src = ciudad.imgUrl;
    imgElement.alt = ciudad.title;

    contenedor$$.appenChild(titulo$$);
    contenedor$$.appenChild(imgElement);

    ciudad.appenChild(contenedor);

});