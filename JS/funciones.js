function mostrarAlerta() {
    alert("Gracias por visitar nuestra clínica de terapia. ¡Estamos para ayudarte!");
    console.inf("ejemplo de funcion"); 
}
funcion suma (){
    let valor1=5;
    let valor2=10;
    let resultado = valor1+valor2;
    console.inf("El resultado de la suma es: "+resultado);
}
function suma(valor1,valor2){
    console.info("El valor 1: "+valor1);
    console.info("El valor 2: "+valor2);
}
funtion sumaInput(){
    let val1 = document.getElementById('val1').value;
    let val2 = document.getElementById('val2').value;
    let res = val1+val2;
    console.info ("El resulado de la suma es: +res");
    if(res>10){
        document.getElementById("Mensaje").value="numero mayor a 10";
    }else{
        document.getElementById("Mensaje").value="numero menor";
    }
}
