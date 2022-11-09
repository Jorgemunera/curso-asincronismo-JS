//En este desafío vas a conectarte a una API que no existe, por ende debes capturar el error haciendo uso de try/catch y lanzar un error con el mensaje API Not Found.

//La solución debería tener un input y output como los siguientes:
//Input

//await runCode();

//Output

//Error: API Not Found

async function runCode() {
    const url = 'https://domain-api-com';
    try {
      await fetch(url)
    } catch (error) {
      throw new Error('API Not Found');
    }
  }

await runCode()
