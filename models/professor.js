var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProfessorSchema = Schema(
    {
        first_name: {type: String, required: true, max: 100},
        family_name: {type: String, required: true, max: 100},
        date_of_birth: {type: Date},
        date_of_death: {type: Date},
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
