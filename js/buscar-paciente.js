var btn = document.querySelector("#buscar-pacientes");
var alertaError = document.querySelector("#alert-erro");
var alertaSuccess = document.querySelector("#alert-success");
var spinner = document.querySelector("#spinner-btn");

btn.addEventListener("click", () => {

    /* Loading */
    spinner.classList.remove('sr-only');
    btn.classList.add('sr-only');

    var xhr = new XMLHttpRequest;
    xhr.open('get', 'https://api-pacientes.herokuapp.com/pacientes');


    var paciente = document.createElement("tr");
    paciente.classList.add("paciente");

    xhr.addEventListener('load', () => {

        if(xhr.status == 200) {
            var pacientes = JSON.parse(xhr.responseText);
            pacientes.forEach(element => {
                const data = [
                    criarTD(element.nome, "info-nome"),
                    criarTD(element.peso, "info-peso"),
                    criarTD(element.altura, "info-altura"),
                    criarTD(element.gordura, "info-gordura"),
                    criarTD(element.imc, "info-imc"),
                ];
                criarPaciente(data);
            });
            alertaSuccess.classList.remove('sr-only');
        } else {
            btn.classList.remove('sr-only');
            alertaError.classList.remove('sr-only');
        }

        spinner.classList.add('sr-only');
        
    })

    xhr.send();
})