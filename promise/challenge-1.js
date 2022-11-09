//para poder trabajar con fetch dentro de node, debemos instalar un recurso dentro de la terminal

import fetch from 'node-fetch';

//traemos nuestra API
const API= 'https://api.escuelajs.co/api/v1';

//funcion que recibe la urlApi que queremos llamar y retorna a fetch, que no es mas que una promesa
function fetchData(urlApi){
    return fetch(urlApi);
}

//realizamos el llamado a la direccion especifica en la API, PRODUCTS
fetchData(`${API}/products`)
//para saber que traemos en como respuesta y tranformar la informacion del primer llamado a un objeto json
    .then(response=>response.json())
//ahora queremos mostrarlo para saber que tiene
    .then(products=>{
        console.log(products);
    })
    .then(()=>{
        console.log('hola');
    })
    .catch((error)=>{
        console.log(error);
    })

//aqui ya tenemos todo el llamado de nuestra promesa, que hemos creado pero que no hemos utilizado como la sintaxis de una promesa, esto es porque ya fetch por defecto es una promesa

//Nota:todos estos elementos no funcionarian de esta forma dentro del navegador ya que no tendriamos que hacer el import de fetch ya que este ya esta disponible dentro del navegador, pero como no estamos probando nuestro codigo en el navegador sino  en nuestra pc, hay que utilizar estas referencias