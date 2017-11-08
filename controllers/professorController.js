'use strict';

var Professor = require('../models/professor');

// Display list of all Professors
exports.professor_list = function(req, res) {
    Professor.find({}, function(err, data){
        if(err) res.render('error');
        else res.render('professor/index', { professors : data })
    });
};

// Display detail page for a specific professors
exports.professor_detail = function(req, res) {
    Professor.findById(req.params.id, function(err, data){
        if(err) res.render('error');
        else res.render('professor/professor.show.html', { professor: data})
    })
};

// Display Professor create form on GET
exports.professor_create_get = function(req, res) {
    res.render('professor/professor.create.html', {})
};

// Handle Professor create on POST
exports.professor_create_post = function(req, res) {
    var professor = new Professor(req.body);
    professor.save(req.body, function(err, data) {
        if(err) res.render('error', err);
        else res.redirect('/professor')
    })

};

// Display Professor delete form on GET
exports.professor_delete_get = function(req, res) {
    Professor.findByIdAndRemove(req.params.id, function(err, data){
        if(err) res.render('error');
        else res.redirect('/professor')
    })
};

// Handle Professor delete on POST
exports.professor_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Professor delete POST');
};

// Display Professor update form on GET
exports.professor_update_get = function(req, res) {
    Professor.findById(req.params.id, function(err, data){
        if(err) res.render('error');
        else res.render('professor/professor.edit.html', { professor: data})
    })
};

// Handle Professor update on POST
exports.professor_update_post = function(req, res) {
    Professor.findByIdAndUpdate(req.params.id, req.body, function(err, data){
        if(err) res.render('error');
        else res.redirect('/professor')
    })
};
