var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CourseSchema = Schema(
    {
        course_name: {type: String, required: true, max: 100},

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