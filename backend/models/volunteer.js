const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { type } = require('os');

const volunteerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    points: {type: Number, default: 0},
    level: {type: String, default:'Cleaner'},
    rank: {type: String, default:'Guardian'},
    waste_collected: {type:Number, default: 0},
    work_time: {type:Number, default: 0},
    events_participated: {type:Number, default: 0},
},{timeStamp:true});

module.exports = mongoose.model('volunteer', volunteerSchema)