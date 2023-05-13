
const {Mesas: MesasModel} = require('../models/Mesas');


const MesasController = {
    
    create: async (req,res) => {
        try{
            const service = {
             
                id: req.body.id,
                mesas: req.body.mesas,
            }   

            const response = await MesasModel.create(service);

            res.status(201).json({response, message:"mesa criada com sucesso"})
        }catch(error){
            console.log(error)
        }
    },
    getAll: async (req,res) => {
        try{
           const services = await MesasModel.find(req.id);

           res.json(services)
        } catch(error){
           console.log(error)
        }
    },
}
module.exports = MesasController;