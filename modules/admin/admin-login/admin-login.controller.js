
const adminLoginSchema = require ('./admin.login.model')


//seeding api
exports.adminLogin = async (req,res)=>{
    console.log(req.body,"req34567890");
    try{
         adminLoginSchema.create(req.body)
         res.send("success")
    }
    catch(error){
     console.log(error,"error456789");
    }
}

//api to check admin creds
exports.checkLogin = async (req,res)=>{
    console.log(req.body,"req34567890");
    try{
       var result = adminLoginSchema.findOne({email : req.body.email},(err,doc)=>{
            if(err){
                res.status(404)
            }
            if(doc.email === req.body.email && doc.password === req.body.password)
            {
                console.log(doc,"Data from query");
                res.status(200).send({message:"success",status:200})

            }
            else{
                res.send("wrong credentials")
            }
        })
        // console.log(result,"Result");
    }
    catch(error){
     console.log(error,"error456789");
    }
}

