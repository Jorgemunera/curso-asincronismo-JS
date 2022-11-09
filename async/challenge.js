import fetch from "node-fetch";
const API='https://api.escuelajs.co/api/v1';

//vamos a crear nuestra funcion de fetchData la cual utiliza la API para retornarnos la informacion y la convertimos en un objeto

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data= await response.json();
    return data;
}

//ahora hacemos funcion para hacer la solicitud a un producto en particular y a la categoria de este para mostrarlo en consola, y utilizaremos try catch para manejar errores en las funciones asincronas

const anotherFunction= async(urlApi)=>{
    try{
        const products= await fetchData(`${urlApi}/products`);
        const product= await fetchData(`${urlApi}/products/${products[0].id}`);
        const category= await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);

    }catch(error){
        console.log(error);
    }
}

anotherFunction(API)