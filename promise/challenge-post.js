import fetch from 'node-fetch';
const API='https://api.escuelajs.co/api/v1';

//funcion para hacer el POST a la API, que se encarga de utilizar fetch y transformarlo a el llamado del metodo post con las configuraciones minimas que podemos agregar
function postData(urlApi, data){
    const response=fetch(urlApi,{
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response;
}

//vemos en la fake API la estructura para hacer POST, la copiamos y la pegamos de acuerdo al producto que queremos
const data={
        "title": "New Product Course",
        "price": 9999,
        "description": "A description",
        "categoryId": 1,
        "images": ["https://placeimg.com/640/480/any"]
}

//ahora hacemos el uso de nuestra funcion
postData(`${API}/products`, data)
    //ahora quiero ver que me responda, que me responde el servidor cuando sucede de forma correcta almacenar el producto, primero lo convertimos en objeto json y despues que me lo muestre
    .then(response=>response.json())
    .then(data=>console.log(data))