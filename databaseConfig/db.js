const mongoose = require("mongoose");
mongoose.connect(
   "mongodb+srv://sandeep:CaB7ZYjWJtQ9dxSO@cluster0.72jv6.mongodb.net/productCatalog?retryWrites=true&w=majority",
  err => {
    if (!err) {
      console.log("connection successful.You may proceed");
    } else {
      console.log("soory!you are not connected to database");
    }
  },
  { useNewUrlParser: true }
)