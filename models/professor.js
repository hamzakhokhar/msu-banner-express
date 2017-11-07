var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProfessorSchema = Schema(
    {
        firstName: {type: String, required: true, max: 100},
        lastName: {type: String, required: true, max: 100}
    }
);

// Virtual for professors full name
ProfessorSchema
    .virtual('name')
    .get(function () {
        return this.family_name + ', ' + this.first_name;
    });

// Virtual for professors URL
ProfessorSchema
    .virtual('url')
    .get(function () {
        return '/professors/' + this._id;
    });

//Export model
module.exports = mongoose.model('Professor', ProfessorSchema);
