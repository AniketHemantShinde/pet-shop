const mongoose = require('mongoose');

const petSchema=new mongoose.Schema({
    name:String,
    breed:String,
    age:Number
})

/**
 * The following are all the valid SchemaTypes in mongoose.
        String
        Number
        Date
        Buffer
        Boolean
        Mixed
        ObjectId
        Array
        Decimal128
        Map
 * 
 * 
 * 
 */
//creating a mongoose model using the schema created above
//the first parameter in the function model is the name of the collection in mongodb in singular form and mongoose will create collection in mongodb in the pural form
 //mongoose.model('Pet',petSchema);

 module.exports= mongoose.model('Pet',petSchema);