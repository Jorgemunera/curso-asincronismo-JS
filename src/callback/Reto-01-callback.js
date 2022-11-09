//En este desafío tienes que crear una función que reciba un callback pero este tiene que ser ejecutado 2s despues.
//Nota: Debes usar la función setTimeout con el namespace window para poder monitorear su uso en la ejecución de pruebas, ejemplo: window.setTimeout(() => {
  // code})

function runCode(callback) {
   window.setTimeout(()=>{
        callback()
   }, 2000)
}

runCode(()=>console.log('despues de 2 seg'))