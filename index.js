const express = require("express");
const bodyParser = require("body-parser");
const adminLoginRoute = require ('./modules/admin/admin-login/admin-login.routes')
const registerProdRoute = require ('./modules/admin/admin.catalog/admin-catalog-routes')

var cors = require ('cors')
require('./databaseConfig/db');


var app = express();


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
const port = process.env.PORT || 3001;  

app.use("/admin", adminLoginRoute);
app.use('/admin',registerProdRoute)
app.listen(port, () => {
    console.log("server is listening to port 3001");
  });