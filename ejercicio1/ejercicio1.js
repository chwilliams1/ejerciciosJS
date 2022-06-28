//Le da funcion al boton comprobar Edad
function comprobarEdad()
{
    //Crea la constante de acuero a lo que ingresa el usuario
    const edad = document.getElementById("InputEdad").value;

    //SI edad es mayor a 18
    if (edad >=18)
    {
        //Imprimir en fin si puede conducir
        fin.innerText = "Tu edad es de "+edad+", puedes conducir.";
        }
    else{
        fin.innerText = "No eres mayor de edad, por lo tanto no puedes conducir";
    }
}
//llevar el resultado al document
const fin = document.getElementById("Fin");