const mongoose = require('mongoose');


async function main(){


 

       try{
   
           await mongoose.connect('mongodb+srv://weldon:weldon@cluster0.rygwlj9.mongodb.net/?retryWrites=true&w=majority')
           console.log('Conectado com o banco');
       }catch(error){
        console.log(error);
       }
}

module.exports = main;