document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let ref = document.getElementById("ref").value;
    let productos = document.getElementById("productos").value;
    let cliente = document.getElementById("cliente").value;
    let total = parseFloat(document.getElementById("total").value);

    let obj = {
        ref: ref,
        productos: productos,
        cliente: cliente,
        total: total
    };
    console.log(obj)
    enviarDatos(obj);
});

async function enviarDatos(data) {
    try {
        let config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        };
        let peticion = await fetch('https://64f2031d0e1e60602d2492a7.mockapi.io/usuario1', config);
        let res = await peticion.json();
        console.log(res);
    } catch (error) {
        console.error(error);
    }
}

