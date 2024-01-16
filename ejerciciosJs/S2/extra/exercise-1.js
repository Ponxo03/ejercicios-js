const peliculas = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

const listaCategorias = [];

for (const peli of peliculas) {
    for (const categoria of peli.categories) {
        if (!listaCategorias.includes(categoria)){
            listaCategorias.push(categoria);
        }
    }
}
console.log(listaCategorias);