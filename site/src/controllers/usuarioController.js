var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var telefone = req.body.telefoneServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var formulario = req.body.formularioServer;
    
    
    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, telefone, email, senha, formulario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function salvar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var ouvir = req.body.ouvirServer;
    var frequencia = req.body.frequenciaServer;
    var tipo = req.body.tipoServer;
    var hora = req.body.horaServer;
    
    // Faça as validações dos valores
    if (ouvir == undefined) {
        res.status(400).send("Se costuma ouvir música está undefined!");
    } else if (frequencia == undefined) {
        res.status(400).send("A frequência que escuta música está undefined!");
    } else if (tipo == undefined) {
        res.status(400).send("Seu tipo de música está undefined!");
    } else if (hora == undefined) {
        res.status(400).send("A hora que passa ouvindo música está undefined!");
    } else{
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.salvar(ouvir, frequencia, tipo, hora)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o formulário! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



function preservar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var musica = req.body.musicaServer;
    
    // Faça as validações dos valores
  /*  if (ouvir == undefined) {
        res.status(400).send("Se costuma ouvir música está undefined!");
    } else if (frequencia == undefined) {
        res.status(400).send("A frequência que escuta música está undefined!");
    } else if (tipo == undefined) {
        res.status(400).send("Seu tipo de música está undefined!");
    } else if (hora == undefined) {
        res.status(400).send("A hora que passa ouvindo música está undefined!");
    } else{ */
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.preservar(musica)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

function memorizar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var cantor = req.body.cantorServer;
    
    // Faça as validações dos valores
   /* if (ouvir == undefined) {
        res.status(400).send("Se costuma ouvir música está undefined!");
    } else if (frequencia == undefined) {
        res.status(400).send("A frequência que escuta música está undefined!");
    } else if (tipo == undefined) {
        res.status(400).send("Seu tipo de música está undefined!");
    } else if (hora == undefined) {
        res.status(400).send("A hora que passa ouvindo música está undefined!");
    } else{ */
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.memorizar(cantor)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }






function obterdadosformulario(req, res) {

    var idUsuario = req.params.idSession;

    usuarioModel.obterdadosformulario(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas informações.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

    
module.exports = {
    entrar,
    cadastrar,
    salvar,
    preservar,
    memorizar,
    obterdadosformulario,
    listar,
    testar
}