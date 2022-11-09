const XMLHttpRequest= require('xmlhttprequest').XMLHttpRequest;
const API ='https://api.escuelajs.co/api/v1';

//crear funcion, para recibir url y el callback para recibir la solicitud que nos esta entregando el llamado a esta API
function fetchData(urlApi, callback){
    let xhttp= new XMLHttpRequest();

    //ahora vamos a trabajar con los elementos que me entrega de una forma mas amigable
    xhttp.open('GET', urlApi, true);//vamos hacer un open para abrir una conexion a nuestra API, el primer elemento es el tipo de peticion que haremos, el segundo la url que vamos a utilizar, y despues el valor de true para habilitarlo
    xhttp.onreadystatechange= function(event){//en este caso es parte de los elementos que me entrega este recurso de xmlhttprequest para erscuchar diferentes estados que tiene la solicitud y con esto saber cuando esta disponible la informacion, 
        if(xhttp.readyState === 4){//aqui validamos el estado
            //0: no se ha inicializado
            //1: loading, no se ha ejecutado el valor de send
            //2: cuando ya se ejecuto el valor de send
            //3: interactuamos, se esta descargando o trabajando con la solicitud
            //4: cuando se ha completado la llamada
            if(xhttp.status === 200){//el estatus tambien queremos validarlo, 200 es que la solicitud ha sido correcta
                //hay una serie de elementos que nos ayudan a entender los tipos de solicitudes que tenemos dentro de un servidor y los status que retorna, (200,300,400,500)
                callback(null, JSON.parse(xhttp.responseText));//aqui utilizamos nuestro callback para pasarle 2 valores, el primero sera un valor null, y el segundo elemento sera una transformacion de la informacion, por lo tanto utilizamos JSON.parse, porque dentro de xhttp.responseText, vamos a recibir lo que me entrega el servidor
            }else{//else para hacer logica, para el manejo de la informacion cuando tengamos un error, que en este caso particular fue en un elemento de la API
                const error= new Error('Error' + urlApi)
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(`${API}/products`, function(error1,data1){
    if(error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function(error2,data2){
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category.id}`, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});