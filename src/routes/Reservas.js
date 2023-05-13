const router = require('express').Router();


const ReservasController = require('../controllers/ReservasController');

router.route('/services').post((req,res) => ReservasController.create(req,res));
router.route('/services').get((req,res) => ReservasController.getAll(req,res));
router.route('/services/:id').get((req,res) =>  ReservasController.get(req,res))
router.route('/services/:id').delete((req,res) =>  ReservasController.delete(req,res))
module.exports = router;