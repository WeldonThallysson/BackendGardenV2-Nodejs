const router = require('express').Router();

const RegisterController = require('../controllers/RegisterController');

router.route('/register').post((req,res) => RegisterController.create(req,res));
router.route('/register').get((req,res) => RegisterController.getAll(req,res));
router.route('/register/auth').get((req,res) => RegisterController.login(req,res));
router.route('/register/:id').get((req,res) =>  RegisterController.get(req,res));
module.exports = router;

  /*  const {name,email,password} =  req.body;
    
    if(!name) {
        return res.status(422).json({msg: "nome é obrigatorio"})
    }
    if(!email) {
        return res.status(422).json({msg: "email é obrigatorio"})
    }
    if(!password) {
        return res.status(422).json({msg: "password é obrigatorio"})
    }

    const userExists = await User.findOne({email:email})

    if(userExists){
        return res.status(422).json({msg: "por favor utilize outro email"})
    }
    
    const user = new User({
        name,
        email,
        password
    })
    try{
         await user.save()
         res.status(201).json({msg:'conta criada com sucesso'});
    }catch(error){
        res.status(500).json({msg:error})
    }*/