var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});
router.post("/salvar", function (req, res) {
    usuarioController.salvar(req, res);
});

router.post("/preservar", function (req, res) {
    usuarioController.preservar(req, res);

});
router.post("/memorizar", function (req, res) {
    usuarioController.memorizar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get("/dadosformulario/:idSession", function (req, res) {
    usuarioController.obterdadosformulario(req, res);
})

module.exports = router;