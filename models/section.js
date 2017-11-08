var mongoose = require('mongoose');
var Professor = require('./professor');
var course = require('./course');
var Schema = mongoose.Schema;

var SectionSchema = Schema(
    {
        // section_number: {type: String, required: true, max: 100},
        // class_location: {type: String, required: true, max: 100},
        professor: {type: Schema.ObjectId, ref: 'professor', required: true},
        course: {type: Schema.ObjectId,ref: 'course' , required: true}

    }
);

// Virtual for sections full name
SectionSchema
    .virtual('name')
    .get(function () {
        return this.section_number;
    });

// Virtual for sections URL
SectionSchema
    .virtual('url')
    .get(function () {
        return '/sections/' + this._id;
    });

//Export model
module.exports = mongoose.model('Section', SectionSchema);