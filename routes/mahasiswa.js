const router = require('express').Router();
const mahasiswaController = require('../controllers/mahasiswaController');

router.get('/', mahasiswaController.index);
router.post('/store', mahasiswaController.store);
router.put('/update', mahasiswaController.update);
router.delete('/delete/:id', mahasiswaController.delete);

module.exports = router;