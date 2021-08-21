var submit = document.querySelector('#adicionar-paciente');

submit.addEventListener("click", function (event) {
    event.preventDefault(); //Não executa o redirecionamento de submit
    
    var form = document.querySelector("#form-adiciona");

    if(validate(form)) {
        const data = [
            criarTD(form.nome.value, "info-nome"),
            criarTD(form.peso.value, "info-peso"),
            criarTD(form.altura.value, "info-altura"),
            criarTD(form.gordura.value, "info-gordura"),
            criarTD(calculaIMC(paciente, form.peso.value, form.altura.value), "info-imc"),
        ];
        criarPaciente(data);
        form.reset();
    }

});

function criarPaciente(data) {
    var paciente = document.createElement("tr");
    paciente.classList.add("paciente");

    data.forEach(element => {
        paciente.appendChild(element); 
    });
    
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(paciente);
}

function criarTD(valor, classe) {
    var td = document.createElement('td');
    td.textContent = valor;
    td.classList.add(classe);
    return td;
}

function validate(form) {
    var list = document.querySelector("#errors")
    if(form.nome.value.length < 4) list.textContent = "Campo 'Nome' inválido. (Mínimo 3 caracteres)";
    if(form.peso.value < 0) list.textContent += "/ Campo 'Peso' inválido.";
    if(form.altura.value < 0) list.textContent += "/ Campo 'Altura' inválido.";
    if(form.gordura.value < 0) list.textContent += "/ Campo 'Gordura' inválido.";

    if(list.textContent.length > 0) {
        return false;
    }

    return true;
}