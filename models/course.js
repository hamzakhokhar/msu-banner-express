var mongoose = require('mongoose');
var section = require('./section.js');
var Schema = mongoose.Schema;

var CourseSchema = Schema(
    {
        courseName: {type: String, required: true, max: 100},
        sections: [{type: Schema.ObjectId, ref:'section'}]

    }
);

// Virtual for courses full name
CourseSchema
    .virtual('name')
    .get(function () {
        return this.course_name;
    });

// Virtual for courses URL
CourseSchema
    .virtual('url')
    .get(function () {
        return '/courses/' + this._id;
    });

//Export model
module.exports = mongoose.model('Course', CourseSchema);