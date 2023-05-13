const mongoose = require('mongoose')
const {Schema} = mongoose;

const serviceSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type:String,
        required:true
    },

},{timestamps: true});


const Register = mongoose.model("Registro",serviceSchema);

module.exports = {
    Register,
    serviceSchema
}
