const productInfo = require('./admin-catalog-model')

const Grid = require("gridfs-stream");
const path = require("path");

var mongoose = require("mongoose");
const mongoURI = "mongodb+srv://sandeep:CaB7ZYjWJtQ9dxSO@cluster0.72jv6.mongodb.net/productCatalog?retryWrites=true&w=majority";

// Create Mongo Connection
const conn = mongoose.createConnection(mongoURI, { useNewUrlParser: true });

// Init gfs
let gfs;

conn.once("open", () => {
  // Init Stream
  gfs = Grid(conn.db, mongoose.mongo);

  gfs.collection("uploads");
});



//api to register products
exports.registerProd = async (request,response)=>{
    console.log(request.body,"req34567890");
    try{
        userobj = {
          ...request.body,
          img : request.file.filename
        };
        console.log(userobj,"userobj")
        var user = new productInfo(userobj);
        var result = await user.save();
        // Register.save({ email });
        response.json(result);
    
        console.log(result,"Result");
    }
    catch(error){
     console.log(error,"error456789");
    }
}
    //api to get data
    exports.getProduct = async (req,res)=>{
        try{
            
           var result = await productInfo.find({},(err,doc)=>{
               
            console.log(doc,"doc"); 
            })
            res.send({docs:result})
        }
        catch(error){
         console.log(error,"error456789");
        }
    }

    exports.image = async (req, res) => {
        var user = req.params.id;
      
        gfs.files.findOne({ filename: user }, function(err, file) {
          if (!file || file.length === 0) {
            return res.status(404).json({ err: "No file exist" });
          }
          // check if image
          if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
            // Read output to browser
            var readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
          } else {
            return res.status(404).json({ err: "Not an image" });
          }
          var dataLength = 0;
          // using a readStream that we created already
          readstream
            .on("data", function(chunk) {
              dataLength += chunk.length;
            })
            .on("end", function() {
              // done
              console.log("The length was:", dataLength);
            });
            
        });
      }

      exports.deleteProduct = async (req,res)=>{
        try{  

          console.log(req.params.id,"56t7y8");
            productInfo.deleteOne({ _id: req.params.id }, function(err, result) {
              if (err) {
                res.send(err);
              } else {
                res.send(result);
                console.log(result);
              }
            });
    
          
        }
        catch(error){
         console.log(error,"error456789");
        }
    }

  
