const res = document.getElementById("Resultado");


function muestraCalificacion(){
    const nota = document.getElementById("inputNota").value;
    if (nota>= 0 & nota <=3){
        console.log("Muy deficiente");
        var calificacion = "Muy deficiente";
    }
    else if (nota> 3 & nota <=5)
    {
        res.innerText= "Tu calificación es: Deficiente";
        
    }
    else if (nota> 5 & nota <=6)
    {
        res.innerText= "Tu calificación es: Suficiente";
    }
    else if (nota> 6 & nota <=7)
    {
        res.innerText= "Tu calificación es: Bien";
    }
    else if (nota> 7 & nota <=9)
    {
        res.innerText= "Tu calificación es: Notable";
    }
    else if (nota> 9 & nota <=10)
    {
        res.innerText= "Tu calificación es: Sobresaliente";
    }
    else{
        res.innerText ="Por favor, solo ingrese valores entre 0 y 10";
    }
}


