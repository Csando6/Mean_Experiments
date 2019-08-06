const path = require('path');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const app = express();

const DIR = './uploads';
const date = new Date();

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req,file,cb) => {
    cb(null, file.fieldname + '-' + date.getFullYear()+date.getMonth()+date.getDate()+ '-' + Date.now() +  path.extname(file.originalname) );
  }
});

let upload = multer({storage: storage});

app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({extended: true}))

app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/api', function(req, res){
 res.end('file catcher example');
})

app.post('/api/upload', upload.single('photo'), function(req, res){
  if(!req.file){
    console.log("No file received");
    return res.send({
      success: false
    });
  } else{
    console.log('file received');
    return res.send({
      success: true
    })
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, '0.0.0.0', function(){
  console.log('Nodejs server is running in port '+ PORT);
})
