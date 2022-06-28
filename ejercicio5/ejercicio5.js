var lista =["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
const fin = document.getElementById("Fin");

function calcular(){
    const rut = parseInt(document.getElementById("InputRut").value);

    if (rut>0 & rut <=99999999){
        const resto = rut%23;
        console.log(resto);
        console.log(lista[resto]);
        fin.innerText = "Su letra del DNI es: "+ lista[resto];
    }
    else{
        fin.innerText = "Por favor, ingrese un rut valido";
    }
}