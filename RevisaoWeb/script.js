let Nome= document.getElementById('pnome').value;
let Sobrenome = document.getElementById('1pnome');
let Email= document.getElementById('pmail').value;
let Email2= document.getElementById('1pmail').value;
let Senha= document.getElementById('psenha').value;
let Senha2= document.getElementById('1psenha').value;
let Endereco= document.getElementById('pendereco').value;
let Cidade= document.getElementById('scity').value;
let Estado= document.getElementById('sestado').value;
let Nascimento= document.getElementById('nasci').value;
function enviar() {
    if (Nome=="") {
        alert("Preencha seu Nome")
        
    }
    if  (Email=="") {
        alert("Preencha o seu Email");
        
    }

   if (Senha=="") {
        alert("Coloque a sua Senha")
        
    }
   
    if (Endereco=="") {
    alert("Preencha seu Endereço")
   } 
}
function verificarEmail() {
    if (Email!=Email2) {
        alert("Campo Confirmar Email nao Confere")
        
    }
    
}
function verificarSenha() {
    if (Senha!=Senha2) {
        alert("Campo Confirmar Senha nao Confere")
        
    }
    
}