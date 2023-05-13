const mongoose = require("mongoose");

const {Schema} = mongoose;


const serviceSchema = new Schema({
      
    idUnico:{
        type: Schema.Types.ObjectId,
        ref:'Registro',
        required: true,
     },
     mesa: {
        type: String,
        required: true,
     },
     horas: {
        type: String,
        required: true,
     },
    data_format: {
        type: String,
        required:true,
       },
     
},{timestamps: true});

const Reservas = mongoose.model("Service",serviceSchema);

module.exports = {
    Reservas,
    serviceSchema
}