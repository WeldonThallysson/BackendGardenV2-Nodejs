const router = require('express').Router();

const MesasController = require('../controllers/MesasController');

router.route('/mesas').post((req,res) => MesasController.create(req,res));
router.route('/mesas').get((req,res) => MesasController.getAll(req,res));
module.exports = router;