var resultado = "";
const fin = document.getElementById("Fin");

function añadirTexto(){
    const texto = document.getElementById("InputTexto").value;
    if (resultado == "")
    {
        resultado = resultado + texto;
        
    }
    else
    {
        resultado = resultado + "-" + texto;
        
    }
    document.getElementById("InputTexto").value = "";
}

function finalizarTodo(){
    console.log(resultado);
    fin.innerText = resultado;
}
