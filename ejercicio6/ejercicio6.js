let mult = [2,3,4,5,6,7,2,3];
const fin = document.getElementById("Fin");
const guin = ["-"];

function calcular(){
    const rut = parseInt(document.getElementById("InputRut").value);
    if (rut >0 & rut < 100000000 )
    {
        let rutInv = inverseArray(rut);
        let arrayMult = multiplicacion(rutInv,mult);
        let sumaLista = sumaArray(arrayMult);
        let digVerificador = 11 - (sumaLista - (11*(parseInt(sumaLista/11))));
        if (digVerificador == 11){
            digVerificador = 0;
        }
        else if(digVerificador ==10){
            digVerificador = "K";
        }
        else{
            digVerificador = digVerificador;
        }
        fin.innerText = "Excelente tu rut con verificador es: "+rut+ "-"+digVerificador;
       
    }
    else{
        fin.innerText = "Ingrese un rut valido, sin digito verificador"
    }

  

}

function inverseArray(n){
    n = String(n);
    let array = [];
    for(let i = n.length-1;i >=0 ; i--){
        array.push(parseInt(n[i]));
    }
    return array;
}

function multiplicacion(arrayA,arrayB){
    let arrayC = [];
    for(let i=0; i <arrayA.length; i++){
        let c = arrayA[i] * arrayB[i];
        arrayC.push(c);
    }
    return(arrayC);
}

function sumaArray(array){
    let suma = 0;
    for (let i=0; i <array.length; i++){
        suma = suma + array[i];
        
    }
    return suma;
}
