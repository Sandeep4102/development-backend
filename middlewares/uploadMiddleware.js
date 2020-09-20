const crypto = require("crypto");
var multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
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

// Create storage engine

const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    var username = req.body.partNumber;
    console.log(username,"354678");
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);

        const fileInfo = {
          filename: filename,
          metadata: username,
          bucketName: "uploads"
        };
        resolve(fileInfo);
      });
    });
  }
});
//upload function to be used to save image to DB
const upload = multer({ storage });

//init app

module.exports = upload;
