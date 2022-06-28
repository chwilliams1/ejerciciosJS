
var  suma = 0;
const fin = document.getElementById("Fin");
function sumar(){
    const numero = parseInt(document.getElementById("InputNumber").value);
    suma = suma + numero;
    fin.innerText = suma;
    document.getElementById("InputNumber").value = "";
}

function finalizar(){
    fin.innerText ="Felicidades, tu suma total es: " + suma;


}