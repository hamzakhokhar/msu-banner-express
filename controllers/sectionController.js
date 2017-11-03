var Section = require('../models/section');


// Display list of all Section
exports.section_list = function(req, res) {
    res.render('sections/index', {
        sections: [{
            id: 1
        }],

    });
};

// Display detail page for a specific Section
exports.section_detail = function(req, res) {
   res.render('sections/section.edit.ejs', {
       id: 1
   })
};

// Display Section create form on GET
exports.section_create_get = function(req, res) {
    res.render('sections/section.create.ejs')
};

// Handle Section create on POST
exports.section_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre create POST');
};

// Display Section delete form on GET
exports.section_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle Section delete on POST
exports.section_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Section update form on GET
exports.section_update_get = function(req, res) {
    Section.save(req.body);
    res.render('sections/section.show');
};

// Handle Section update on POST
exports.section_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update POST');
};

