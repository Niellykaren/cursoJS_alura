var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);
    
    var erro = validaPaciente(paciente);



if(erros.length>0) {
    var mensagemErro = document.querySelector('mensagem-erro');
    exibeMensagensDeErro(erros)
    return;
}
    

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagemDeErro = document.querySelector('mensagem-erro');
    mensagemDeErro.innerHTML = '';
});

function exibeMensagensDeErro(erros){
    var ul = document.querySelector('mensagem-erro');
    ul.innerHTML = '';
    erros.forEach(function(erro){
        var li = document.querySelector('li');
        li.textContent = erro;
        ul.appendChild(li);
        
    });
}


function obtemPacienteDoFormulario(form){
    var paciente = {
    
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente
}

function montaTr(paciente){
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    // var nomeTd = montaTd(paciente.nome, 'info-nome');
    // var pesoTd = montaTd(paciente.peso, 'info-peso');
    // var alturaTd = montaTd(paciente.altura, 'info-altura');
    // var gorduraTd = montaTd(paciente.gordura, 'info-gordura');
    // var imcTd = montaTd(paciente.imc, 'info-imc');

    //  pacienteTr.appendChild(nomeTd);
    //  pacienteTr.appendChild(pesoTd);
    //  pacienteTr.appendChild(alturaTd);
    //  pacienteTr.appendChild(gorduraTd);
    //  pacienteTr.appendChild(imcTd);

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

function montaTd(dado,classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente (paciente){

    var erros = [];
    if(paciente.nome.length ==0) {
        erros.push('Insira um nome')
    }
    if(!validaPeso(paciente.peso)) {
        erros.push('Peso inválido');}
    if(!validaAltura(paciente.altura)){

     erros.push('Altura inválida');}

     if (paciente.gordura.length == 0){
         erros.push('Insira a % de gordura');
     }

     if (paciente.altura.length == 0){
        erros.push('Insira altura');
    }
    if (paciente.Peso.length == 0){
        erros.push('Insira o Peso');
    }
    return erros;

}