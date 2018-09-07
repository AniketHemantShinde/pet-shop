const Pet = require('../models/Pet')
/**
 * 
Mongoose models provide several static helper functions for CRUD operations. Each of these functions returns a mongoose Query object.

Model.deleteMany()
Model.deleteOne()
Model.find()
Model.findById()
Model.findByIdAndDelete()
Model.findByIdAndRemove()
Model.findByIdAndUpdate()
Model.findOne()
Model.findOneAndDelete()
Model.findOneAndRemove()
Model.findOneAndUpdate()
Model.replaceOne()
Model.updateMany()
Model.updateOne()
 */
exports.getAllPets = function (req, res) {
    Pet.find().exec(function (err, pets) {
        if (err) {
            throw err;
        }
        if (pets) {
            res.json({
                data: pets
            });
        }
        else {
            res.json({
                message: 'No Data',
            });
        }
    })

}

exports.postCreatePet = function (req, res) {
    console.log(req.body);
    var pet = new Pet({
        name : req.body.name
    })
    pet.save().then(function(newPet){
        res.json({
            data:req.body,
        })
    });
 
}
