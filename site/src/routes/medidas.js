var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idDados", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idDados", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})
router.get("/infos/:idDados", function (req, res) {
    medidaController.buscarinfos(req, res);
});
module.exports = router;