var title = document.querySelector("#title")
title.textContent = "Aparecida Nutricionista";

/* Calcula IMC */

var pacientes = document.querySelectorAll(".paciente");

function calculaIMC (paciente, peso, altura) {

    if((peso < 0 || peso > 1000) || (altura < 0 || altura > 3.00)) {
        paciente.classList.add('paciente-invalido');
        return "#ERRO#";
    }
    var calculaIMC = (peso / (altura * altura)).toFixed(2)

    return calculaIMC;
}

for(var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var imc = paciente.querySelector(".info-imc");

    imc.textContent = calculaIMC(paciente, peso, altura);
}

/* Fim Calcula IMC */