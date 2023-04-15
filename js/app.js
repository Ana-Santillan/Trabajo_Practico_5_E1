const minNumero = 1;
const maxNumero = 100;
let numeroGenerado;

function generarNumero() {
    numeroGenerado = Math.floor(Math.random() * (maxNumero - minNumero + 1)) + minNumero;
    console.log(`El número mágico es ${numeroGenerado}`);
    // Mostrar el formulario para ingresar el número
    document.getElementById("botonComenzar").style.display = "none";
    document.getElementById("juego").style.display = "block";
}
document.getElementById("botonComenzar").addEventListener("click", generarNumero);
document.getElementById("botonEnviar").addEventListener("click", function () {
    const numeroIngresado = parseInt(document.getElementById("inputUsuario").value);
    if (isNaN(numeroIngresado) || numeroIngresado < minNumero || numeroIngresado > maxNumero) {
        alert(`Ingresa un número entre ${minNumero} y ${maxNumero}.`);
    } else if (numeroIngresado === numeroGenerado) {
        alert("¡Felicitaciones! Adivinaste el número.");
        document.getElementById("juego").style.display = "none";
        document.getElementById("botonComenzar").style.display = "block";
    } else {
        alert("El número que ingresaste no es igual al número mágico.");
    }
});