'use strict';

const Section = require('../models/section');
const Professor = require('../models/professor');
const Course = require('../models/course');

// Display list of all Section
exports.section_list = function(req, res) {
    Section.find({}, function(err, data){
        if(err) res.render('error');
        else res.render('section/index', { sections : data })
    });
};

// Display detail page for a specific Section
exports.section_detail = function(req, res) {
    Section.findById(req.params.id)
        .then((section) => Promise.all([
            Professor.findById(section.professor),
            Course.findById(section.course),
            section
        ]))
        .then(data => {
            res.render('section/section.show.html', { professor: data[0], course: data[1], section: data[2] })
        })
        .catch(err => {
            res.render('error');
        });
};

// Display Section create form on GET
exports.section_create_get = function(req, res) {
    Promise.all([
        Professor.find(),
        Course.find()
    ]).then((data) => {
        res.render('section/section.create.html', {
            professors: data[0],
            courses: data[1]
        })
    }).catch((err) => {
        res.render('error', err)
    })
};

// Handle Section create on POST
exports.section_create_post = function(req, res) {
    var section = new Section(req.body);
    section.save(req.body, function(err, data) {
        if(err) res.render('error', err);
        else res.redirect('/sections')
    })

};

// Display Section delete form on GET
exports.section_delete_get = function(req, res) {
    Section.findByIdAndRemove(req.params.id, function(err, data){
        if(err) res.render('error');
        else res.redirect('/sections')
    })
};

// Handle Section delete on POST
exports.section_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Section update form on GET
exports.section_update_get = function(req, res) {
    Section.findById(req.params.id, function(err, data){
        if(err) res.render('error');
        else res.render('section/section.edit.html', { section: data})
    })
};

// Handle Section update on POST
exports.section_update_post = function(req, res) {
    Section.findByIdAndUpdate(req.params.id, req.body, function(err, data){
        if(err) res.render('error');
        else res.redirect('/section')
    })
};

