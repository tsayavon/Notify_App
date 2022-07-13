// Require dependencies
const mongoose = require('mongoose');

// initialize a shortcut variable
const Schema = mongoose.Schema;

//define the schedma
const noteSchema = new Schema({ 
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    bookmarked: Boolean
}, { timestamps: true});

// export the model to be used within our controller

module.exports = mongoose.model('Note', noteSchema);

/*
    Model === Note

    The Model is nothing more than 
    a special object with methods
    that allow us to perform 
    CRUD on a specific collection
    within a databse.

    The model can convert
    a standard JavaScript onbject into a 
    document in MongoDB database collection

    This is why mongooge is referred to as an ODM
    
    Model.create()
    Model.findById()
    Model.FindbyIdAndDelete()
    Model.deletMany()
    Model.findById()
    Model.FindbyIdAndDelete()
    Model.findByIdUpdate()
    Model.findById()
    Model.FindbyIdAndDelete()
    Model.findByIdAndModify()
    Model.findById()
    Model.FindByIdAndDelete()
    Model.findByIdAndRemove()
*/