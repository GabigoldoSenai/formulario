


function validarFormulario(){
    const nome = document.querySelector('#nome')
    const email = document.querySelector('#email')
    const senha = document.querySelector('#senha')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!emailRegex.test(email)){
        alert("ta errado o e-mail")
    }

    if(nome.value === '' || nome.length < 3 || isFinite(nome)){
        alert("Insira um nome válido (mín: 3 letras)")
    
    }else if(email.value === ''){
        alert("Insira um e-mail válido")
    
    }else if(senha.value === '' || senha.length < 8){
        alert("Insira uma senha válida")
    
    }else{
        alert("Cadastrado com sucesso!")
    }



}