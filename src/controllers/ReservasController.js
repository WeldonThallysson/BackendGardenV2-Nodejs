const {Reservas: ServiceModel} = require('../models/Reservas');

const ReservasController = {

    create: async (req,res) => {
        try{
            const service = {
                idUnico: req.body.idUnico,
                mesa: req.body.mesa,
                horas: req.body.horas,
                data_format: req.body.data_format

            }   

            const response = await ServiceModel.create(service);

            res.status(201).json({response, message:"reserva criada com sucesso"})
        }catch(error){
            console.log(error)
        }
    },
    getAll: async (req,res) => {
        try{
           const services = await ServiceModel.find(req.id);

           res.json(services)
        } catch(error){
           console.log(error)
        }
    },

    get: async(req,res) => {
       try{ 
             const id = req.params.idUnico;
        
             const service = await ServiceModel.find(id);
           
         
             res.json(service);
       }catch(error){
        console.log(error)
       }
    },
    delete: async(req,res) => {
       try {
        const id = req.params.id
        
        const service = await ServiceModel.findById(id);

        if(!service){
            res.status(404).json({msg: "reserva não encontrada"})
            return;
        }

        const deletedService = await ServiceModel.findByIdAndDelete(id)
         res.status(200).json({deletedService,msg:"reserva cancelada com sucesso"});
       } catch(error){
         console.log(error)
       }
    }  
}

module.exports = ReservasController;