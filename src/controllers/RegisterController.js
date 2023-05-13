const {Register: UserModel} = require('../models/User');
const jwt = require('jsonwebtoken')
const RegisterController = {
   
    create: async (req,res) => {
        try{
            const service = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            }   

            const response = await UserModel.create(service);

            res.status(201).json({response, message:"Conta Criada com sucesso"})
        }catch(error){
            console.log(error)
        }
    },
    getAll: async (req,res) => {
        try{
           const services = await UserModel.find(req.id);

           res.json(services)
        } catch(error){
           console.log(error)
        }
    },
    get: async(req,res) => {
        try{
              const id = req.params.id;
              const service = await UserModel.findById(id);
 
              res.json(service);
        }catch(error){
         console.log(error)
        }
     },
     login: async (req, res) => {
        const logar = {
          email: req.query.email,
          password: req.query.password,
        
        };
        
        const usuario = await UserModel.findOne(logar);
        if (!usuario) {
          return res.status(422).json({ msg: "usuário não encontrado" });
        }
      
        try {
          const secret = process.env.SECRET;
          const token = jwt.sign({ id: usuario.id }, secret);
          return res.status(200).json({msg: 'login realizado com sucesso',id: usuario._id, token, name: usuario.name});
        } catch (err) {
          console.log(err);
        }
      }
}

module.exports = RegisterController;


