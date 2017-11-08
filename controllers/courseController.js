var Course = require('../models/course');

// Display list of all Courses
exports.course_list = function (req, res) {
    Course.find().then((data) => {
            res.render('course/index', { courses : data })
        }).catch((err) => {
            res.render('error', err);
    })
};

// Display detail page for a specific Courses
exports.course_detail = function (req, res) {
    Course.findById(req.params.id).then((data) => {
        res.render('course/course.show.html', { course : data })
    }).catch((err) => {
        res.render('error', err);
    })
};

// Display Courses create form on GET
exports.course_create_get = function (req, res) {
    res.render('course/course.create.html')
};

// Handle Courses create on POST
exports.course_create_post = function (req, res) {
    return new Course(req.body).save()
        .then(data => {
            res.redirect('/courses')
        })
        .catch(err => {
            res.render('error', err)
        })

};

// Display Courses delete form on GET
exports.course_delete_get = function (req, res) {
    Course.findByIdAndRemove(req.params.id)
        .then(data => {
            res.redirect('/courses')
        })
        .catch(err => {
            res.render('error', err)
        })
};

// Handle Courses delete on POST
exports.course_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Course delete POST');
};

// Display Courses update form on GET
exports.course_update_get = function (req, res) {
    Course.findById(req.params.id)
        .then(data => {
            res.render('course/course.edit.html', { course : data })
        })
        .catch(err => {
            res.render('error', err)
        })
};

// Handle Courses update on POST
exports.course_update_post = function (req, res) {
    Course.findByIdAndUpdate(req.params.id, req.body)
        .then(data => {
            res.redirect('/courses')
        })
        .catch(err => {
            res.render('error', err)
        })
};
