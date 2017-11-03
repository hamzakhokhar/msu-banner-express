var express = require('express');
var router = express.Router();

// Require controller modules
var course_controller = require('../controllers/courseController');


/// courses ROUTES ///

/* GET sections home page. */
// router.get('/', course_controller.index);

/* GET request for creating a courses. NOTE This must come before routes that display Course (uses id) */
router.get('/courses/create', course_controller.course_create_get);

/* POST request for creating courses. */
router.post('/courses/create', course_controller.course_create_post);

/* GET request to delete courses. */
router.get('/courses/:id/delete', course_controller.course_delete_get);

// POST request to delete courses
router.post('/courses/:id/delete', course_controller.course_delete_post);

/* GET request to update courses. */
router.get('/courses/:id/update', course_controller.course_update_get);

// POST request to update courses
router.post('/courses/:id/update', course_controller.course_update_post);

/* GET request for one courses. */
router.get('/courses/:id', course_controller.course_detail);

/* GET request for list of all courses items. */
router.get('/courses', course_controller.course_list);
module.exports = router;