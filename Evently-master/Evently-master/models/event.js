const mongoose = require('mongoose');


const memberSchema = new mongoose.Schema({ 
    name: {
        type: String            
    },
    email: {
        type: String
    }
 });

 const locationSchema = new mongoose.Schema({ 
    type: {
        type: String            
    },    
    details: {
        type: String
    }
 });

const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },    
    duration: { 
        type: Number,
        required: true
    },
    duration_unit: { 
        type: String,
        required: true
    },
    host: memberSchema,
    participants:[memberSchema],
    location:locationSchema,
    description: String,
    start_time: Date,
    end_time: Date

    });

    mongoose.model('Event', eventSchema);
