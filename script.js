var Segundotexto = false;
var Operador = "";

function Sumar() {
    Segundotexto = true;
    Operador = "+";
}
function Restar() {
    Segundotexto = true;
    Operador = "-";
}
function Multiplicar() {
    Segundotexto = true;
    Operador = "*";
}
function Dividir() {
    Segundotexto = true;
    Operador = "/";
}
function Escribir(numBoton) {
    if (!Segundotexto) {
        txtNum1.value += numBoton;
    }
    if (Segundotexto) {
        txtNum2.value += numBoton;
    }
}
function Operacion() {
    switch (Operador) {
        case "+":
            alert("El resultado es = " + (Number(txtNum1.value) + Number(txtNum2.value)));
            break;
        case "-":
            alert("El resultado es = " + (Number(txtNum1.value) - Number(txtNum2.value)));
            break;
        case "*":
            alert("El resultado es = " + (Number(txtNum1.value) * Number(txtNum2.value)));
            break;
        case "/":
            alert("El resultado es = " + (Number(txtNum1.value) / Number(txtNum2.value)));
            break;
        default:
            break;
    }
}
function Borrar() {
    txtNum1.value = "";
    txtNum2.value = "";
    Segundotexto = false;
    Operador = "";
}