//para poder trabajar con fetch dentro de node, debemos instalar un recurso dentro de la terminal

import fetch from 'node-fetch';

//traemos nuestra API
const API= 'https://api.escuelajs.co/api/v1';

//funcion que recibe la urlApi que queremos llamar y retorna a fetch, que no es mas que una promesa
function fetchData(urlApi){
    return fetch(urlApi);
}

//vamos a hacer la logica para hacer varios llamados, llamar nuevamente a ese fetch y traer nuevamente esa informacion consecuente de cada una de las peticiones que necesitamos

//para ellos hacemos el llamado multiple que aprendimos de callback hell

fetchData(`${API}/products`)
//el primer then es para que me permita transformar lo que estamos recibiendo a un objeto
    .then(response=>response.json())
    .then(products=>{
        console.log(products);
        //aqui quiero llamar a un producto en particular, el primero
        return fetchData(`${API}/products/${products[0].id}`)
    })
    //aqui volvemos a transformar lo que recibo en objeto json
    .then(response=>response.json())
    .then(product=>{
        console.log(product.title);
        //aqui queremos acceder a la categoria que tiene ese producto
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response=>response.json())
    .then(category=>{
        console.log(category.name);
    })
    .catch(err=>console.log(err))
    .finally(()=>console.log('Finally'))