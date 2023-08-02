const form = document.getElementById("numeros");

let formEValido=false

function validaForm(){
    if(campoB>campoA){
        formEValido=true;

    }else{
        formEValido=false
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    const campoA = document.getElementById("campoA");
    const campoB= document.getElementById("campoB");
    const mensagemSucesso= `O número  <b>${campoB.value}</b> é maior que o número <b>${campoA.value}</b>`;
    const mensagemErro= `O primeiro número: <b>${campoA.value}</b> não pode ser maior que o segundo: <b>${campoA.value}</b>`;


    validaForm();
    if(!formEValido){
        const containerMensagemSucesso = document.querySelector('.MensagemDeSucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.sucess = 'block';

        campoA = " ";
        campoB = " ";
    }else{
        campoA.style.border = '1px solid red';
        document.querySelector('.MensagemDeErro').style.display='block';
       }
})
