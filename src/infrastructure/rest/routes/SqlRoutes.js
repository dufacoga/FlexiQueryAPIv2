const express = require('express');
const router = express.Router();
const sqlController = require('../controllers/sqlController');

router.post('/insert', sqlController.insert);
router.put('/update', sqlController.update);
router.delete('/delete', sqlController.delete);
router.post('/select', sqlController.select);

module.exports = router;