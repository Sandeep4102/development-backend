const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productInfo = new schema({
     partNumber : {
         type:String,
         required:true
     },
     dimensions :{
         type:String,
         required:true
      },
      weight : {
        type:String,
        required:true
    },
    typeOfProd :{
        type:String,
        required:true
     },
     description : {
        type:String,
        required:true
    }
    })

module.exports = mongoose.model('productDetails', productInfo);
