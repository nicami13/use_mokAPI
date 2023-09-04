document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let ref = document.getElementById("ref").value;
    let productos = document.getElementById("productos").value;
    let cliente = document.getElementById("cliente").value;

    let obj = {
        identificador: ref,
        nombre: productos,
        apellido: cliente
    };
    enviarDatos(obj);
});

async function enviarDatos(data) {
    try {
        let config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        };
        let peticion = await fetch('https://64f64cd42b07270f705e5fb7.mockapi.io/cliente', config);
        let res = await peticion.json();
        console.log(res);
    } catch (error) {
        console.error(error);
    }
}

async function obtenerObjetos() {
    try {
      // Realiza una solicitud GET al servidor para obtener objetos
      const response = await fetch('https://64f64cd42b07270f705e5fb7.mockapi.io/cliente');
  
      // Verifica si la respuesta es exitosa (código de estado HTTP 200-299)
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
  
      // Analiza el cuerpo de la respuesta como JSON y almacena los objetos en una variable
      const objetos = await response.json();
  
      // Procesa los objetos obtenidos de la respuesta
      console.log(objetos);
    } catch (error) {
      // Maneja cualquier error que ocurra durante la solicitud o el análisis JSON
      console.error(error);
    }
  }
  
  // Llama al método para obtener objetos del servidor
  obtenerObjetos();
  