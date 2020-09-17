const mongoose = require('mongoose');
const schema = mongoose.Schema;

const adminLoginSchema = new schema({
     email : {
         type:String,
         required:true
     },
     password :{
         type:String,
         required:true
      },
    })

module.exports = mongoose.model('adminLoginCollection', adminLoginSchema);
