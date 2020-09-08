var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll(".paciente");

for(var i =0; i <pacientes.length;i++){
    var paciente = pacientes[i];
    console.log(pacientes[i]);
    var tdAltura = paciente.querySelector(".info-altura");
var tdPeso = paciente.querySelector(".info-peso");
var tdImc = paciente.querySelector(".info-imc");


var altura = tdAltura.textContent;
var peso = tdPeso.textContent;

var alturaEhValida = true;
var pesoEhValido = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    tdPeso.textContent = "Peso inválido!";
    pesoEhValido = false;
    paciente.classList.add('paciente-invalido')

}

if (altura <= 0 || altura >= 3) {
    console.log("Altura inválida!");
    tdAltura.textContent = "Altura inválida!";
    alturaEhValida = false;
    paciente.classList.add('paciente-invalido')
}

if (alturaEhValida && pesoEhValido) {

    var imc = calculaImc (peso,altura);
    tdImc.textContent = imc;    
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
    paciente.classList.add('paciente-invalido')
}
}

function calculaImc(peso,altura){
    var imc  = 0;
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}