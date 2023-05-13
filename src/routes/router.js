const router = require('express').Router();

const servicesRouter = require("./Reservas");
const mesasRouter = require("./Mesas")
const register = require("./Register")

router.use('/', servicesRouter);
router.use('/',mesasRouter);
router.use('/',register)
module.exports = router;