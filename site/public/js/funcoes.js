// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);

        // finalizarAguardar();
    } else {
        window.location = "pagina_login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    //var divAguardar = document.getElementById("div_aguardar");
    //divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    //var divAguardar = document.getElementById("div_aguardar");
    //divAguardar.style.display = "none";
    /*
    var divErrosLogin = document.getElementById("mensagem");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    } */
}

function limparFormulario(){
    input_nome.innerHTML=""
    input_email.innerHTML=""
    input_telefone.innerHTML=""
    input_senha.innerHTML=""
}

// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

function calculo(){
    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")
        
    if (resposta.ok) {
        console.log(resposta);
        
        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));
               
            
            //console.log(sessionStorage.ADM)
            setTimeout(function () {
                window.location = "formulario.html";
            }, 1000); // apenas para exibir o loading

        });
        
    } else {
        
        console.log("Houve um erro ao tentar realizar o login!");
        
        resposta.text().then(texto => {
            console.error(texto);
            finalizarAguardar(texto);
        });
    }
    
}).catch(function (erro) {
    console.log(erro);
})

return false;
}
