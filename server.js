const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 

const petController = require('./controllers/pet');

mongoose.connect('mongodb://localhost:27017/petShop');
mongoose.connection.on('error',function(){
    console.log('error in mongo connection');
})
mongoose.connection.on('open',function(){
    console.log('connected to mongo');
})

//created express server object
const app = express();
//server object is now using body-parser json properties which will enable the express server to parse body element inside post,put,del,patch...into json format
app.use(bodyParser.json())
//server object is now using  body-parser url encoded bodies and only looks at request where contentb type header matches the type option 
app.use(bodyParser.urlencoded(
    {
        extended: true
    }
))
//for more detail check www.npmjs.com/package/body-parser

app.get('/',function(req,res){
    res.send('Hello World');
});

app.get('/api/pets',petController.getAllPets);
app.post('/api/pets',petController.postCreatePet);

//setting a express variable called port
app.set('port',3000);
//listing to a port from the express variable port 
app.listen(app.get('port'),function(){
    console.log('the server is working');
})