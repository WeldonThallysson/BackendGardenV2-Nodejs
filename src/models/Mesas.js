const mongoose = require("mongoose");

const {Schema} = mongoose;



const serviceSchema = new Schema({
   
   id: {
       type: Number,
       required:true, 
   },
   mesas:{
      type: String,
      required: true,
  }
 
  
 
});


const Mesas = mongoose.model("Mesas",serviceSchema);

module.exports = {Mesas,serviceSchema};