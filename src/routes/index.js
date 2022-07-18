const {
  get: getAllDosen,
  store: storeDosen,
  update: updateDosen,
  deleteData: deleteDosen,
} = require('../controller/DosenController');

const router = require('express').Router();

// cruds dosen route
router.get('/dosen', getAllDosen);
router.post('/dosen', storeDosen);
router.put('/dosen/:id', updateDosen);
router.delete('/dosen/:id', deleteDosen);

module.exports = router;
