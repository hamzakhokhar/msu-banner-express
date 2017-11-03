var express = require('express');
var router = express.Router();

// Require controller modules
var section_controller = require('../controllers/sectionController');


/// Section ROUTES ///

/* GET sections home page. */
// router.get('/', section_controller.index);

/* GET request for creating a sections. NOTE This must come before routes that display Book (uses id) */
router.get('/create', section_controller.section_create_get);

/* POST request for creating sections. */
router.post('/create', section_controller.section_create_post);

/* GET request to delete sections. */
router.get('/:id/delete', section_controller.section_delete_get);

// POST request to delete sections
router.post('/:id/delete', section_controller.section_delete_post);

/* GET request to update sections. */
router.get('/:id/update', section_controller.section_update_get);

// POST request to update sections
router.post('/:id/update', section_controller.section_update_post);

/* GET request for one sections. */
router.get('/:id', section_controller.section_detail);

/* GET request for list of all sections items. */
router.get('/', section_controller.section_list);
module.exports = router;