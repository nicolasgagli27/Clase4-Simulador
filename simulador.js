
function calcularIntereses (monto, cuotas){
    let interes;

    if (cuotas == 3){
        interes = monto * 0.10;
        return interes; 
    }

    else if (cuotas == 6){
        interes = monto * 0.25;
        return interes; 
    }

    else if (cuotas == 12){
        interes = monto * 0.50;
        return interes; 
    }


}

function iva (monto){
    monto = monto * 0.21;
    return monto;
}


let monto = parseInt(prompt ("Ingrese el monto"));
let cuotas = prompt ("Ingresa las cuotas: 3 - 6 - 12 ");


let precioTotal = monto + calcularIntereses (monto, cuotas) + iva (monto);

alert (precioTotal);


let producto = prompt ("Que necesita?");
let carrito;

while (producto != ""){
    carrito = producto;

}