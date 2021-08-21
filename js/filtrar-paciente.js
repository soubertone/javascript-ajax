var search = document.querySelector("#search");

search.addEventListener("input", function () {

    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0) {
        for (let i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, 'i');
            if(!expressao.test(nome)) {
                paciente.classList.add("sr-only");
            } else {
                paciente.classList.remove("sr-only");
            }
        }
    } else {
        for (let i = 0; i < pacientes.length; i++) {
            const paciente = pacientes[i];
            paciente.classList.remove("sr-only");
        }
    }
    
});