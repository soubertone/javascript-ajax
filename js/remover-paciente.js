var pacientes = document.querySelector("table")

pacientes.addEventListener('dblclick', function (e) {

    var paciente = e.target.parentNode;

    paciente.classList.add('remover');

    setTimeout(() => {
        paciente.remove();
    }, 500);
    
})