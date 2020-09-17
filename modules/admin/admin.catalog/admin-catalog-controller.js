const productInfo = require('./admin-catalog-model')


//api to register products
exports.registerProd = async (request,response)=>{
    console.log(request.body,"req34567890");
    try{
        userobj = {
          ...request.body,
        };
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

