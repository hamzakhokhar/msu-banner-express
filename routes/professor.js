var express = require('express');
var router = express.Router();

// Require controller modules
var professor_controller = require('../controllers/professorController');


/// Professor ROUTES ///

/* GET sections home page. */
// router.get('/', professor_controller.index);

/* GET request for creating a professors. NOTE This must come before routes that display professors (uses id) */
router.get('/create', professor_controller.professor_create_get);

/* POST request for creating professors. */
router.post('/', professor_controller.professor_create_post);

/* GET request to delete professors. */
router.get('/:id/delete', professor_controller.professor_delete_get);

// POST request to delete professors
router.post('/:id/delete', professor_controller.professor_delete_post);

/* GET request to update professors. */
router.get('/:id/edit', professor_controller.professor_update_get);

// POST request to update professors
router.post('/:id', professor_controller.professor_update_post);

/* GET request for one professors. */
router.get('/:id', professor_controller.professor_detail);

/* GET request for list of all professors items. */
router.get('/', professor_controller.professor_list);


module.exports = router;