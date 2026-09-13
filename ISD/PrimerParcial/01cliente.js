const API_URL = "https://proyectobackcecyt9.onrender.com";

async function main() {

    console.log("Cliente Petición Get -> a ${API_URL}/api/talleres");

    const inicio = Date.now();
    const respuesta = await fetch(`${API_URL}/api/talleres`);
    const duracionMs = Date.now() - inicio;
    const cuerpo = await respuesta.json();

    console.log("Ciclo de petición - respuesta");
    console.log("Protocolo HTTPS sobre TCP : ${respuesta.url}");
    console.log("Status de recibido: ${respuesta.status} ${respuesta.statusText}");
    console.log("Tiempo de ida y vuelta (RTT): ${duracionMs} ms");
    console.log(JSON.stringify(cuerpo, null, 2));
}