const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: Date,
})
const flightSchema = new Schema({
    airline:{
        type:String,
        enum: ['American', 'Southwest', 'Alaska Airlines', 'United'],
    } ,
    airport:{
        type:String,
        enum: ['AUS','DFW','DEN','LAX','SAN']
    },
    destinations:[destinationSchema],
    flightNo:{
        type:Number,
        min:10,
        max:9999
    },
    departs:Date
}, {
    timestamps:true
});
module.exports = mongoose.model('Flight', flightSchema);